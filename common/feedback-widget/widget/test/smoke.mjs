/* 스모크 테스트 — jsdom에서 번들(React)을 실행해 핵심 시나리오를 검증한다 */
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

const code = readFileSync(new URL("../dist/widget.js", import.meta.url), "utf8");
const PAGE = `<html><body><main><h1 id="title">테스트 페이지 제목</h1><p>본문 문단입니다.</p></main></body></html>`;
const SEED_PAGE = PAGE.replace(
  "</body>",
  `<script data-project="default" data-seed="/feedback-seed.json"></script></body>`,
);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function boot(setup, page = PAGE) {
  const dom = new JSDOM(page, {
    url: "http://localhost/",
    runScripts: "outside-only",
    pretendToBeVisual: true,
  });
  dom.window.scrollTo = () => {};
  if (setup) setup(dom.window);
  dom.window.eval(code);
  await new Promise((resolve) => {
    if (dom.window.document.readyState !== "loading") resolve();
    else dom.window.addEventListener("DOMContentLoaded", resolve);
  });
  await wait(120); // React 첫 커밋 + 시드 fetch 대기
  return dom.window;
}

const shadowOf = (w) => w.document.getElementById("fbw-host")?.shadowRoot;
const btnByText = (root, text) =>
  [...root.querySelectorAll("button")].find((b) => b.textContent.trim() === text);
/* React 제어 입력 — 네이티브 setter로 값 주입 후 input 이벤트 발화 */
const setValue = (w, el, value) => {
  const proto =
    el.tagName === "TEXTAREA" ? w.HTMLTextAreaElement.prototype : w.HTMLInputElement.prototype;
  Object.getOwnPropertyDescriptor(proto, "value").set.call(el, value);
  el.dispatchEvent(new w.Event("input", { bubbles: true }));
};
const rightClick = (w, el) =>
  el.dispatchEvent(
    new w.MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX: 30, clientY: 30 }),
  );

// 1) 번들 크기 (기획서 §3 예산 450KB)
const kb = Buffer.byteLength(code) / 1024;
assert.ok(kb <= 450, `번들이 예산 초과: ${kb.toFixed(1)}KB`);

// 2) 마운트 + Shadow DOM + 토글
const w1 = await boot();
const s1 = shadowOf(w1);
assert.ok(s1, "호스트/Shadow DOM 없음");
assert.ok(s1.querySelector(".fbw-toggle"), "토글 버튼 없음");

// 3) 중복 주입 방지
w1.eval(code);
assert.equal(w1.document.querySelectorAll("#fbw-host").length, 1, "중복 마운트됨");

// 4) 모드 켜기 → 세션 저장 + 사이드탭 등장
s1.querySelector(".fbw-toggle").click();
await wait(60);
assert.equal(w1.sessionStorage.getItem("fbw:mode:default"), "1", "모드 저장 안 됨");
assert.ok(s1.querySelector(".fbw-sidetab"), "모드 ON 후 사이드탭 없음");

// 5) 우클릭 → 작성 팝오버(+선택 박스), 빈 내용은 버튼 비활성
rightClick(w1, w1.document.getElementById("title"));
await wait(60);
assert.ok(s1.querySelector(".fbw-composer"), "작성 팝오버 없음");
assert.ok(s1.querySelector(".fbw-selectbox"), "대상 하이라이트 박스 없음");
assert.ok(btnByText(s1, "Post").disabled, "빈 내용인데 남기기 버튼이 활성");

setValue(w1, s1.querySelector("textarea"), "제목 문구를 바꿔 주세요");
setValue(w1, s1.querySelector('input[aria-label="Author name"]'), "테스터");
await wait(30);
btnByText(s1, "Post").click();
await wait(60);

const threads1 = JSON.parse(w1.localStorage.getItem("fbw:v2:default"));
assert.equal(threads1.length, 1, "스레드가 저장되지 않음");
assert.equal(threads1[0].comments[0].body, "제목 문구를 바꿔 주세요");
assert.equal(threads1[0].comments[0].author, "테스터");
assert.equal(threads1[0].anchor.selector, "#title", "id 셀렉터가 아님");
assert.equal(threads1[0].resolved, false);
assert.ok(threads1[0].meta.userAgent.length > 0, "메타데이터 없음");

// 6) 저장 직후 — 스레드 팝오버 자동 오픈 + 사이드바 카드 + 배지
assert.ok(s1.querySelector(".fbw-thread"), "저장 후 스레드 팝오버가 안 열림");
assert.ok(s1.querySelector(".fbw-card"), "사이드바 카드 없음");
assert.ok(s1.querySelector(".fbw-toggle").textContent.includes("1"), "배지 카운트 불일치");

