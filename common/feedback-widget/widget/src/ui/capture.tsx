/* hover 아웃라인 + 우클릭/롱프레스 요소 선택 — 문서 이벤트는 이 컴포넌트에서만 건다 */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HOST_ID } from "../anchor";
import { useRect } from "./hooks";

const LONG_PRESS_MS = 500;

const HoverBox = styled.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`;

const isPage = (t: EventTarget | null): t is Element =>
  t instanceof Element &&
  t.id !== HOST_ID &&
  t !== document.documentElement &&
  t !== document.body;

export function Capture({
  active,
  onPick,
}: {
  active: boolean; // 모드 ON + 열린 팝오버 없음
  onPick: (el: Element, x: number, y: number) => void;
}) {
  const [hoverEl, setHoverEl] = useState<Element | null>(null);
  const rect = useRect(hoverEl);
  const last = useRef({ x: -1, y: -1 });
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    if (!active) setHoverEl(null);
  }, [active]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      last.current = { x: e.clientX, y: e.clientY };
      if (!activeRef.current || !isPage(e.target)) {
        setHoverEl(null);
        return;
      }
      setHoverEl(e.target);
    };

    /* 스크롤하면 커서 아래 요소가 바뀐다 — 마지막 커서 좌표로 대상을 다시 계산 */
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!activeRef.current || last.current.x < 0) {
          setHoverEl(null);
          return;
        }
        const el = document.elementFromPoint(last.current.x, last.current.y);
        setHoverEl(isPage(el) ? el : null);
      });
    };

    const onContextMenu = (e: MouseEvent) => {
      if (!activeRef.current || !isPage(e.target)) return;
      e.preventDefault();
      setHoverEl(null);
      onPick(e.target, e.clientX, e.clientY);
    };

    /* 모바일: 500ms 롱프레스. 움직이면 취소(스크롤과 구분) */
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cancel = () => clearTimeout(timer);
    const onTouchStart = (e: TouchEvent) => {
      if (!activeRef.current || e.touches.length !== 1) return;
      const { clientX, clientY } = e.touches[0];
      timer = setTimeout(() => {
        const el = document.elementFromPoint(clientX, clientY);
        if (isPage(el)) onPick(el, clientX, clientY);
      }, LONG_PRESS_MS);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.addEventListener("contextmenu", onContextMenu, true);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", cancel, { passive: true });
    document.addEventListener("touchend", cancel);
    document.addEventListener("touchcancel", cancel);
    return () => {
      cancelAnimationFrame(raf);
      cancel();
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      document.removeEventListener("contextmenu", onContextMenu, true);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", cancel);
      document.removeEventListener("touchend", cancel);
      document.removeEventListener("touchcancel", cancel);
    };
  }, [onPick]);

  if (!rect) return null;
  return (
    <HoverBox
      className="fbw-hoverbox"
      style={{ left: rect.left - 2, top: rect.top - 2, width: rect.width, height: rect.height }}
    />
  );
}
