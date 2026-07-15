/* 번호 핀 오버레이 — 현재 페이지 항목의 앵커 위치에 표시, 스크롤 따라 이동.
   hover: 대상 영역 하이라이트 / click: 사이드바의 해당 피드백으로 이동 */
import { T } from "../tokens";
import { resolve } from "../anchor";
import type { Store } from "../store";

export const css = `
.fbw-pin {
  position: fixed; min-width: 24px; height: 24px; padding: 0 6px;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; justify-content: center;
  border: none; border-radius: ${T.radius.pill}; cursor: pointer; pointer-events: auto;
  background: ${T.color.pin}; color: ${T.color.text};
  font-size: 12px; font-weight: 700; box-shadow: ${T.shadow};
}
.fbw-pin:hover { background: ${T.color.accent}; color: ${T.color.onDark}; }
.fbw-pin-hoverbox {
  position: fixed; display: none; pointer-events: none;
  border: 2px solid ${T.color.pin};
  background: rgba(245, 158, 11, 0.12); border-radius: 4px;
}
.fbw-pin-hoverbox::after {
  content: attr(data-label); position: absolute; top: -22px; left: -2px;
  padding: 2px 8px; border-radius: 4px;
  background: ${T.color.pin}; color: ${T.color.text};
  font-size: 11px; font-weight: 700; white-space: nowrap;
}
`;

export function initPins(root: HTMLElement, store: Store, onPinClick: (id: string) => void) {
  const layer = document.createElement("div");
  root.appendChild(layer);
  const hoverBox = document.createElement("div");
  hoverBox.className = "fbw-pin-hoverbox";
  root.appendChild(hoverBox);
  let rafPending = false;

  const showHover = (el: Element, label: string) => {
    const r = el.getBoundingClientRect();
    hoverBox.setAttribute("data-label", label);
    hoverBox.style.display = "block";
    hoverBox.style.left = `${r.left - 2}px`;
    hoverBox.style.top = `${r.top - 2}px`;
    hoverBox.style.width = `${r.width}px`;
    hoverBox.style.height = `${r.height}px`;
  };
  const hideHover = () => (hoverBox.style.display = "none");

  const render = () => {
    layer.textContent = "";
    hideHover(); // 스크롤/갱신 중에는 이전 하이라이트를 정리
    if (!store.enabled) return;
    const occupied = new Map<string, number>(); // 같은 자리 핀 수 — 겹치면 왼쪽으로 전개
    store.list().forEach((item, index) => {
      if (item.anchor.page !== location.pathname) return;
      const el = resolve(item.anchor);
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return; // 화면 밖
      const baseLeft = Math.max(16, r.right - 4);
      const top = Math.max(16, r.top + 4);
      const key = `${Math.round(baseLeft / 8)}:${Math.round(top / 8)}`;
      const stacked = occupied.get(key) ?? 0;
      occupied.set(key, stacked + 1);
      const pin = document.createElement("button");
      pin.type = "button";
      pin.className = "fbw-pin";
      pin.textContent = String(index + 1);
      pin.title = item.content;
      // 겹치면 왼쪽으로 나란히 전개, 왼쪽 공간이 없으면 오른쪽으로
      const spreadLeft = baseLeft - stacked * 28;
      pin.style.left = `${spreadLeft >= 16 ? spreadLeft : baseLeft + stacked * 28}px`;
      pin.style.top = `${top}px`;
      pin.addEventListener("mouseenter", () => showHover(el, `피드백 ${index + 1}`));
      pin.addEventListener("mouseleave", hideHover);
      pin.addEventListener("click", () => onPinClick(item.id));
      layer.appendChild(pin);
    });
  };

  const schedule = () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      render();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  store.subscribe(schedule);
  render();
}
