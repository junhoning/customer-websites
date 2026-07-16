/* 코멘트 첨부 파일 처리 — 이미지만 받고, 큰 이미지는 축소 재인코딩한다
   (localStorage 예산 + 회신 JSON 크기 억제) */
import type { Attachment } from "./types";

const MAX_DIM = 1200;
const JPEG_QUALITY = 0.85;
const KEEP_ORIGINAL_BYTES = 400_000; // 이보다 작고 치수도 작으면 원본 유지 (투명 PNG 보존)

const readAsDataURL = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("이미지 로드 실패"));
    img.src = src;
  });

export async function fileToAttachment(file: File): Promise<Attachment | undefined> {
  if (!file.type.startsWith("image/")) return undefined; // v0는 이미지만
  const dataUrl = await readAsDataURL(file);
  // 캔버스 미지원 환경(jsdom 등)은 원본 그대로
  if (!document.createElement("canvas").getContext("2d")) {
    return { name: file.name, dataUrl };
  }
  try {
    const img = await loadImage(dataUrl);
    const maxSide = Math.max(img.width, img.height);
    if (maxSide <= MAX_DIM && dataUrl.length <= KEEP_ORIGINAL_BYTES) {
      return { name: file.name, dataUrl };
    }
    const scale = Math.min(1, MAX_DIM / maxSide);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return { name: file.name, dataUrl: canvas.toDataURL("image/jpeg", JPEG_QUALITY) };
  } catch {
    return { name: file.name, dataUrl };
  }
}
