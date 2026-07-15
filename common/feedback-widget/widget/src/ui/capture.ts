/* hover 아웃라인 + 우클릭/롱프레스 요소 선택 — 문서 이벤트는 이 모듈에서만 건다 */
import { T } from "../tokens";
import type { Store } from "../store";

export const css = `
.fbw-hoverbox {
  position: fixed; display: none; pointer-events: none;
  border: 2px dashed ${T.color.accent};
  background: rgba(37, 99, 235, 0.07); border-radius: 4px;
}
`;

const LONG_PRESS_MS = 500;

type PickHandler = (el: Element, x: number, y: number) => void;

export function initCapture(
  root: HTMLElement,
  host: HTMLElement,
  store: Store,
  onPick: PickHandler,
) {
  const box = document.createElement("div");
  box.className = "fbw-hoverbox";
  root.appendChild(box);

  const isPage = (t: EventTarget | null): t is Element =>
    t instanceof Element &&
    t !== host &&
    t !== document.documentElement &&
    t !== document.body;

  const showBoxAt = (el: Element) => {
    const r = el.getBoundingClientRect();
    box.style.display = "block";
    box.style.left = `${r.left - 2}px`;
    box.style.top = `${r.top - 2}px`;
    box.style.width = `${r.width}px`;
    box.style.height = `${r.height}px`;
  };
  const hideBox = () => (box.style.display = "none");
  const hoverBlocked = () => !store.enabled || !!root.querySelector(".fbw-form");

  let lastX = -1;
  let lastY = -1;

  document.addEventListener("mousemove", (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
    // 작성 폼이 열려 있는 동안은 hover 안내를 멈춘다 (선택 박스와 혼동 방지)
    if (hoverBlocked() || !isPage(e.target)) {
      hideBox();
      return;
    }
    showBoxAt(e.target);
  });

  /* 스크롤하면 커서 아래 요소가 바뀐다 — 마지막 커서 좌표로 대상을 다시 계산
     (우클릭 시 실제로 선택될 요소와 hover 표시를 항상 일치시킨다) */
  let scrollRaf = 0;
  document.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(() => {
        if (hoverBlocked() || lastX < 0) {
          hideBox();
          return;
        }
        const el = document.elementFromPoint(lastX, lastY);
        if (isPage(el)) showBoxAt(el);
        else hideBox();
      });
    },
    { passive: true, capture: true },
  );

  document.addEventListener(
    "contextmenu",
    (e) => {
      if (!store.enabled || !isPage(e.target)) return;
      e.preventDefault();
      box.style.display = "none";
      onPick(e.target, e.clientX, e.clientY);
    },
    true,
  );

  /* 모바일: 500ms 롱프레스. 움직이면 취소(스크롤과 구분) */
  let timer: ReturnType<typeof setTimeout> | undefined;
  const cancel = () => clearTimeout(timer);

  document.addEventListener(
    "touchstart",
    (e) => {
      if (!store.enabled || e.touches.length !== 1) return;
      const { clientX, clientY } = e.touches[0];
      timer = setTimeout(() => {
        const el = document.elementFromPoint(clientX, clientY);
        if (isPage(el)) onPick(el, clientX, clientY);
      }, LONG_PRESS_MS);
    },
    { passive: true },
  );
  document.addEventListener("touchmove", cancel, { passive: true });
  document.addEventListener("touchend", cancel);
  document.addEventListener("touchcancel", cancel);

  store.subscribe(() => {
    if (!store.enabled) box.style.display = "none";
  });
}
