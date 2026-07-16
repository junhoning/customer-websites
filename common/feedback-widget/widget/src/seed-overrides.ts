/* 시드 스레드 override — 파일이 원본인 시드에 대한 고객 행동(답글·수정·삭제·완료)을
   localStorage에 겹쳐 적는 순수 함수들. Store가 영속화를, 여기가 계산을 담당한다 */
import type { Comment, CommentThread } from "./types";

export interface SeedOverride {
  addedComments?: Comment[];
  editedBodies?: Record<string, string>; // 시드 원본 코멘트 본문 수정
  hiddenCommentIds?: string[]; // 시드 원본 코멘트 삭제(숨김)
  resolved?: boolean;
  hidden?: boolean;
}

export type SeedOverrides = Record<string, SeedOverride>;

/* 시드 원본에 override를 적용한 표시용 스레드 목록 */
export function applySeedOverrides(
  rawSeeds: CommentThread[],
  overrides: SeedOverrides,
): CommentThread[] {
  return rawSeeds
    .filter((t) => !overrides[t.id]?.hidden)
    .map((t) => {
      const ov = overrides[t.id];
      if (!ov) return { ...t, origin: "seed" as const };
      const hiddenIds = new Set(ov.hiddenCommentIds ?? []);
      const originals = t.comments
        .filter((c) => !hiddenIds.has(c.id))
        .map((c) => (ov.editedBodies?.[c.id] ? { ...c, body: ov.editedBodies[c.id] } : c));
      return {
        ...t,
        origin: "seed" as const,
        resolved: ov.resolved ?? t.resolved,
        comments: [...originals, ...(ov.addedComments ?? [])],
      };
    })
    .filter((t) => t.comments.length > 0); // 코멘트가 다 지워진 스레드는 숨김
}

/* 코멘트 수정 patch — 고객이 단 답글은 addedComments 안에서, 원본은 editedBodies로 */
export function seedEditPatch(ov: SeedOverride, commentId: string, body: string): SeedOverride {
  const added = ov.addedComments ?? [];
  if (added.some((c) => c.id === commentId)) {
    return { addedComments: added.map((c) => (c.id === commentId ? { ...c, body } : c)) };
  }
  return { editedBodies: { ...ov.editedBodies, [commentId]: body } };
}

/* 코멘트 삭제 patch — 답글은 배열에서 제거, 원본은 숨김 목록에 추가 */
export function seedRemovePatch(ov: SeedOverride, commentId: string): SeedOverride {
  const added = ov.addedComments ?? [];
  if (added.some((c) => c.id === commentId)) {
    return { addedComments: added.filter((c) => c.id !== commentId) };
  }
  return { hiddenCommentIds: [...(ov.hiddenCommentIds ?? []), commentId] };
}
