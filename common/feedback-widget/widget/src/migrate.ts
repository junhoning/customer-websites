/* v0(피드백 단건) → v2(코멘트 스레드) localStorage 마이그레이션.
   원칙: 스키마가 바뀔 때마다 마이그레이션 코드가 함께 나간다 (기획서 §9 Q3) */
import { uid, type CommentThread } from "./types";

interface V0Item {
  id: string;
  createdAt: string;
  author: string;
  anchor: CommentThread["anchor"];
  content: string;
  status: string;
  meta: CommentThread["meta"];
}

export function migrateV0(project: string) {
  const oldKey = `fbw:${project}`;
  const oldOverridesKey = `fbw:overrides:${project}`;
  const newKey = `fbw:v2:${project}`;
  if (localStorage.getItem(newKey) !== null) return; // 이미 v2 사용 중

  try {
    const raw = localStorage.getItem(oldKey);
    if (raw) {
      const items = JSON.parse(raw) as V0Item[];
      const threads: CommentThread[] = items.map((it) => ({
        id: it.id,
        createdAt: it.createdAt,
        anchor: it.anchor,
        resolved: it.status === "완료",
        comments: [
          { id: uid(), author: it.author, body: it.content, createdAt: it.createdAt },
        ],
        meta: it.meta ?? { userAgent: "", viewport: "" },
      }));
      localStorage.setItem(newKey, JSON.stringify(threads));
    }
    /* v0 시드 override 중 살릴 수 있는 것은 숨김뿐 (내용 수정은 코멘트 모델에 없음) */
    const rawOv = localStorage.getItem(oldOverridesKey);
    if (rawOv) {
      const oldOv = JSON.parse(rawOv) as Record<string, { hidden?: boolean }>;
      const kept: Record<string, { hidden: true }> = {};
      for (const [id, ov] of Object.entries(oldOv)) {
        if (ov?.hidden) kept[id] = { hidden: true };
      }
      if (Object.keys(kept).length > 0) {
        localStorage.setItem(`fbw:v2:overrides:${project}`, JSON.stringify(kept));
      }
    }
  } catch {
    /* 손상된 구버전 데이터는 버린다 — 시드는 파일에서 다시 온다 */
  }
  localStorage.removeItem(oldKey);
  localStorage.removeItem(oldOverridesKey);
}
