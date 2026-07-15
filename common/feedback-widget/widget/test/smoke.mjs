/* 스모크 테스트 — jsdom에서 번들을 실행해 핵심 시나리오를 검증한다 */
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

const code = readFileSync(new URL("../dist/widget.js", import.meta.url), "utf8");
const PAGE = `<html><body><main><h1 id="title">테스트 페이지 제목</h1><p>본문 문단입니다.</p></main></body></html>`;

async function boot(seed, page = PAGE) {
  const dom = new JSDOM(page, {
    url: "http://localhost/",
    runScripts: "outside-only",
    pretendToBeVisual: true,
  });
  dom.window.scrollTo = () => {};
  if (seed) seed(dom.window);
  dom.window.eval(code);
  await new Promise((resolve) => {
    if (dom.window.document.readyState !== "loading") resolve();
    else dom.window.addEventListener("DOMContentLoaded", resolve);
  });
  return dom.window;
}

const tick = () => new Promise((r) => setTimeout(r, 0));

// 1) 번들 크기 30KB 이하 (기획서 검증 기준)
const kb = Buffer.byteLength(code) / 1024;
assert.ok(kb <= 30, `번들이 너무 큽니다: ${kb.toFixed(1)}KB`);

const window = await boot();
const shadow = window.document.getElementById("fbw-host")?.shadowRoot;

// 2) 호스트 마운트 + Shadow DOM
assert.ok(shadow, "호스트/Shadow DOM 없음");
const toggle = shadow.querySelector(".fbw-toggle");
assert.ok(toggle, "토글 버튼 없음");

// 3) 중복 주입 방지
window.eval(code);
assert.equal(window.document.querySelectorAll("#fbw-host").length, 1, "중복 마운트됨");

// 4) 모드 켜기
toggle.click();
assert.equal(window.sessionStorage.getItem("fbw:mode:default"), "1", "모드 저장 안 됨");

// 5) 우클릭 → 폼(+선택 박스) → 저장 → localStorage
const h1 = window.document.getElementById("title");
const rightClick = () =>
  h1.dispatchEvent(
    new window.MouseEvent("contextmenu", {
      bubbles: true,
      cancelable: true,
      clientX: 30,
      clientY: 30,
    }),
  );
rightClick();
const form = shadow.querySelector(".fbw-form");
assert.ok(form, "우클릭 시 폼이 뜨지 않음");
assert.ok(shadow.querySelector(".fbw-selectbox"), "작성 중 대상 하이라이트 박스 없음");
assert.equal(form.querySelector(".fbw-btn-danger"), null, "신규 작성 폼에 삭제 버튼이 있음");
form.querySelector("textarea").value = "제목 문구를 바꿔 주세요";
form.querySelector("[data-role=author]").value = "테스터";
form.querySelector("[data-role=save]").click();
assert.equal(shadow.querySelector(".fbw-selectbox"), null, "저장 후 선택 박스가 남아 있음");

const saved = JSON.parse(window.localStorage.getItem("fbw:default"));
assert.equal(saved.length, 1, "항목이 저장되지 않음");
const item = saved[0];
assert.equal(item.content, "제목 문구를 바꿔 주세요");
assert.equal(item.author, "테스터");
assert.equal(item.anchor.selector, "#title", "id 셀렉터가 아님");
assert.ok(item.meta.userAgent.length > 0, "메타데이터 없음");
assert.equal(item.status, "대기");

// 6) 사이드바 카드 + 배지, 빈 내용 저장 거부
assert.ok(shadow.querySelector(".fbw-card"), "사이드바 카드 없음");
assert.equal(shadow.querySelector(".fbw-toggle-badge")?.textContent, "1", "배지 카운트 불일치");
rightClick();
shadow.querySelector(".fbw-form [data-role=save]").click();
assert.ok(shadow.querySelector(".fbw-form textarea.fbw-error"), "빈 내용 검증 안 됨");
assert.equal(JSON.parse(window.localStorage.getItem("fbw:default")).length, 1, "빈 항목이 저장됨");
shadow.querySelector(".fbw-form [data-role=cancel]").click();