// 7) 답글 — 대화가 쌓이고, 내 답글만 삭제 가능 (확인 모달: 취소/확인)
setValue(w1, s1.querySelector(".fbw-thread").parentElement.querySelector("textarea"), "반영해 주셔서 감사합니다");
await wait(30);
btnByText(s1, "Reply").click();
await wait(60);
let t1 = JSON.parse(w1.localStorage.getItem("fbw:v2:default"))[0];
assert.equal(t1.comments.length, 2, "답글이 저장되지 않음");
assert.equal(t1.comments[1].body, "반영해 주셔서 감사합니다");

const replyDel = s1.querySelector('button[aria-label="Delete reply"]');
assert.ok(replyDel, "내 답글에 삭제 버튼이 없음");
replyDel.click();
await wait(60);
assert.ok(btnByText(s1, "Delete"), "삭제 확인 모달이 안 뜸");
btnByText(s1, "Cancel").click();
await wait(60);
assert.equal(
  JSON.parse(w1.localStorage.getItem("fbw:v2:default"))[0].comments.length,
  2,
  "취소했는데 답글이 삭제됨",
);
s1.querySelector('button[aria-label="Delete reply"]').click();
await wait(60);
btnByText(s1, "Delete").click();
await wait(60);
assert.equal(
  JSON.parse(w1.localStorage.getItem("fbw:v2:default"))[0].comments.length,
  1,
  "확인했는데 답글이 안 지워짐",
);

// 8) 완료 처리 — resolved 저장, 핀 걷힘, 사이드바 완료됨 그룹으로
btnByText(s1, "Archive").click();
await wait(60);
assert.equal(
  JSON.parse(w1.localStorage.getItem("fbw:v2:default"))[0].resolved,
  true,
  "완료가 저장 안 됨",
);
await wait(80); // 핀 재배치(rAF)
assert.equal(s1.querySelectorAll(".fbw-pin").length, 0, "완료 스레드의 핀이 안 걷힘");
assert.ok(btnByText(s1, "Show archived (1)"), "사이드바 완료됨 그룹 없음");
btnByText(s1, "Unarchive").click();
await wait(60);
assert.equal(
  JSON.parse(w1.localStorage.getItem("fbw:v2:default"))[0].resolved,
  false,
  "완료 취소가 저장 안 됨",
);

// 9) v0 → v2 자동 마이그레이션 (기획서 §9 Q3)
const w2 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
  w.localStorage.setItem(
    "fbw:default",
    JSON.stringify([
      {
        id: "old-1",
        createdAt: "2026-07-15T10:00:00.000Z",
        author: "고객",
        anchor: { page: "/", selector: "#title", textSnippet: "테스트 페이지 제목", scrollY: 0 },
        type: "문구",
        priority: "A",
        content: "구버전 피드백",
        status: "완료",
        meta: { userAgent: "ua", viewport: "1x1" },
      },
    ]),
  );
});
const migrated = JSON.parse(w2.localStorage.getItem("fbw:v2:default"));
assert.equal(migrated.length, 1, "v0 데이터가 이관되지 않음");
assert.equal(migrated[0].comments[0].body, "구버전 피드백", "내용 이관 실패");
assert.equal(migrated[0].resolved, true, '상태 "완료" → resolved 매핑 실패');
assert.equal(w2.localStorage.getItem("fbw:default"), null, "구버전 키가 남아 있음");

// 10) 시드 로드(threads v2) — localStorage 미저장, 번호 연속
const seedThreads = [
  {
    id: "seed-01",
    createdAt: "2026-07-15T00:00:00.000Z",
    anchor: { page: "/", selector: "#title", textSnippet: "테스트 페이지 제목", scrollY: 0 },
    resolved: false,
    comments: [
      {
        id: "seed-01-c1",
        author: "고객 (기존 접수)",
        body: "기존에 접수된 피드백",
        createdAt: "2026-07-15T00:00:00.000Z",
      },
    ],
    meta: { userAgent: "", viewport: "" },
    origin: "seed",
  },
];
const seedFetch = (w) => {
  w.fetch = (url) =>
    Promise.resolve({
      ok: url === "/feedback-seed.json",
      json: () => Promise.resolve({ project: "default", schemaVersion: 2, threads: seedThreads }),
    });
};
const w3 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
  seedFetch(w);
}, SEED_PAGE);
const s3 = shadowOf(w3);
assert.equal(s3.querySelectorAll(".fbw-card").length, 1, "시드 스레드가 목록에 없음");
assert.ok(s3.querySelector(".fbw-card").textContent.includes("기존에 접수된 피드백"));
assert.equal(w3.localStorage.getItem("fbw:v2:default"), null, "시드가 localStorage에 저장됨");

