/* 코멘트의 버전 칩 — 직전 코멘트와 버전이 다르면 강조("이 시점에 사이트가 바뀜"),
   클릭하면 그 버전을 비교 기준(Before)으로 지정한다 */
import styled from "styled-components";
import { L } from "./labels";

const Chip = styled.button<{ $changed: boolean; $active: boolean }>`
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  font-family: var(--ig-font-mono, monospace);
  font-size: var(--ig-font-size-3xs, 10px);
  line-height: 16px;
  cursor: pointer;
  border: var(--ig-border-1px) solid
    ${(p) => (p.$changed ? "var(--ig-color-accent)" : "var(--ig-color-border-subtle)")};
  color: ${(p) => (p.$changed ? "var(--ig-color-accent)" : "var(--ig-color-text-soft)")};
  background: ${(p) => (p.$active ? "var(--ig-color-accent-soft, transparent)" : "transparent")};
  ${(p) => p.$active && "font-weight: var(--ig-font-weight-bold);"}
`;

export function VersionChip({
  version,
  changed,
  active,
  onSelect,
}: {
  version: string;
  changed: boolean; // 직전 코멘트와 버전이 다름
  active: boolean; // 현재 비교 기준(Before)으로 선택됨
  onSelect: (version: string) => void;
}) {
  return (
    <Chip
      type="button"
      className="fbw-verchip"
      title={L.versionChipTitle}
      $changed={changed}
      $active={active}
      onClick={() => onSelect(version)}
    >
      {version}
    </Chip>
  );
}
