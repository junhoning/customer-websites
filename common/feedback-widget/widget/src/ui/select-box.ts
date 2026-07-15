/* 작성/수정 대상 하이라이트 박스 — 폼과 함께 생기고 사라지며 스크롤을 따라다닌다 */
import { T } from "../tokens";

export const css = `
.fbw-selectbox {
  position: fixed; pointer-events: none;
  border: 2px solid ${T.color.accent};
  background: rgba(37, 99, 235, 0.12); border-radius: 4px;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
}
.fbw-selectbox::after {
  content: "피드백 대상"; position: absolute; top: -22px; left: -2px;
  padding: 2px 8px; border-radius: 4px;
  background: ${T.color.accent}; color: ${T.color.onDark};
  font-size: 11px; font-weight: 700; white-space: nowrap;
}
`;

let clear: (() => void) | null = null;

export function clearSelectBox() {
  clear?.();
}

export function showSelectBox(root: HTMLElement, el: Element) {
  clear?.();
  const box = document.createElement("div");
  box.className = "fbw-selectbox";
  root.appendChild(box);
  let alive = true;
  let raf = 0;

  const update = () => {
    if (!alive) return;
    const r = el.getBoundingClientRect();
    box.style.left = `${r.left - 2}px`;
    box.style.top = `${r.top - 2}px`;
    box.style.width = `${r.width}px`;
    box.style.height = `${r.height}px`;
  };
  const schedule = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  };
  // capture: true — 중첩 스크롤 컨테이너의 스크롤까지 감지
  window.addEventListener("scroll", schedule, { passive: true, capture: true });
  window.addEventListener("resize", schedule, { passive: true });
  update();

  clear = () => {
    alive = false;
    cancelAnimationFrame(raf);
    window.removeEventListener("scroll", schedule, { capture: true } as EventListenerOptions);
    window.removeEventListener("resize", schedule);
    box.remove();
    clear = null;
  };
}
