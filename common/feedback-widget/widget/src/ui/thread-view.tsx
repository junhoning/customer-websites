/* 스레드 팝오버 — 코멘트 대화 + 답글 입력 + 완료 + 전후 비교. 대상 요소 옆에 뜬다.
   코멘트별 수정·삭제는 CommentRow가 담당 (마지막 코멘트 삭제 = 스레드 삭제) */
import { useState } from "react";
import styled from "styled-components";
import {
  Badge,
  CheckIcon,
  ClosePanelIcon,
  CommentInput,
  CommentThread as ThreadStack,
  ExpandIcon,
  IconButton,
  TextButton,
  TextField,
} from "@ingradient/ui";
import { CONFIG } from "../config";
import { resolve } from "../anchor";
import type { CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";
import { CompareOverlay } from "./compare";
import { CommentRow } from "./comment-row";
import { L } from "./labels";

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

  return (
    <Popover targetEl={el}>
      <HeaderRow className="fbw-thread">
        <HeaderTitle>
          {L.thread} {number}
        </HeaderTitle>
        {thread.resolved && <Badge $tone="success">{L.archivedBadge}</Badge>}
        <IconButton variant="ghost" size="sm" aria-label={L.close} onClick={onClose}>
          <ClosePanelIcon size={16} />
        </IconButton>
      </HeaderRow>

      <ThreadStack>
        {thread.comments.map((c, i) => (
          <CommentRow
            key={c.id}
            store={store}
            thread={thread}
            comment={c}
            prevVersion={i > 0 ? thread.comments[i - 1].version : undefined}
            baseline={baseline}
            onSelectBaseline={setBaseline}
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
