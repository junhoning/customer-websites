/* 새 스레드 작성 — 우클릭/롱프레스로 요소를 고른 직후 뜨는 팝오버 */
import { useState } from "react";
import styled from "styled-components";
import { CommentInput, ClosePanelIcon, IconButton, TextField } from "@ingradient/ui";
import { CONFIG } from "../config";
import { captureShot } from "../shot";
import { uid, type Anchor, type Attachment, type CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";
import { AttachInput } from "./attach-input";
import { L } from "./labels";

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
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const save = async () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    const name = author.trim() || L.defaultAuthor;
    store.author = name;
    const now = new Date().toISOString();
    // 지금 이 순간의 대상 영역을 저장 — 이 코멘트에 "그때 모습"이 남는다
    const shot = await captureShot(el);
    const thread: CommentThread = {
      id: uid(),
      createdAt: now,
      anchor,
      resolved: false,
      comments: [
        {
          id: uid(),
          author: name,
          body: trimmed,
          createdAt: now,
          version: CONFIG.version,
          shot,
          attachments: attachments.length ? attachments : undefined,
        },
      ],
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
        <HeaderTitle>{L.composerTitle}</HeaderTitle>
        <IconButton variant="ghost" size="sm" aria-label={L.close} onClick={onClose}>
          <ClosePanelIcon size={16} />
        </IconButton>
      </HeaderRow>
      <TargetLine>
        {L.composerTarget}: {anchor.textSnippet || anchor.selector}
      </TargetLine>
      <TextField
        size="sm"
        placeholder={L.namePlaceholder}
        aria-label={L.nameAria}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <AttachInput pending={attachments} onChange={setAttachments} />
      <CommentInput
        value={body}
        onChange={setBody}
        onSubmit={save}
        placeholder={L.composerPlaceholder}
        submitLabel={L.post}
      />
    </Popover>
  );
}
