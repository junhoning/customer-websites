/* 팝오버 프레임 — 대상 요소 근처(아래, 안 되면 위) 또는 클릭 지점에 배치.
   내용이 바뀌어 크기가 변하면 재계산하고, 대상이 스크롤을 따라가면 함께 움직인다 */
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import styled from "styled-components";
import { useRect } from "./hooks";

export const POPOVER_W = 340;

const Frame = styled.div`
  position: fixed;
  width: ${POPOVER_W}px;
  max-width: calc(100vw - 24px);
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-overlay);
`;

interface Pos {
  left: number;
  top: number;
}

export function Popover({
  targetEl,
  point,
  children,
}: {
  targetEl?: Element | null; // 있으면 요소 근처에
  point?: { x: number; y: number }; // 없으면 클릭 지점에
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRect(targetEl ?? null);
  const [pos, setPos] = useState<Pos | null>(null);

  useLayoutEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    const f = frame.getBoundingClientRect();
    let next: Pos;
    if (rect) {
      const left = Math.min(Math.max(12, rect.left), window.innerWidth - f.width - 12);
      const below = rect.bottom + 8;
      const top =
        below + f.height > window.innerHeight ? Math.max(12, rect.top - f.height - 8) : below;
      next = { left, top };
    } else if (point) {
      next = {
        left: Math.max(12, Math.min(point.x, window.innerWidth - f.width - 12)),
        top: Math.max(12, Math.min(point.y, window.innerHeight - f.height - 12)),
      };
    } else {
      // 대상을 못 찾는 스레드(다른 페이지 등) — 사이드바 옆 고정
      next = { left: Math.max(12, window.innerWidth - f.width - 336), top: 90 };
    }
    setPos((p) => (p && p.left === next.left && p.top === next.top ? p : next));
  }); // 의존성 없음 — 내용 변화로 크기가 바뀌어도 다음 렌더에서 재계산

  return (
    <Frame ref={ref} style={pos ? { left: pos.left, top: pos.top } : { visibility: "hidden" }}>
      {children}
    </Frame>
  );
}

/* 팝오버 공용 헤더 행 */
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`;

export const HeaderTitle = styled.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;
