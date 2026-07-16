/* 임베드 모드 — 비교 뷰 iframe 안에서 UI 없이 postMessage 점프 수신부로만 동작.
   부모(3000)와 iframe(3001)은 origin이 달라 직접 접근이 불가 → 메시지로 통신 */
import { jump } from "./anchor";
import type { Anchor } from "./types";

interface JumpMessage {
  type: "fbw:jump";
  anchor: Anchor;
}

const isJumpMessage = (d: unknown): d is JumpMessage =>
  typeof d === "object" &&
  d !== null &&
  (d as JumpMessage).type === "fbw:jump" &&
  typeof (d as JumpMessage).anchor?.page === "string";

export function initEmbed() {
  // 리뷰 전용 dev 도구라 origin 검증은 생략 — 앵커로 스크롤만 할 뿐 데이터 접근 없음
  window.addEventListener("message", (e: MessageEvent) => {
    if (isJumpMessage(e.data)) jump(e.data.anchor);
  });
}
