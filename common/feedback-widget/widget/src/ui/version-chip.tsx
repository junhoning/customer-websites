/* 코멘트의 버전 칩 (정보 표시용) — 직전 코멘트와 버전이 다르면 강조:
   "이 답글 시점에 사이트가 바뀌었다"는 신호 */
import styled from "styled-components";
import { L } from "./labels";

const Chip = styled.span<{ $changed: boolean }>`
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  font-family: var(--ig-font-mono, monospace);
  font-size: var(--ig-font-size-3xs, 10px);
  line-height: 16px;
  border: var(--ig-border-1px) solid
    ${(p) => (p.$changed ? "var(--ig-color-accent)" : "var(--ig-color-border-subtle)")};
  color: ${(p) => (p.$changed ? "var(--ig-color-accent)" : "var(--ig-color-text-soft)")};
`;

export function VersionChip({ version, changed }: { version: string; changed: boolean }) {
  return (
    <Chip className="fbw-verchip" title={L.versionChipTitle} $changed={changed}>
      {version}
    </Chip>
  );
}
