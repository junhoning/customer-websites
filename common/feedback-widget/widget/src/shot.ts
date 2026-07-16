/* 요소 영역 스크린샷 — 코멘트 작성 순간의 모습을 저장해 전후 비교의 Before로 쓴다.
   실패(미지원 브라우저·외부 리소스 차단 등)해도 위젯 동작에는 영향 없다 */
import { toCanvas } from "html-to-image";

const MAX_WIDTH = 800; // 저장 크기 억제 — localStorage 예산
const JPEG_QUALITY = 0.8;

/* 캡처 범위 — 글자 조각(h1 등)만 찍으면 배경이 빠져 알아볼 수 없다
   (예: 투명 배경 위 흰 글자 → 흰 이미지). 요소가 속한 섹션 단위로 넓힌다 */
export function captureTarget(el: Element): Element {
  const container = el.closest("section, article, header, footer, nav, aside");
  if (!container || container === document.body || container === document.documentElement) {
    return el;
  }
  return container;
}

export async function captureShot(el: Element): Promise<string | undefined> {
  try {
    // 캔버스 미지원 환경(jsdom 등) 선확인 — html-to-image 내부 에러 로그 방지
    if (!document.createElement("canvas").getContext("2d")) return undefined;
    const canvas = await toCanvas(captureTarget(el) as HTMLElement, { pixelRatio: 1 });
    if (canvas.width === 0 || canvas.height === 0) return undefined;
    const scale = Math.min(1, MAX_WIDTH / canvas.width);
    const out = document.createElement("canvas");
    out.width = Math.round(canvas.width * scale);
    out.height = Math.round(canvas.height * scale);
    const ctx = out.getContext("2d");
    if (!ctx) return undefined;
    ctx.fillStyle = "#ffffff"; // JPEG는 투명이 없다 — 흰 배경 깔기
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.drawImage(canvas, 0, 0, out.width, out.height);
    return out.toDataURL("image/jpeg", JPEG_QUALITY);
  } catch {
    return undefined;
  }
}