rightClick(w3, w3.document.getElementById("title"));
await wait(60);
setValue(w3, s3.querySelector("textarea"), "새로 작성한 코멘트");
await wait(30);
btnByText(s3, "Post").click();
await wait(60);
assert.equal(s3.querySelectorAll(".fbw-card").length, 2, "시드+새 작성 목록 불일치");
const nums = [...s3.querySelectorAll(".fbw-card")].map((c) => c.querySelector("span").textContent);
assert.deepEqual(nums, ["1", "2"], "번호가 시드에 이어지지 않음");
// 새 작성분 팝오버 닫기
s3.querySelector(".fbw-thread").parentElement.querySelector('button[aria-label="Close"]').click();
await wait(60);

// 11) 핀 — 같은 요소의 두 핀 전개, hover 하이라이트, click → 스레드 팝오버
await wait(80);
const pins = s3.querySelectorAll(".fbw-pin");
assert.equal(pins.length, 2, "핀 개수 불일치 (시드+새 작성)");
assert.notEqual(pins[0].style.left, pins[1].style.left, "같은 위치 핀이 겹침");
pins[0].dispatchEvent(new w3.MouseEvent("mouseover", { bubbles: true }));
await wait(60);
const pinHover = s3.querySelector(".fbw-pin-hoverbox");
assert.ok(pinHover, "핀 hover 시 영역 하이라이트 없음");
assert.equal(pinHover.getAttribute("data-label"), "Comment 1", "hover 라벨 불일치");
pins[0].dispatchEvent(new w3.MouseEvent("mouseout", { bubbles: true }));
await wait(60);
assert.equal(s3.querySelector(".fbw-pin-hoverbox"), null, "hover 해제 후 하이라이트 잔존");
pins[0].click();
await wait(60);
assert.ok(s3.querySelector(".fbw-thread"), "핀 클릭 시 스레드 팝오버가 안 열림");
assert.ok(
  s3.querySelector(".fbw-thread").textContent.includes("Comment 1"),
  "다른 스레드가 열림",
);

// 12) 시드에 답글 → override 영속화, 재부팅 후에도 유지
setValue(w3, s3.querySelector(".fbw-thread").parentElement.querySelector("textarea"), "시드에 단 답글");
await wait(30);
btnByText(s3, "Reply").click();
await wait(60);
const ov3 = JSON.parse(w3.localStorage.getItem("fbw:v2:overrides:default"));
assert.equal(ov3["seed-01"].addedComments.length, 1, "시드 답글이 override로 영속화 안 됨");
assert.equal(ov3["seed-01"].addedComments[0].body, "시드에 단 답글");

const w4 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
  w.localStorage.setItem(
    "fbw:v2:overrides:default",
    w3.localStorage.getItem("fbw:v2:overrides:default"),
  );
  seedFetch(w);
}, SEED_PAGE);
const s4 = shadowOf(w4);
assert.ok(
  s4.querySelector(".fbw-card").textContent.includes("1 replies"),
  "재부팅 후 시드 답글이 사라짐",
);

// 13) 시드 삭제(숨김) — 확인 모달 후 목록에서 제거 + 영속화
s4.querySelector('.fbw-card button[aria-label="Delete thread"]').click();
await wait(60);
btnByText(s4, "Delete").click();
await wait(60);
assert.equal(s4.querySelectorAll(".fbw-card").length, 0, "시드 삭제(숨김) 미반영");
const ov4 = JSON.parse(w4.localStorage.getItem("fbw:v2:overrides:default"));
assert.equal(ov4["seed-01"].hidden, true, "숨김이 영속화되지 않음");

