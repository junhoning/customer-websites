/* 스크립트 태그 설정 — currentScript는 스크립트 평가 시점에만 유효하므로
   모듈 스코프에서 즉시 읽는다 (index가 이 모듈을 최상단에서 import) */
const SCRIPT =
  (document.currentScript as HTMLScriptElement | null) ??
  document.querySelector<HTMLScriptElement>("script[data-project]");

export const CONFIG = {
  project: SCRIPT?.dataset.project ?? "default",
  seedUrl: SCRIPT?.dataset.seed, // 기존 접수분 JSON (선택)
  /* 현재 배포(커밋) 해시 — 코멘트마다 기록 (버전 칩 표시, v1 리뷰 라운드의 재료) */
  version: SCRIPT?.dataset.version || undefined,
} as const;