// 7) 삭제 확인 모달 — 취소하면 유지, 확인하면 삭제
shadow.querySelector(".fbw-card-del").click();
await tick();
const modal = shadow.querySelector(".fbw-modal-backdrop");
assert.ok(modal, "삭제 확인 모달이 뜨지 않음");
modal.querySelector("[data-role=cancel]").click();
await tick();
assert.equal(JSON.parse(window.localStorage.getItem("fbw:default")).length, 1, "취소했는데 삭제됨");
assert.equal(shadow.querySelector(".fbw-modal-backdrop"), null, "취소 후 모달이 안 닫힘");

shadow.querySelector(".fbw-card-del").click();
await tick();
shadow.querySelector(".fbw-modal-backdrop [data-role=confirm]").click();
await tick();
assert.equal(JSON.parse(window.localStorage.getItem("fbw:default")).length, 0, "확인했는데 삭제 안 됨");
assert.equal(shadow.querySelector(".fbw-card"), null, "삭제 후 카드가 남아 있음");

// 8) 텍스트 폴백 복원 — 깨진 셀렉터가 저장된 상태로 새로 부팅해 점프
const window2 = await boot((w) => {
  w.localStorage.setItem(
    "fbw:default",
    JSON.stringify([
      {
        id: "broken-1",
        createdAt: "2026-07-15T10:00:00.000Z",
        author: "테스터",
        anchor: {
          page: "/",
          selector: "#no-such-element", // 일부러 깨뜨린 셀렉터
          textSnippet: "테스트 페이지 제목",
          scrollY: 0,
        },
        type: "문구",
        priority: "B",
        content: "폴백 점프 테스트",
        status: "대기",
        meta: { userAgent: "ua", viewport: "1x1" },
      },
    ]),
  );
  w.sessionStorage.setItem("fbw:mode:default", "1");
});
const shadow2 = window2.document.getElementById("fbw-host").shadowRoot;
const card2 = shadow2.querySelector(".fbw-card");
assert.ok(card2, "부팅 시 저장 항목이 목록에 없음");
card2.click(); // jump(): 셀렉터 실패 → 텍스트 폴백 → (스크롤 안착 후) flash + 수정 폼
await new Promise((r) => setTimeout(r, 600));
const h1b = window2.document.getElementById("title");
assert.ok(h1b.style.outline.includes("3px solid"), "폴백으로 요소를 찾지 못함 (flash 없음)");
const jumpForm = shadow2.querySelector(".fbw-form");
assert.ok(jumpForm, "카드 클릭 시 수정 폼이 안 열림");
assert.equal(jumpForm.querySelector("h4").textContent, "피드백 수정");
assert.equal(jumpForm.querySelector("textarea").value, "폴백 점프 테스트", "수정 폼 미리채움 실패");

// 9) 시드 로드 — 읽기 전용(삭제 버튼 없음), 내보내기 제외, 새 작성분과 번호 연속
const SEED_PAGE = PAGE.replace(
  "</body>",
  `<script data-project="default" data-seed="/feedback-seed.json"></script></body>`,
);
const seedItems = [
  {
    id: "seed-01",
    createdAt: "2026-07-15T00:00:00.000Z",
    author: "고객 (기존 접수)",
    anchor: { page: "/", selector: "#title", textSnippet: "테스트 페이지 제목", scrollY: 0 },
    type: "문구",
    priority: "A",
    content: "[홈-2] 기존에 접수된 피드백",
    status: "확인 필요",
    meta: { userAgent: "", viewport: "" },
    origin: "seed",
  },
];
const window3 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
  w.fetch = (url) =>
    Promise.resolve({
      ok: url === "/feedback-seed.json",
      json: () => Promise.resolve({ project: "default", items: seedItems }),
    });
}, SEED_PAGE);
await tick();
await tick(); // fetch → json → seed 반영 대기
const shadow3 = window3.document.getElementById("fbw-host").shadowRoot;
const cards3 = shadow3.querySelectorAll(".fbw-card");
assert.equal(cards3.length, 1, "시드 항목이 목록에 없음");
assert.ok(cards3[0].textContent.includes("기존에 접수된 피드백"), "시드 내용 불일치");
assert.ok(cards3[0].querySelector(".fbw-card-del"), "시드에 삭제 버튼이 없음");
assert.equal(window3.localStorage.getItem("fbw:default"), null, "시드가 localStorage에 저장됨");
// 시드 로드 후 새 작성 → 번호는 2번, 내보내기에는 새 작성분만
window3.document.getElementById("title").dispatchEvent(
  new window3.MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX: 20, clientY: 20 }),
);
const form3 = shadow3.querySelector(".fbw-form");
form3.querySelector("textarea").value = "새로 작성한 피드백";
form3.querySelector("[data-role=save]").click();
const localSaved = JSON.parse(window3.localStorage.getItem("fbw:default"));
assert.equal(localSaved.length, 1, "새 작성분이 시드와 섞여 저장됨");
assert.equal(shadow3.querySelectorAll(".fbw-card").length, 2, "시드+새 작성 목록 불일치");
assert.equal(
  shadow3.querySelectorAll(".fbw-card .fbw-card-num")[1].textContent,
  "2",
  "번호가 시드에 이어지지 않음",
);

