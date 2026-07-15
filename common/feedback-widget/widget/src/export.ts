/* JSON 직렬화·다운로드·클립보드 — 병합 스크립트(tools/merge_feedback_json.py)의 입력 형식 */
import type { FeedbackItem } from "./types";

export function serialize(project: string, items: readonly FeedbackItem[]): string {
  return JSON.stringify(
    { project, exportedAt: new Date().toISOString(), items },
    null,
    2,
  );
}

export function download(project: string, items: readonly FeedbackItem[]) {
  const blob = new Blob([serialize(project, items)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `feedback-${project}-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export async function copyToClipboard(
  project: string,
  items: readonly FeedbackItem[],
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(serialize(project, items));
    return true;
  } catch {
    return false;
  }
}
