/* 위젯 UI 라벨 — 전부 여기서만 정의한다 (영문, 2026-07-16 결정) */
export const L = {
  /* 토글 */
  toggleOn: "Turn on comment mode",
  toggleOff: "Turn off comment mode",
  toggleHintOn: "Comment mode on — right-click (long-press) to comment",

  /* 캡처/대상 */
  target: "Comment target",

  /* 작성 */
  composerTitle: "New comment",
  composerTarget: "Target",
  namePlaceholder: "Your name (remembered)",
  nameAria: "Author name",
  composerPlaceholder: "Leave a comment on this spot…",
  post: "Post",

  /* 스레드 */
  thread: "Comment", // "Comment N"
  replyPlaceholder: "Write a reply…",
  reply: "Reply",
  archive: "Archive",
  unarchive: "Unarchive",
  archivedBadge: "Archived",
  close: "Close",
  deleteThreadAria: "Delete thread",
  deleteCommentAria: "Delete comment",
  editCommentAria: "Edit comment",
  save: "Save",

  /* 삭제 확인 */
  deleteThreadTitle: "Delete this comment thread?",
  deleteCommentTitle: "Delete this comment?",
  deleteLastCommentHint: "This is the last comment — the thread will be deleted.",
  delete: "Delete",
  cancel: "Cancel",

  /* 사이드바 */
  tab: "Comments", // "Comments N"
  listTitle: "Comments", // "Comments (N)"
  openSection: "Open",
  showArchived: (n: number) => `Show archived (${n})`,
  hideArchived: (n: number) => `Hide archived (${n})`,
  emptyLine1: "No comments yet.",
  emptyLine2: "Right-click any element (long-press on mobile).",
  copy: "Copy",
  copied: "Copied!",
  copyFailed: "Copy failed",
  downloadJson: "Download JSON",
  replies: "replies", // "· N replies"

  /* 전후 비교 */
  compare: "Compare",
  compareDisabledHint: "Nothing to compare for this thread",
  before: "Before",
  after: "After",
  current: "current",
  captureFailed: "Could not capture the current view",
  beforeServerDownTitle: "Compare is not available right now",
  beforeServerDownHint:
    "The previous version of the site is not running. Please ask the site owner to start it, then try again.",
  ok: "OK",
  versionChipTitle: "Set as compare baseline (Before)",

  /* 기본 작성자 (이름 미입력 시) */
  defaultAuthor: "Guest",
} as const;
