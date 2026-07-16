/* 새 스레드 작성 — 우클릭/롱프레스로 요소를 고른 직후 뜨는 팝오버 */
import { useState } from "react";
import styled from "styled-components";
import { CommentInput, ClosePanelIcon, IconButton, TextField } from "@ingradient/ui";
import { uid, type Anchor, type CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";

const TargetLine = styled.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export function Composer({
  store,
  el,
  anchor,
  point,
  onClose,
  onSaved,
}: {
  store: Store;
  el: Element;
  anchor: Anchor;
  point: { x: number; y: number };
  onClose: () => void;
  onSaved: (thread: CommentThread) => void;
}) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState(store.author);

  const save = () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    const name = author.trim() || "고객";
    store.author = name;
    const now = new Date().toISOString();
    const thread: CommentThread = {
      id: uid(),
      createdAt: now,
      anchor,
      resolved: false,
      comments: [{ id: uid(), author: name, body: trimmed, createdAt: now }],
      meta: {
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
      },
    };
    store.addThread(thread);
    onSaved(thread);
  };

  return (
    <Popover targetEl={el} point={point}>
      <HeaderRow className="fbw-composer">
        <HeaderTitle>코멘트 작성</HeaderTitle>
        <IconButton variant="ghost" size="sm" aria-label="닫기" onClick={onClose}>
          <ClosePanelIcon size={16} />
        </IconButton>
      </HeaderRow>
      <TargetLine>대상: {anchor.textSnippet || anchor.selector}</TargetLine>
      <TextField
        size="sm"
        placeholder="이름 (기억됩니다)"
        aria-label="작성자 이름"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <CommentInput
        value={body}
        onChange={setBody}
        onSubmit={save}
        placeholder="이 위치에 대해 하고 싶은 말을 남겨 주세요"
        submitLabel="남기기"
      />
    </Popover>
  );
}
