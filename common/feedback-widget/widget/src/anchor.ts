/* 위치 캡처/복원/하이라이트 — 순수 DOM 로직. 이벤트를 직접 걸지 않는다 */
import type { Anchor } from "./types";
import { T } from "./tokens";

export const HOST_ID = "fbw-host";
const PENDING_KEY = "fbw:pending-jump";
/* jsdom 등 CSS.escape 미구현 환경 폴백 */
const cssEscape = (s: string) =>
  typeof globalThis.CSS?.escape === "function" ? CSS.escape(s) : s.replace(/[^\w-]/g, "\\$&");

/* id 우선, 없으면 body까지 :nth-of-type 경로. id를 만나면 거기서 절단 */
export function buildSelector(el: Element): string {
  const parts: string[] = [];
  let cur: Element | null = el;
  while (cur && cur !== document.body && cur !== document.documentElement) {
    if (cur.id) {
      parts.unshift(`#${cssEscape(cur.id)}`);
      return parts.join(" > ");
    }
    const parent: Element | null = cur.parentElement;
    if (!parent) break;
    const tag = cur.tagName.toLowerCase();
    const same = Array.from(parent.children).filter((c) => c.tagName === cur!.tagName);
    parts.unshift(same.length > 1 ? `${tag}:nth-of-type(${same.indexOf(cur) + 1})` : tag);
    cur = parent;
  }
  parts.unshift("body");
  return parts.join(" > ");
}

export function capture(el: Element): Anchor {
  return {
    page: location.pathname,
    selector: buildSelector(el),
    textSnippet: (el.textContent ?? "").trim().slice(0, 40),
    scrollY: Math.round(window.scrollY),
  };
}

/* 복원 우선순위: 셀렉터 → 텍스트 스니펫 → null(호출부가 scrollY 폴백) */
export function resolve(anchor: Anchor): Element | null {
  try {
    const el = document.querySelector(anchor.selector);
    if (el) return el;
  } catch {
    /* 잘못된 셀렉터 — 폴백 진행 */
  }
  const needle = anchor.textSnippet.slice(0, 20).trim();
  if (!needle) return null;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const el = node as Element;
    if (el.id === HOST_ID) continue;
    if (el.childElementCount === 0 && (el.textContent ?? "").trim().includes(needle)) {
      return el;
    }
  }
  return null;
}

/* 요소 하이라이트 — 인라인 outline을 잠시 빌렸다 원복한다 */
export function flash(el: Element, duration = 2500) {
  const style = (el as HTMLElement).style;
  if (!style) return;
  const prev = { outline: style.outline, offset: style.outlineOffset };
  style.outline = `3px solid ${T.color.accent}`;
  style.outlineOffset = "3px";
  setTimeout(() => {
    style.outline = prev.outline;
    style.outlineOffset = prev.offset;
  }, duration);
}

/* 같은 페이지 내 점프. 다른 페이지면 false — 호출부가 requestJump 사용 */
export function jump(anchor: Anchor): boolean {
  if (anchor.page !== location.pathname) return false;
  const el = resolve(anchor);
  if (el) {
    el.scrollIntoView?.({ behavior: "smooth", block: "center" });
    // 부드러운 스크롤이 자리 잡은 뒤 켜져야 하이라이트가 눈에 들어온다
    setTimeout(() => flash(el), 350);
  } else {
    window.scrollTo({ top: anchor.scrollY, behavior: "smooth" });
  }
  return true;
}

/* 페이지 간 점프: 예약을 남기고 이동 → 다음 로드에서 consumePendingJump가 소비 */
export function requestJump(anchor: Anchor) {
  sessionStorage.setItem(PENDING_KEY, JSON.stringify(anchor));
  location.assign(anchor.page);
}

export function consumePendingJump() {
  const raw = sessionStorage.getItem(PENDING_KEY);
  if (!raw) return;
  sessionStorage.removeItem(PENDING_KEY);
  try {
    const anchor = JSON.parse(raw) as Anchor;
    setTimeout(() => jump(anchor), 400); // 페이지 렌더링 여유
  } catch {
    /* 손상된 예약은 무시 */
  }
}
