/* 스레드 팝오버 — 코멘트 대화 + 답글 입력 + 완료 + 전후 비교. 대상 요소 옆에 뜬다.
   코멘트별 수정·삭제·스크린샷 썸네일은 CommentRow가 담당 (썸네일 클릭 = 그 시점 vs 지금) */
import { useState } from "react";
import {
  Badge,
  CheckIcon,
  ClosePanelIcon,
  CommentInput,
  CommentThread as ThreadStack,
  IconButton,
  TextButton,
  TextField,
} from "@ingradient/ui";
import { CONFIG } from "../config";
import { resolve } from "../anchor";
import { captureShot } from "../shot";
import type { Attachment, CommentThread } from "../types";
import type { Store } from "../store";
import { HeaderRow, HeaderTitle, Popover } from "./popover";
import { AreaCompare } from "./area-compare";
import { AttachButton, AttachChips } from "./attach-input";
import { CommentRow } from "./comment-row";
import { L } from "./labels";

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
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [areaShots, setAreaShots] = useState<{ before: string; after?: string } | null>(null);
  const el = thread.anchor.page === location.pathname ? resolve(thread.anchor) : null;

  /* 코멘트 썸네일 클릭 — 그 코멘트 시점(Before) vs 지금 즉석 캡처(After) */
  const compareWith = async (shot: string) => {
    const after = el ? await captureShot(el) : undefined;
    setAreaShots({ before: shot, after });
  };

  const reply = async () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    const name = author.trim() || L.defaultAuthor;
    store.author = name;
    // 답글에도 그 시점 모습을 남긴다 — 스레드가 시각적 타임라인이 된다
    const shot = el ? await captureShot(el) : undefined;
    store.addComment(thread.id, name, trimmed, CONFIG.version, shot, attachments);
    setBody("");
    setAttachments([]);
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
            onCompare={compareWith}
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
      <AttachChips pending={attachments} onChange={setAttachments} />
      <CommentInput
        value={body}
        onChange={setBody}
        onSubmit={reply}
        placeholder={L.replyPlaceholder}
        submitLabel={L.reply}
        accessory={<AttachButton pending={attachments} onChange={setAttachments} />}
      />
      <TextButton
        tone={thread.resolved ? "muted" : "accent"}
        iconLeading={<CheckIcon size={14} />}
        onClick={() => store.setResolved(thread.id, !thread.resolved)}
      >
        {thread.resolved ? L.unarchive : L.archive}
      </TextButton>

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