// 10) 수정(연필) — 시드 포함 모두 가능, 새 작성분은 수정 후 localStorage 반영
const [seedCard, localCard] = shadow3.querySelectorAll(".fbw-card");
assert.ok(seedCard.querySelector(".fbw-card-edit"), "시드에 수정 버튼이 없음");
assert.ok(seedCard.querySelector(".fbw-card-del"), "시드에 삭제 버튼이 없음");
const editBtn = localCard.querySelector(".fbw-card-edit");
assert.ok(editBtn, "새 작성분에 수정 버튼이 없음");
editBtn.click();
const editForm = shadow3.querySelector(".fbw-form");
assert.ok(editForm, "수정 폼이 뜨지 않음");
assert.equal(editForm.querySelector("h4").textContent, "피드백 수정");
assert.equal(editForm.querySelector("textarea").value, "새로 작성한 피드백", "기존 내용 미리채움 실패");
editForm.querySelector("textarea").value = "수정된 피드백 내용";
editForm.querySelector("[data-role=priority]").value = "A";
editForm.querySelector("[data-role=save]").click();
const afterEdit = JSON.parse(window3.localStorage.getItem("fbw:default"));
assert.equal(afterEdit.length, 1, "수정이 새 항목으로 추가됨");
assert.equal(afterEdit[0].content, "수정된 피드백 내용", "내용 수정 반영 안 됨");
assert.equal(afterEdit[0].priority, "A", "중요도 수정 반영 안 됨");

// 11) 핀 hover → 영역 하이라이트 / 핀 click → 사이드바 해당 카드 강조
await new Promise((r) => setTimeout(r, 60)); // 핀은 rAF에서 렌더링 — 한 프레임 대기
const pins = shadow3.querySelectorAll(".fbw-pin");
assert.equal(pins.length, 2, "핀 개수 불일치 (시드+새 작성)");
// 같은 요소(#title)에 앵커된 두 핀은 겹치지 않고 나란히 전개되어야 한다
assert.notEqual(pins[0].style.left, pins[1].style.left, "같은 위치 핀이 겹침");
pins[0].dispatchEvent(new window3.MouseEvent("mouseenter"));
const pinHover = shadow3.querySelector(".fbw-pin-hoverbox");
assert.equal(pinHover.style.display, "block", "핀 hover 시 영역 하이라이트 없음");
assert.equal(pinHover.getAttribute("data-label"), "피드백 1", "hover 라벨 불일치");
pins[0].dispatchEvent(new window3.MouseEvent("mouseleave"));
assert.equal(pinHover.style.display, "none", "hover 해제 시 하이라이트가 안 사라짐");
pins[1].click();
assert.ok(
  shadow3.querySelector(".fbw-sidebar").classList.contains("fbw-open"),
  "핀 클릭 시 사이드바가 안 열림",
);
const focused = shadow3.querySelector(".fbw-card-focus");
assert.ok(focused, "핀 클릭 시 해당 카드 강조 없음");
assert.ok(focused.textContent.includes("수정된 피드백 내용"), "강조된 카드가 다른 항목");