// 14) 폴백 점프 — 깨진 셀렉터로 새로 부팅, 카드 클릭 → 텍스트 폴백 flash + 팝오버
const w5 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
  w.localStorage.setItem(
    "fbw:v2:default",
    JSON.stringify([
      {
        id: "broken-1",
        createdAt: "2026-07-15T10:00:00.000Z",
        anchor: {
          page: "/",
          selector: "#no-such-element", // 일부러 깨뜨린 셀렉터
          textSnippet: "테스트 페이지 제목",
          scrollY: 0,
        },
        resolved: false,
        comments: [
          {
            id: "c1",
            author: "테스터",
            body: "폴백 점프 테스트",
            createdAt: "2026-07-15T10:00:00.000Z",
          },
        ],
        meta: { userAgent: "ua", viewport: "1x1" },
      },
    ]),
  );
});
const s5 = shadowOf(w5);
const card5 = s5.querySelector(".fbw-card");
assert.ok(card5, "부팅 시 저장 스레드가 목록에 없음");
card5.click(); // jump(): 셀렉터 실패 → 텍스트 폴백 → flash → 팝오버
await wait(700);
assert.ok(
  w5.document.getElementById("title").style.outline.includes("3px solid"),
  "폴백으로 요소를 찾지 못함 (flash 없음)",
);
const popover5 = s5.querySelector(".fbw-thread");
assert.ok(popover5, "카드 클릭 시 스레드 팝오버가 안 열림");
assert.ok(popover5.parentElement.textContent.includes("폴백 점프 테스트"), "팝오버 내용 불일치");
// version 없는 스레드 — Compare 비활성
assert.ok(btnByText(s5, "Compare").disabled, "version 없는 스레드인데 Compare가 활성");

// 15) 버전 기록 — data-version이 최초 코멘트·답글에 기록되고 칩이 보인다
const VERSION_PAGE = PAGE.replace(
  "</body>",
  `<script data-project="default" data-version="aaa1111"></script></body>`,
);
const w6 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
}, VERSION_PAGE);
const s6 = shadowOf(w6);
rightClick(w6, w6.document.getElementById("title"));
await wait(60);
setValue(w6, s6.querySelector("textarea"), "버전 기록 테스트");
await wait(30);
btnByText(s6, "Post").click();
await wait(60);
const vThread = JSON.parse(w6.localStorage.getItem("fbw:v2:default"))[0];
assert.equal(vThread.comments[0].version, "aaa1111", "최초 코멘트에 version 미기록");
assert.ok(s6.querySelector(".fbw-verchip"), "버전 칩이 안 보임");
assert.equal(s6.querySelector(".fbw-verchip").textContent, "aaa1111");
setValue(w6, s6.querySelector(".fbw-thread").parentElement.querySelector("textarea"), "답글에도 버전");
await wait(30);
btnByText(s6, "Reply").click();
await wait(60);
assert.equal(
  JSON.parse(w6.localStorage.getItem("fbw:v2:default"))[0].comments[1].version,
  "aaa1111",
  "답글에 version 미기록",
);

// 16) Compare 오버레이 — Before(:3001)/After(현재) iframe이 embed URL로 뜬다
assert.ok(!btnByText(s6, "Compare").disabled, "version 있는데 Compare 비활성");
btnByText(s6, "Compare").click();
await wait(60);
const overlay = s6.querySelector(".fbw-compare");
assert.ok(overlay, "비교 오버레이가 안 뜸");
assert.equal(
  overlay.querySelector(".fbw-compare-before").getAttribute("src"),
  "http://localhost:3001/?fbw=embed",
  "Before iframe URL 불일치",
);
assert.equal(
  overlay.querySelector(".fbw-compare-after").getAttribute("src"),
  "http://localhost/?fbw=embed",
  "After iframe URL 불일치",
);
assert.ok(overlay.textContent.includes("aaa1111"), "헤더에 Before 버전 표기 없음");
overlay.querySelector('button[aria-label="Close"]').click();
await wait(60);
assert.equal(s6.querySelector(".fbw-compare"), null, "오버레이가 안 닫힘");

// 17) embed 모드 — URL 파라미터(?fbw=embed)로 부팅하면 UI 없이 점프 수신부만 동작
const w8 = await (async () => {
  const dom = new JSDOM(PAGE, {
    url: "http://localhost/?fbw=embed",
    runScripts: "outside-only",
    pretendToBeVisual: true,
  });
  dom.window.scrollTo = () => {};
  dom.window.sessionStorage.setItem("fbw:mode:default", "1"); // 모드가 켜져 있어도 UI가 없어야 한다
  dom.window.eval(code);
  await wait(120);
  return dom.window;
})();
assert.equal(w8.document.getElementById("fbw-host"), null, "embed 모드인데 위젯 UI가 마운트됨");
w8.dispatchEvent(
  new w8.MessageEvent("message", {
    data: {
      type: "fbw:jump",
      anchor: { page: "/", selector: "#title", textSnippet: "", scrollY: 0 },
    },
  }),
);
await wait(500); // flash는 스크롤 안착 후 350ms
assert.ok(
  w8.document.getElementById("title").style.outline.includes("3px solid"),
  "embed 모드에서 fbw:jump 점프가 안 됨",
);

console.log(`✅ 스모크 테스트 통과 (번들 ${kb.toFixed(1)}KB, 17개 시나리오)`);
