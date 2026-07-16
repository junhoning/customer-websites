/* 스레드 팝오버 — 코멘트 대화 + 답글 입력 + 완료/삭제 + 전후 비교. 대상 요소 옆에 뜬다 */
import { useState } from "react";
import styled from "styled-components";
import {
  Badge,
  CheckIcon,
  ClosePanelIcon,
  CommentInput,
  CommentItem,
  CommentThread as ThreadStack,
  ExpandIcon,
  IconButton,
  TextButton,
  TextField,
  TrashIcon,
  useConfirm,
} from "@ingradient/ui";
import { CONFIG } from "../config";
import { resolve } from "../anchor";
import { threadBody, type Comment, type CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";
import { CompareOverlay } from "./compare";
import { VersionChip } from "./version-chip";
import { L } from "./labels";

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentActions = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`;

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export function ThreadView({
  store,
  thread,
  number,
  onClose,
}: {
  store: Store;
  thread: CommentThread;
  number: number; // 목록 순번 (핀·사이드바와 동일)
  onClose: () => void;
}) {
  const confirm = useConfirm();
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState(store.author);
  /* 비교 기준(Before) — 기본은 최초 코멘트 시점, 칩 클릭으로 변경 */
  const [baseline, setBaseline] = useState(thread.comments[0]?.version);
  const [comparing, setComparing] = useState(false);
  const el = thread.anchor.page === location.pathname ? resolve(thread.anchor) : null;

  const reply = () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    const name = author.trim() || L.defaultAuthor;
    store.author = name;
    store.addComment(thread.id, name, trimmed, CONFIG.version);
    setBody("");
  };

  const removeThread = async () => {
    const ok = await confirm({
      title: L.deleteThreadTitle,
      description: threadBody(thread),
      confirmLabel: L.delete,
      cancelLabel: L.cancel,
      danger: true,
    });
    if (!ok) return;
    store.removeThread(thread.id);
    onClose();
  };

  const removeComment = async (c: Comment) => {
    const ok = await confirm({
      title: L.deleteReplyTitle,
      description: c.body,
      confirmLabel: L.delete,
      cancelLabel: L.cancel,
      danger: true,
    });
    if (ok) store.removeComment(thread.id, c.id);
  };

  return (
    <Popover targetEl={el}>
      <HeaderRow className="fbw-thread">
        <HeaderTitle>
          {L.thread} {number}
        </HeaderTitle>
        {thread.resolved && <Badge $tone="success">{L.archivedBadge}</Badge>}
        <IconButton
          variant="ghost"
          size="sm"
          tone="danger"
          aria-label={L.deleteThreadAria}
          onClick={removeThread}
        >
          <TrashIcon size={16} />
        </IconButton>
        <IconButton variant="ghost" size="sm" aria-label={L.close} onClick={onClose}>
          <ClosePanelIcon size={16} />
        </IconButton>
      </HeaderRow>

      <ThreadStack>
        {thread.comments.map((c, i) => (
          <CommentItem
            key={c.id}
            author={c.author}
            timestamp={fmtDate(c.createdAt)}
            body={c.body}
            actions={
              <CommentActions>
                {c.version && (
                  <VersionChip
                    version={c.version}
                    changed={i > 0 && c.version !== thread.comments[i - 1].version}
                    active={c.version === baseline}
                    onSelect={setBaseline}
                  />
                )}
                {store.canRemoveComment(thread.id, c.id) && (
                  <IconButton
                    variant="ghost"
                    size="sm"
                    tone="danger"
                    aria-label={L.deleteReplyAria}
                    onClick={() => removeComment(c)}
                  >
                    <TrashIcon size={14} />
                  </IconButton>
                )}
              </CommentActions>
            }
          />
        ))}
      </ThreadStack>

      {!store.author && (
        <TextField
          size="sm"
          placeholder={L.namePlaceholder}
          aria-label={L.nameAria}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      )}
      <CommentInput
        value={body}
        onChange={setBody}
        onSubmit={reply}
        placeholder={L.replyPlaceholder}
        submitLabel={L.reply}
      />
      <ActionsRow>
        <TextButton
          tone={thread.resolved ? "muted" : "accent"}
          iconLeading={<CheckIcon size={14} />}
          onClick={() => store.setResolved(thread.id, !thread.resolved)}
        >
          {thread.resolved ? L.unarchive : L.archive}
        </TextButton>
        <TextButton
          tone="accent"
          iconLeading={<ExpandIcon size={14} />}
          disabled={!baseline}
          title={baseline ? undefined : L.compareDisabledHint}
          onClick={() => setComparing(true)}
        >
          {L.compare}
        </TextButton>
      </ActionsRow>

      {comparing && baseline && (
        <CompareOverlay
          beforeVersion={baseline}
          anchor={thread.anchor}
          onClose={() => setComparing(false)}
        />
      )}
    </Popover>
  );
}
