/* 우측 사이드바 — 목록·점프·삭제·내보내기. 열림 탭은 모드 ON일 때만 보인다 */
import { T } from "../tokens";
import { jump, requestJump } from "../anchor";
import { download, copyToClipboard } from "../export";
import { confirmModal } from "./modal";
import { openItemForm } from "./form";
import type { Store } from "../store";
import type { Status } from "../types";

export const css = `
.fbw-sidetab {
  position: fixed; right: 0; top: 50%; transform: translateY(-50%);
  padding: 10px 8px; border: none; border-radius: ${T.radius.field} 0 0 ${T.radius.field};
  background: ${T.color.accent}; color: ${T.color.onDark};
  font-size: 12px; font-weight: 700; writing-mode: vertical-rl;
  cursor: pointer; pointer-events: auto; box-shadow: ${T.shadow};
}
.fbw-sidebar {
  position: fixed; top: 0; right: 0; bottom: 0; width: ${T.sidebarW};
  background: ${T.color.panel}; border-left: 1px solid ${T.color.line};
  box-shadow: ${T.shadow}; pointer-events: auto;
  display: flex; flex-direction: column;
  transform: translateX(100%); transition: transform 0.2s;
}
.fbw-sidebar.fbw-open { transform: translateX(0); }
.fbw-sb-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; border-bottom: 1px solid ${T.color.line};
  font-size: 14px; font-weight: 700; color: ${T.color.text};
}
.fbw-sb-close { border: none; background: none; font-size: 16px; cursor: pointer; color: ${T.color.subtext}; }
.fbw-sb-list { flex: 1; overflow-y: auto; padding: 8px; display: flex; flex-direction: column; gap: 8px; }
.fbw-sb-empty { padding: 24px 16px; font-size: 13px; color: ${T.color.subtext}; text-align: center; }
.fbw-card {
  padding: 10px 12px; border: 1px solid ${T.color.line};
  border-radius: ${T.radius.field}; cursor: pointer; background: ${T.color.panel};
}
.fbw-card:hover { border-color: ${T.color.accent}; background: ${T.color.accentSoft}; }
.fbw-card-focus { border-color: ${T.color.accent}; background: ${T.color.accentSoft}; box-shadow: 0 0 0 2px ${T.color.accentSoft}; }
.fbw-card-top { display: flex; align-items: center; gap: 6px; font-size: 11px; color: ${T.color.subtext}; }
.fbw-card-num {
  min-width: 18px; height: 18px; border-radius: ${T.radius.pill};
  background: ${T.color.pin}; color: ${T.color.text};
  font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center;
}
.fbw-card-status { margin-left: auto; font-weight: 700; }
.fbw-card-edit, .fbw-card-del {
  border: none; background: none; cursor: pointer; padding: 0 2px;
  font-size: 13px; color: ${T.color.subtext};
}
.fbw-card-edit:hover { color: ${T.color.accent}; }
.fbw-card-del:hover { color: ${T.color.danger}; }
.fbw-card-body { margin-top: 5px; font-size: 13px; color: ${T.color.text}; word-break: keep-all; }
.fbw-card-page { margin-top: 4px; font-size: 11px; color: ${T.color.subtext}; }
.fbw-sb-foot { padding: 12px 16px; border-top: 1px solid ${T.color.line}; display: flex; gap: 8px; }
.fbw-sb-foot .fbw-btn { flex: 1; }
`;

const STATUS_COLOR: Record<Status, string> = {
  대기: T.color.statusWait,
  "진행 중": T.color.statusDoing,
  완료: T.color.statusDone,
  "확인 필요": T.color.statusAsk,
};

export interface Sidebar {
  open: () => void;
  /* 특정 피드백 카드로 이동 — 패널을 열고 해당 카드를 스크롤 + 잠시 강조 */
  focus: (id: string) => void;
}