// 12) 카드 클릭 — 시드 포함 전부 바로 수정 가능한 폼 ([닫기]+[저장]), 시드 수정은 override 영속화
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const [seedCard3, localCard3] = shadow3.querySelectorAll(".fbw-card");
seedCard3.click();
await wait(600);
const seedForm = shadow3.querySelector(".fbw-form");
assert.ok(seedForm, "시드 클릭 시 수정 폼이 안 뜸");
assert.equal(seedForm.querySelector("h4").textContent, "피드백 수정");
assert.ok(!seedForm.querySelector("textarea").disabled, "시드가 수정 불가 상태");
assert.equal(seedForm.querySelector("[data-role=cancel]").textContent, "닫기");
assert.ok(seedForm.querySelector("[data-role=save]"), "저장 버튼 없음");
assert.ok(seedForm.querySelector(".fbw-btn-danger"), "시드 폼에 삭제 버튼이 없음");
seedForm.querySelector("textarea").value = "시드 수정본 내용";
seedForm.querySelector("[data-role=save]").click();
const overrides = JSON.parse(window3.localStorage.getItem("fbw:overrides:default"));
assert.equal(overrides["seed-01"].content, "시드 수정본 내용", "시드 수정이 영속화 안 됨");
const cardsAfterEdit = shadow3.querySelectorAll(".fbw-card");
assert.ok(cardsAfterEdit[0].textContent.includes("시드 수정본 내용"), "목록에 수정 미반영");
assert.equal(cardsAfterEdit[0].querySelector(".fbw-card-num").textContent, "1", "번호가 바뀜");
assert.equal(
  JSON.parse(window3.localStorage.getItem("fbw:default")).length,
  1,
  "시드 수정이 새 항목으로 복제됨",
);

localCard3.click();
await wait(600);
const cardForm = shadow3.querySelector(".fbw-form");
assert.ok(cardForm, "새 작성분 클릭 시 수정 폼이 안 열림");
assert.equal(cardForm.querySelector("textarea").value, "수정된 피드백 내용", "미리채움 실패");

// 폼의 [삭제] 버튼 → 확인 모달 → 확인 시 삭제 + 폼 닫힘
const formDel = cardForm.querySelector(".fbw-btn-danger");
assert.ok(formDel, "수정 폼에 삭제 버튼 없음");
formDel.click();
await tick();
const delModal = shadow3.querySelector(".fbw-modal-backdrop");
assert.ok(delModal, "폼 삭제 확인 모달이 안 뜸");
delModal.querySelector("[data-role=cancel]").click();
await tick();
assert.equal(JSON.parse(window3.localStorage.getItem("fbw:default")).length, 1, "취소인데 삭제됨");
formDel.click();
await tick();
shadow3.querySelector(".fbw-modal-backdrop [data-role=confirm]").click();
await tick();
await tick();
assert.equal(JSON.parse(window3.localStorage.getItem("fbw:default")).length, 0, "폼 삭제 미반영");
assert.equal(shadow3.querySelector(".fbw-form"), null, "삭제 후 폼이 안 닫힘");

// 13) 재부팅 시 override 유지 — 시드를 다시 불러와도 수정본이 보인다
const window4 = await boot((w) => {
  w.sessionStorage.setItem("fbw:mode:default", "1");
  w.localStorage.setItem(
    "fbw:overrides:default",
    window3.localStorage.getItem("fbw:overrides:default"),
  );
  w.fetch = () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ project: "default", items: seedItems }),
    });
}, SEED_PAGE);
await tick();
await tick();
const shadow4 = window4.document.getElementById("fbw-host").shadowRoot;
assert.ok(
  shadow4.querySelector(".fbw-card").textContent.includes("시드 수정본 내용"),
  "재부팅 후 시드 수정본이 사라짐",
);

// 14) 시드 삭제 — 확인 후 목록에서 숨김, 영속화 (엑셀 원본 기록은 유지)
shadow4.querySelector(".fbw-card .fbw-card-del").click();
await tick();
shadow4.querySelector(".fbw-modal-backdrop [data-role=confirm]").click();
await tick();
assert.equal(shadow4.querySelectorAll(".fbw-card").length, 0, "시드 삭제(숨김) 미반영");
const ov4 = JSON.parse(window4.localStorage.getItem("fbw:overrides:default"));
assert.equal(ov4["seed-01"].hidden, true, "숨김이 영속화되지 않음");

console.log(`✅ 스모크 테스트 통과 (번들 ${kb.toFixed(1)}KB, 14개 시나리오)`);
