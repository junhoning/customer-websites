/* JSON 직렬화·다운로드·클립보드 — 병합 스크립트(tools/merge_feedback_json.py)의 입력 형식 */
import { SCHEMA_VERSION, type CommentThread } from "./types";

export function serialize(project: string, threads: readonly CommentThread[]): string {
  return JSON.stringify(
    { project, schemaVersion: SCHEMA_VERSION, exportedAt: new Date().toISOString(), threads },
    null,
    2,
  );
}

export function download(project: string, threads: readonly CommentThread[]) {
  const blob = new Blob([serialize(project, threads)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `comments-${project}-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function copyToClipboard(
  project: string,
  threads: readonly CommentThread[],
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(serialize(project, threads));
    return true;
  } catch {
    return false;
  }
}
