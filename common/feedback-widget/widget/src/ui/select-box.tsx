/* 코멘트 대상 하이라이트 박스 — 팝오버와 함께 생기고 사라지며 스크롤을 따라다닌다 */
import styled from "styled-components";
import { useRect } from "./hooks";

const Box = styled.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: "코멘트 대상";
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;

export function SelectBox({ el }: { el: Element | null }) {
  const rect = useRect(el);
  if (!rect) return null;
  return (
    <Box
      className="fbw-selectbox"
      style={{
        left: rect.left - 2,
        top: rect.top - 2,
        width: rect.width,
        height: rect.height,
      }}
    />
  );
}
