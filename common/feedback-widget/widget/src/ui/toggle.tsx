/* 플로팅 토글 버튼 — 코멘트 모드 ON/OFF. 좌하단(고객사 플로팅 버튼과 반대편) */
import styled from "styled-components";
import { NotificationBadge } from "@ingradient/ui";
import type { Store } from "../store";
import { L } from "./labels";

const Btn = styled.button<{ $on: boolean }>`
  position: fixed;
  left: 16px;
  bottom: 16px;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: var(--ig-radius-pill);
  background: ${(p) => (p.$on ? "var(--ig-color-accent-strong)" : "var(--ig-color-surface-raised)")};
  color: var(--ig-color-text-primary);
  font-size: 22px;
  cursor: pointer;
  box-shadow: var(--ig-shadow-raised);
  transition: background 0.15s;
`;

const Label = styled.span`
  position: fixed;
  left: 76px;
  bottom: 28px;
  padding: 4px 10px;
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-raised);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-2xs);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;

  ${Btn}:hover + & {
    opacity: 1;
  }
`;

const BadgeSlot = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;

export function Toggle({ store }: { store: Store }) {
  const count = store.list().length;
  return (
    <>
      <Btn
        className="fbw-toggle"
        type="button"
        $on={store.enabled}
        aria-label={store.enabled ? L.toggleOff : L.toggleOn}
        onClick={() => store.setEnabled(!store.enabled)}
      >
        💬
        {count > 0 && (
          <BadgeSlot>
            <NotificationBadge>{count}</NotificationBadge>
          </BadgeSlot>
        )}
      </Btn>
      <Label>{store.enabled ? L.toggleHintOn : L.toggleOn}</Label>
    </>
  );
}
