/* 폼 열기 정책 — 신규 작성 / 기존 항목 수정·열람. 렌더링은 form-view가 담당 */
import { T } from "../tokens";
import { TYPES, uid, type FeedbackItem } from "../types";
import { capture, resolve } from "../anchor";
import { showSelectBox } from "./select-box";
import { renderForm } from "./form-view";
import { confirmModal } from "./modal";
import type { Store } from "../store";

export { css } from "./form-view";

/* 대상 요소 근처(아래, 안 되면 위)에 폼 배치 */
function positionNear(form: HTMLElement, el: Element) {
  const r = el.getBoundingClientRect();
  const f = form.getBoundingClientRect();
  const left = Math.min(Math.max(12, r.left), window.innerWidth - f.width - 12);
  const below = r.bottom + 8;
  const top =
    below + f.height > window.innerHeight ? Math.max(12, r.top - f.height - 8) : below;
  form.style.left = `${left}px`;
  form.style.top = `${top}px`;
}

/* 신규 작성 — 우클릭/롱프레스로 요소를 고른 직후 */
export function openForm(
  root: HTMLElement,
  store: Store,
  el: Element,
  x: number,
  y: number,
  onSaved: (item: FeedbackItem) => void,
) {
  const anchor = capture(el);
  showSelectBox(root, el);
  renderForm(root, {
    title: "피드백 작성",
    targetText: anchor.textSnippet || anchor.selector,
    initial: { content: "", type: TYPES[0], priority: "B", author: store.author },
    position: (form) => {
      const rect = form.getBoundingClientRect();
      form.style.left = `${Math.min(x, window.innerWidth - rect.width - 12)}px`;
      form.style.top = `${Math.min(y, window.innerHeight - rect.height - 12)}px`;
    },
    onSubmit: (v) => {
      if (v.author) store.author = v.author;
      const item: FeedbackItem = {
        id: uid(),
        createdAt: new Date().toISOString(),
        author: v.author || "고객",
        anchor,
        type: v.type,
        priority: v.priority,
        content: v.content,
        status: "대기",
        meta: {
          userAgent: navigator.userAgent,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
        },
      };
      store.add(item);
      onSaved(item);
    },
  });
}

/* 기존 항목 열기 — 시드 포함 전부 바로 수정 가능. 대상 요소 옆에 뜬다 */
export function openItemForm(root: HTMLElement, store: Store, item: FeedbackItem) {
  const el = item.anchor.page === location.pathname ? resolve(item.anchor) : null;
  if (el) showSelectBox(root, el);
  renderForm(root, {
    title: "피드백 수정",
    targetText: item.anchor.textSnippet || item.anchor.page,
    initial: {
      content: item.content,
      type: item.type,
      priority: item.priority,
      author: item.author,
    },
    cancelLabel: "닫기",
    position: (form) => {
      if (el) return positionNear(form, el);
      form.style.right = `calc(${T.sidebarW} + 16px)`;
      form.style.top = "90px";
    },
    onDelete: async () => {
      const ok = await confirmModal(root, {
        title: "이 피드백을 삭제할까요?",
        detail: item.content,
        confirmLabel: "삭제",
      });
      if (ok) store.remove(item.id);
      return ok;
    },
    onSubmit: (v) => {
      store.update(item.id, {
        content: v.content,
        type: v.type,
        priority: v.priority,
        author: v.author || item.author,
      });
    },
  });
}
