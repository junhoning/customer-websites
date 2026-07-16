/* 스레드 팝오버의 코멘트 한 줄 — 우측 상단 Edit/Delete, 인라인 수정 편집기.
   마지막 코멘트를 지우면 스레드 자체가 사라진다 (store 규칙) */
import { useState } from "react";
import styled from "styled-components";
import {
  CommentInput,
  CommentItem,
  IconButton,
  PencilIcon,
  TextButton,
  TrashIcon,
  useConfirm,
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
  const confirm = useConfirm();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(comment.body);

  const save = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    store.updateComment(thread.id, comment.id, trimmed);
    setEditing(false);
  };

  const remove = async () => {
    const isLast = thread.comments.length === 1;
    const ok = await confirm({
      title: L.deleteCommentTitle,
      description: isLast ? L.deleteLastCommentHint : comment.body,
      confirmLabel: L.delete,
      cancelLabel: L.cancel,
      danger: true,
    });
    if (ok) store.removeComment(thread.id, comment.id);
  };

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
            tone="danger"
            aria-label={L.deleteCommentAria}
            onClick={remove}
          >
            <TrashIcon size={14} />
          </IconButton>
        </Actions>
      }
    />
  );
}
