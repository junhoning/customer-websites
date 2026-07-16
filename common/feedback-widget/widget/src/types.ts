/* 데이터 타입 — v2: 코멘트 스레드 모델 (유형·중요도 없음, resolved만 유지) */

export const SCHEMA_VERSION = 2;

export interface Anchor {
  page: string; // pathname
  selector: string; // CSS 경로
  textSnippet: string; // 폴백용 요소 텍스트 앞 40자
  scrollY: number; // 최후 폴백
}

/* 고객이 코멘트에 올리는 파일(이미지) — 회신 JSON에 포함되어 작업자에게 전달된다 */
export interface Attachment {
  name: string;
  dataUrl: string;
}

export interface Comment {
  id: string;
  author: string;
  body: string;
  createdAt: string; // ISO
  /* 작성 시점의 배포(커밋) 해시 (정보 칩 표시용) */
  version?: string;
  /* 작성 순간의 대상 영역 스크린샷(JPEG dataURL) — 코멘트마다 그 시점 모습이 남아
     스레드가 시각적 타임라인이 된다. 내보내기에서는 제외 (용량) */
  shot?: string;
  /* 첨부 파일 — 스크린샷과 달리 콘텐츠이므로 내보내기에 포함된다 */
  attachments?: Attachment[];
}

export interface CommentThread {
  id: string;
  createdAt: string; // ISO — 스레드(최초 코멘트) 작성 시각
  anchor: Anchor;
  resolved: boolean; // 완료 처리 — 핀 숨김, 사이드바 "완료됨" 그룹으로
  comments: Comment[]; // [0] = 최초 코멘트 (스레드의 본문)
  meta: { userAgent: string; viewport: string };
  /* @deprecated v0.7의 스레드 단위 스크린샷 — 로드 시 comments[0].shot으로 이관 */
  beforeShot?: string;
  /* "seed" = 작업자가 미리 실어 보낸 기존 접수분 (파일이 원본, 변경은 override 영속화) */
  origin?: "seed";
}

export const uid = (): string =>
  globalThis.crypto?.randomUUID?.() ??
  `id-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

/* 스레드 요약(사이드바·핀 툴팁) — 최초 코멘트 본문 */
export const threadBody = (t: CommentThread): string => t.comments[0]?.body ?? "";
export const threadAuthor = (t: CommentThread): string => t.comments[0]?.author ?? "";
