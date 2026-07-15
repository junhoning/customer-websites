/* 데이터 타입 정의 — 유형·중요도·상태는 엑셀 양식과 같은 어휘를 쓴다 */

export const TYPES = ["문구", "디자인", "구조", "정보", "기능", "오류"] as const;
export type FeedbackType = (typeof TYPES)[number];

export const PRIORITIES = ["A", "B", "C"] as const;
export type Priority = (typeof PRIORITIES)[number];

export const STATUSES = ["대기", "진행 중", "완료", "확인 필요"] as const;
export type Status = (typeof STATUSES)[number];

export interface Anchor {
  page: string; // pathname
  selector: string; // CSS 경로
  textSnippet: string; // 폴백용 요소 텍스트 앞 40자
  scrollY: number; // 최후 폴백
}

export interface FeedbackItem {
  id: string;
  createdAt: string; // ISO
  author: string;
  anchor: Anchor;
  type: FeedbackType;
  priority: Priority;
  content: string;
  status: Status; // v0: 표시 전용
  meta: { userAgent: string; viewport: string };
  /* "seed" = 작업자가 미리 실어 보낸 기존 피드백 (읽기 전용, 내보내기 제외) */
  origin?: "seed";
}

export const uid = (): string =>
  globalThis.crypto?.randomUUID?.() ??
  `id-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
