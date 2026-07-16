/* 스레드 팝오버 — 코멘트 대화 + 답글 입력 + 완료/삭제. 대상 요소 옆에 뜬다 */
import { useState } from "react";
import {
  Badge,
  CheckIcon,
  ClosePanelIcon,
  CommentInput,
  CommentItem,
  CommentThread as ThreadStack,
  IconButton,
  TextButton,
  TextField,
  TrashIcon,
  useConfirm,
} from "@ingradient/ui";
import { resolve } from "../anchor";
import { threadBody, type Comment, type CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";
import { L } from "./labels";

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
  const el = thread.anchor.page === location.pathname ? resolve(thread.anchor) : null;

  const reply = () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    const name = author.trim() || L.defaultAuthor;
    store.author = name;
    store.addComment(thread.id, name, trimmed);
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
        {thread.comments.map((c) => (
          <CommentItem
            key={c.id}
            author={c.author}
            timestamp={fmtDate(c.createdAt)}
            body={c.body}
            actions={
              store.canRemoveComment(thread.id, c.id) ? (
                <IconButton
                  variant="ghost"
                  size="sm"
                  tone="danger"
                  aria-label={L.deleteReplyAria}
                  onClick={() => removeComment(c)}
                >
                  <TrashIcon size={14} />
                </IconButton>
              ) : undefined
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
      <TextButton
        tone={thread.resolved ? "muted" : "accent"}
        iconLeading={<CheckIcon size={14} />}
        onClick={() => store.setResolved(thread.id, !thread.resolved)}
      >
        {thread.resolved ? L.unarchive : L.archive}
      </TextButton>
    </Popover>
  );
}
