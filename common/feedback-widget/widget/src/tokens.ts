/* 위젯 UI 토큰 — 고객사 테마와 무관한 중립 색. 위젯의 모든 스타일 값은 여기서만 */
export const T = {
  z: 2147483000, // 호스트 엘리먼트에만 적용 (페이지 최상위)
  color: {
    panel: "#ffffff",
    panelDark: "#1f2937",
    text: "#111827",
    subtext: "#6b7280",
    line: "#e5e7eb",
    accent: "#2563eb",
    accentSoft: "#dbeafe",
    danger: "#dc2626",
    pin: "#f59e0b",
    onDark: "#ffffff",
    statusWait: "#6b7280",
    statusDoing: "#d97706",
    statusDone: "#16a34a",
    statusAsk: "#dc2626",
  },
  radius: { panel: "12px", field: "8px", pill: "999px" },
  font: `-apple-system, BlinkMacSystemFont, "Pretendard", "Malgun Gothic", sans-serif`,
  shadow: "0 8px 28px rgba(0, 0, 0, 0.22)",
  sidebarW: "320px",
} as const;
