/* 번호 핀 오버레이 — 현재 페이지 미완료 스레드의 앵커 위치에 표시, 스크롤 따라 이동.
   hover: 대상 영역 하이라이트 / click: 스레드 팝오버 열기 */
import { useState } from "react";
import styled from "styled-components";
import { resolve } from "../anchor";
import { threadBody } from "../types";
import type { Store } from "../store";
import { useViewportTick } from "./hooks";
import { L } from "./labels";

const PIN_AMBER = "#f59e0b"; // 어떤 사이트 위에서도 눈에 띄는 고정 마커색

const Pin = styled.button`
  position: fixed;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--ig-radius-pill);
  cursor: pointer;
  pointer-events: auto;
  background: ${PIN_AMBER};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`;

const HoverBox = styled.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${PIN_AMBER};
  background: color-mix(in srgb, ${PIN_AMBER} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${PIN_AMBER};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;

interface Hover {
  rect: DOMRect;
  label: string;
}

export function Pins({ store, onPinClick }: { store: Store; onPinClick: (id: string) => void }) {
  useViewportTick(); // 스크롤/리사이즈마다 재배치
  const [hover, setHover] = useState<Hover | null>(null);

  const occupied = new Map<string, number>(); // 같은 자리 핀 수 — 겹치면 왼쪽으로 전개
  const pins: React.ReactNode[] = [];

  store.list().forEach((thread, index) => {
    if (thread.resolved) return; // 완료된 스레드는 핀을 걷는다
    if (thread.anchor.page !== location.pathname) return;
    const el = resolve(thread.anchor);
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return; // 화면 밖

    const baseLeft = Math.max(16, r.right - 4);
    const top = Math.max(16, r.top + 4);
    const key = `${Math.round(baseLeft / 8)}:${Math.round(top / 8)}`;
    const stacked = occupied.get(key) ?? 0;
    occupied.set(key, stacked + 1);
    // 겹치면 왼쪽으로 나란히 전개, 왼쪽 공간이 없으면 오른쪽으로
    const spreadLeft = baseLeft - stacked * 28;
    const left = spreadLeft >= 16 ? spreadLeft : baseLeft + stacked * 28;

    pins.push(
      <Pin
        key={thread.id}
        className="fbw-pin"
        type="button"
        title={threadBody(thread)}
        style={{ left, top }}
        onMouseEnter={() =>
          setHover({ rect: el.getBoundingClientRect(), label: `${L.thread} ${index + 1}` })
        }
        onMouseLeave={() => setHover(null)}
        onClick={() => onPinClick(thread.id)}
      >
        {index + 1}
      </Pin>,
    );
  });

  return (
    <>
      {pins}
      {hover && (
        <HoverBox
          className="fbw-pin-hoverbox"
          data-label={hover.label}
          style={{
            left: hover.rect.left - 2,
            top: hover.rect.top - 2,
            width: hover.rect.width,
            height: hover.rect.height,
          }}
        />
      )}
    </>
  );
}
