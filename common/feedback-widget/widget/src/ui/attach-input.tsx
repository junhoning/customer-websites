/* 첨부 파일 입력 — 클립 버튼(CommentInput의 accessory 슬롯용) + 대기 목록 칩 */
import { useRef } from "react";
import styled from "styled-components";
import { IconButton, PaperclipIcon, TextButton } from "@ingradient/ui";
import { fileToAttachment } from "../attach";
import type { Attachment } from "../types";
import { L } from "./labels";

const ChipRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--ig-space-2);
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
  max-width: 180px;
  padding: 1px var(--ig-space-3);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);

  em {
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

interface AttachProps {
  pending: Attachment[];
  onChange: (next: Attachment[]) => void;
}

/* 전송 버튼 왼쪽에 놓는 클립 버튼 — <CommentInput accessory={...}> 로 사용 */
export function AttachButton({ pending, onChange }: AttachProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const pick = async (files: FileList | null) => {
    if (!files) return;
    const added = (await Promise.all([...files].map(fileToAttachment))).filter(
      (a): a is Attachment => !!a,
    );
    if (added.length > 0) onChange([...pending, ...added]);
    if (fileRef.current) fileRef.current.value = ""; // 같은 파일 재선택 허용
  };

  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        aria-label={L.attachAria}
        onChange={(e) => pick(e.target.files)}
      />
      <IconButton
        variant="ghost"
        size="sm"
        aria-label={L.attachAria}
        title={L.attachHint}
        onClick={() => fileRef.current?.click()}
      >
        <PaperclipIcon size={14} />
      </IconButton>
    </>
  );
}

/* 보내기 전 첨부 대기 목록 — 입력창 위에 파일명 칩으로 표시 */
export function AttachChips({ pending, onChange }: AttachProps) {
  if (pending.length === 0) return null;
  return (
    <ChipRow>
      {pending.map((a, i) => (
        <Chip key={`${a.name}-${i}`}>
          <em>{a.name}</em>
          <TextButton
            tone="muted"
            size="sm"
            aria-label={L.removeAttachment}
            onClick={() => onChange(pending.filter((_, j) => j !== i))}
          >
            ✕
          </TextButton>
        </Chip>
      ))}
    </ChipRow>
  );
}
