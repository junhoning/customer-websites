/* 공용 훅 — store 구독 재렌더, 요소 rect 추적 */
import { useEffect, useReducer, useState } from "react";
import type { Store } from "../store";

export function useStoreVersion(store: Store) {
  const [, bump] = useReducer((c: number) => c + 1, 0);
  useEffect(() => store.subscribe(bump), [store]);
}

/* 요소의 뷰포트 rect를 스크롤/리사이즈에 맞춰 추적 (rAF 병합).
   capture: true — 중첩 스크롤 컨테이너의 스크롤까지 감지 */
export function useRect(el: Element | null): DOMRect | null {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!el) {
      setRect(null);
      return;
    }
    let raf = 0;
    const update = () => setRect(el.getBoundingClientRect());
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true, capture: true });
    window.addEventListener("resize", schedule, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", schedule);
    };
  }, [el]);

  return rect;
}

/* 스크롤/리사이즈마다 재렌더 틱 (핀처럼 매 프레임 재배치가 필요한 레이어용) */
export function useViewportTick() {
  const [, bump] = useReducer((c: number) => c + 1, 0);
  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(bump);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
}