export function initSidebar(root: HTMLElement, store: Store): Sidebar {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "fbw-sidetab";

  const panel = document.createElement("div");
  panel.className = "fbw-sidebar";
  panel.innerHTML = `
    <div class="fbw-sb-head"><span data-role="title"></span>
      <button type="button" class="fbw-sb-close" aria-label="닫기">✕</button></div>
    <div class="fbw-sb-list"></div>
    <div class="fbw-sb-foot">
      <button type="button" class="fbw-btn" data-role="copy">복사</button>
      <button type="button" class="fbw-btn fbw-btn-primary" data-role="download">JSON 내려받기</button>
    </div>
  `;
  const list = panel.querySelector<HTMLElement>(".fbw-sb-list")!;
  const title = panel.querySelector<HTMLElement>("[data-role=title]")!;

  const open = () => panel.classList.add("fbw-open");
  const close = () => panel.classList.remove("fbw-open");
  tab.addEventListener("click", () =>
    panel.classList.contains("fbw-open") ? close() : open(),
  );
  panel.querySelector(".fbw-sb-close")!.addEventListener("click", close);
  panel.querySelector("[data-role=download]")!.addEventListener("click", () =>
    download(store.project, store.exportList()),
  );
  const copyBtn = panel.querySelector<HTMLButtonElement>("[data-role=copy]")!;
  copyBtn.addEventListener("click", async () => {
    copyBtn.textContent = (await copyToClipboard(store.project, store.exportList()))
      ? "복사됨!"
      : "복사 실패";
    setTimeout(() => (copyBtn.textContent = "복사"), 1500);
  });

  const render = () => {
    const items = store.list();
    tab.textContent = `피드백 ${items.length}`;
    tab.style.display = store.enabled ? "block" : "none";
    if (!store.enabled) close();
    title.textContent = `피드백 목록 (${items.length})`;
    list.textContent = "";
    if (items.length === 0) {
      list.innerHTML = `<div class="fbw-sb-empty">아직 피드백이 없습니다.<br/>페이지 요소에 우클릭(모바일: 길게 누르기)해 보세요.</div>`;
      return;
    }
    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "fbw-card";
      card.dataset.id = item.id;
      card.innerHTML = `
        <div class="fbw-card-top">
          <span class="fbw-card-num">${index + 1}</span>
          <span>${item.type} · ${item.priority}</span>
          <span class="fbw-card-status" style="color:${STATUS_COLOR[item.status]}">${item.status}</span>
          <button type="button" class="fbw-card-edit" title="수정" aria-label="피드백 수정">✎</button>
          <button type="button" class="fbw-card-del" title="삭제" aria-label="피드백 삭제">🗑</button>
        </div>
        <div class="fbw-card-body"></div>
        <div class="fbw-card-page">${item.anchor.page} · ${item.author}</div>
      `;
      card.querySelector<HTMLElement>(".fbw-card-body")!.textContent = item.content;
      /* 카드 클릭 = 위치로 점프 후 대상 옆에 팝오버(새 작성분: 수정 / 시드: 열람) —
         다른 페이지 항목은 이동만 하고, 도착한 페이지에서 다시 누르면 폼이 열린다 */
      card.addEventListener("click", () => {
        if (!jump(item.anchor)) {
          requestJump(item.anchor);
          return;
        }
        setTimeout(() => openItemForm(root, store, item), 450); // 스크롤 안착 후
      });
      card.querySelector(".fbw-card-edit")?.addEventListener("click", (e) => {
        e.stopPropagation();
        openItemForm(root, store, item);
      });
      card.querySelector(".fbw-card-del")?.addEventListener("click", async (e) => {
        e.stopPropagation();
        const ok = await confirmModal(root, {
          title: "이 피드백을 삭제할까요?",
          detail: item.content,
          confirmLabel: "삭제",
        });
        if (ok) store.remove(item.id);
      });
      list.appendChild(card);
    });
  };

  const focus = (id: string) => {
    open();
    const card = list.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (!card) return;
    card.scrollIntoView?.({ block: "center" });
    card.classList.add("fbw-card-focus");
    setTimeout(() => card.classList.remove("fbw-card-focus"), 1600);
  };

  store.subscribe(render);
  render();
  root.append(tab, panel);
  return { open, focus };
}
