/* 스레드 팝오버의 코멘트 한 줄 — 우측 상단 Edit/Archive, 인라인 수정 편집기.
   보관(Archive)은 삭제 대체 — 되돌리기 가능해서 확인 모달이 없다 */
import { useState } from "react";
import styled from "styled-components";
import {
  ArchiveIcon,
  CommentInput,
  CommentItem,
  IconButton,
  PencilIcon,
  TextButton,
} from "@ingradient/ui";
import type { Comment, CommentThread } from "../types";
import type { Store } from "../store";
import { VersionChip } from "./version-chip";
import { AttachmentList } from "./attachment-list";
import { L } from "./labels";

const Actions = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
`;

/* 코멘트에 딸린 "그때 모습" 썸네일 — 클릭하면 지금과 전후 비교 (Vercel 첨부물 패턴) */
const ShotThumb = styled.button`
  position: relative;
  display: block;
  width: 100%;
  margin-top: var(--ig-space-2);
  padding: 0;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  overflow: hidden;
  cursor: pointer;
  background: none;

  img {
    display: block;
    width: 100%;
    max-height: 140px;
    object-fit: cover;
    object-position: top;
  }
  &:hover {
    border-color: var(--ig-color-accent);
  }
`;

const ThumbBadge = styled.span`
  position: absolute;
  right: var(--ig-space-2);
  bottom: var(--ig-space-2);
  padding: 1px var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-accent-strong);
  color: var(--ig-color-on-accent);
  font-size: var(--ig-font-size-3xs, 10px);
  font-weight: var(--ig-font-weight-bold);
`;

const EditorFoot = styled.div`
  display: flex;
  justify-content: flex-start;
`;

/* 보관된 코멘트 — 지우지 않고 흐리게 접어둔다 */
const Dim = styled.div<{ $archived: boolean }>`
  opacity: ${(p) => (p.$archived ? 0.55 : 1)};
`;

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export function CommentRow({
  store,
  thread,
  comment,
  prevVersion,
  onCompare,
}: {
  store: Store;
  thread: CommentThread;
  comment: Comment;
  prevVersion?: string; // 직전 코멘트의 버전 (칩 강조 판단)
  onCompare: (shot: string) => void; // 썸네일 클릭 → 그 시점 vs 지금
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(comment.body);

  const save = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    store.updateComment(thread.id, comment.id, trimmed);
    setEditing(false);
  };

  const toggleArchive = () =>
    store.setCommentArchived(thread.id, comment.id, !comment.archived);

  if (editing) {
    return (
      <div>
        <CommentInput value={draft} onChange={setDraft} onSubmit={save} submitLabel={L.save} />
        <EditorFoot>
          <TextButton
            tone="muted"
            onClick={() => {
              setEditing(false);
              setDraft(comment.body);
            }}
          >
            {L.cancel}
          </TextButton>
        </EditorFoot>
      </div>
    );
  }

  return (
    <Dim $archived={!!comment.archived}>
    <CommentItem
      author={comment.author}
      timestamp={fmtDate(comment.createdAt)}
      body={
        <>
          {comment.body}
          {comment.attachments && comment.attachments.length > 0 && (
            <AttachmentList attachments={comment.attachments} />
          )}
          {comment.shot && (
            <ShotThumb
              type="button"
              className="fbw-shot-thumb"
              title={L.compareThumbHint}
              onClick={() => onCompare(comment.shot!)}
            >
              <img src={comment.shot} alt={L.before} />
              <ThumbBadge>{L.compare}</ThumbBadge>
            </ShotThumb>
          )}
        </>
      }
      actions={
        <Actions>
          {comment.version && (
            <VersionChip
              version={comment.version}
              changed={prevVersion !== undefined && comment.version !== prevVersion}
            />
          )}
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={L.editCommentAria}
            onClick={() => setEditing(true)}
          >
            <PencilIcon size={14} />
          </IconButton>
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={comment.archived ? L.unarchiveCommentAria : L.archiveCommentAria}
            title={comment.archived ? L.unarchiveCommentAria : L.archiveCommentAria}
            onClick={toggleArchive}
          >
            <ArchiveIcon size={14} />
          </IconButton>
        </Actions>
      }
    />
    </Dim>
  );
}
