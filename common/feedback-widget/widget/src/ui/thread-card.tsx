/* 사이드바의 스레드 카드 — 번호·본문 요약·답글 수·삭제 */
import styled from "styled-components";
import { Badge, Card, IconButton, TrashIcon, useConfirm } from "@ingradient/ui";
import { threadAuthor, threadBody, type CommentThread } from "../types";
import type { Store } from "../store";
import { L } from "./labels";

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;

const Num = styled.span`
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: var(--ig-radius-pill);
  background: #f59e0b;
  color: #1f2937;
  font-weight: var(--ig-font-weight-bold);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.span`
  margin-left: auto;
`;

const Body = styled.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaLine = styled.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;

export function ThreadCard({
  store,
  thread,
  number,
  onSelect,
}: {
  store: Store;
  thread: CommentThread;
  number: number;
  onSelect: (thread: CommentThread) => void;
}) {
  const confirm = useConfirm();

  const remove = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const ok = await confirm({
      title: L.deleteThreadTitle,
      description: threadBody(thread),
      confirmLabel: L.delete,
      cancelLabel: L.cancel,
      danger: true,
    });
    if (ok) store.removeThread(thread.id);
  };

  const replies = thread.comments.length - 1;

  return (
    <Card
      className="fbw-card"
      padding="var(--ig-space-4)"
      style={{ cursor: "pointer" }}
      onClick={() => onSelect(thread)}
    >
      <TopRow>
        <Num>{number}</Num>
        <span>{threadAuthor(thread)}</span>
        {thread.resolved && <Badge $tone="success">{L.archivedBadge}</Badge>}
        <Spacer />
        <IconButton
          variant="ghost"
          size="sm"
          tone="danger"
          aria-label={L.deleteThreadAria}
          onClick={remove}
        >
          <TrashIcon size={14} />
        </IconButton>
      </TopRow>
      <Body>{threadBody(thread)}</Body>
      <MetaLine>
        {thread.anchor.page}
        {replies > 0 && ` · ${replies} ${L.replies}`}
      </MetaLine>
    </Card>
  );
}
