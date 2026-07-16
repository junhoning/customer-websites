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
import { captureShot } from "../shot";
import type { CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";
import { AreaCompare } from "./area-compare";
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
  const [areaShots, setAreaShots] = useState<{ before: string; after?: string } | null>(null);
  const el = thread.anchor.page === location.pathname ? resolve(thread.anchor) : null;

  /* 영역 스크린샷 비교 — 작성 순간 저장분(Before) vs 지금 즉석 캡처(After).
     업계 표준(BugHerd·Marker.io) 방식 — 스크린샷 없는 스레드는 비활성 */
  const openCompare = async () => {
    if (!thread.beforeShot) return;
    const after = el ? await captureShot(el) : undefined;
    setAreaShots({ before: thread.beforeShot, after });
  };

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
          disabled={!thread.beforeShot}
          title={thread.beforeShot ? undefined : L.compareDisabledHint}
          onClick={openCompare}
        >
          {L.compare}
        </TextButton>
      </ActionsRow>

      {areaShots && (
        <AreaCompare
          before={areaShots.before}
          after={areaShots.after}
          onClose={() => setAreaShots(null)}
        />
      )}
    </Popover>
  );
}
