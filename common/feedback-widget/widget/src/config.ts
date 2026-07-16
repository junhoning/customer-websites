/* 스크립트 태그 설정 — currentScript는 스크립트 평가 시점에만 유효하므로
   모듈 스코프에서 즉시 읽는다 (index가 이 모듈을 최상단에서 import) */
const SCRIPT =
  (document.currentScript as HTMLScriptElement | null) ??
  document.querySelector<HTMLScriptElement>("script[data-project]");

export const CONFIG = {
  project: SCRIPT?.dataset.project ?? "default",
  seedUrl: SCRIPT?.dataset.seed, // 기존 접수분 JSON (선택)
  /* 현재 배포(커밋) 해시 — 코멘트마다 기록해 전후 비교의 기준점이 된다 */
  version: SCRIPT?.dataset.version || undefined,
  /* Before 서버 주소 — 기본: 접속한 호스트의 :3001 (compare-serve.sh 기본 포트) */
  compareBase:
    SCRIPT?.dataset.compareBase ??
    `${location.protocol}//${location.hostname}:3001`,
  /* iframe 임베드 모드 — UI 없이 postMessage 점프 수신부로만 동작 */
  embed: new URLSearchParams(location.search).get("fbw") === "embed",
} as const;
