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

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ko-KR", { month: "numeric", day: "numeric" });

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
    const name = author.trim() || "고객";
    store.author = name;
    store.addComment(thread.id, name, trimmed);
    setBody("");
  };

  const removeThread = async () => {
    const ok = await confirm({
      title: "이 코멘트 스레드를 삭제할까요?",
      description: threadBody(thread),
      confirmLabel: "삭제",
      cancelLabel: "취소",
      danger: true,
    });
    if (!ok) return;
    store.removeThread(thread.id);
    onClose();
  };

  const removeComment = async (c: Comment) => {
    const ok = await confirm({
      title: "이 답글을 삭제할까요?",
      description: c.body,
      confirmLabel: "삭제",
      cancelLabel: "취소",
      danger: true,
    });
    if (ok) store.removeComment(thread.id, c.id);
  };

  return (
    <Popover targetEl={el}>
      <HeaderRow className="fbw-thread">
        <HeaderTitle>코멘트 {number}</HeaderTitle>
        {thread.resolved && <Badge $tone="success">완료됨</Badge>}
        <IconButton
          variant="ghost"
          size="sm"
          tone="danger"
          aria-label="스레드 삭제"
          onClick={removeThread}
        >
          <TrashIcon size={16} />
        </IconButton>
        <IconButton variant="ghost" size="sm" aria-label="닫기" onClick={onClose}>
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
                  aria-label="답글 삭제"
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
          placeholder="이름 (기억됩니다)"
          aria-label="작성자 이름"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      )}
      <CommentInput
        value={body}
        onChange={setBody}
        onSubmit={reply}
        placeholder="답글을 남겨 주세요"
        submitLabel="답글"
      />
      <TextButton
        tone={thread.resolved ? "muted" : "accent"}
        iconLeading={<CheckIcon size={14} />}
        onClick={() => store.setResolved(thread.id, !thread.resolved)}
      >
        {thread.resolved ? "완료 취소" : "완료 처리"}
      </TextButton>
    </Popover>
  );
}
