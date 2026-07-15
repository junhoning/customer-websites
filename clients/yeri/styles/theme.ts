/* ========== [1층] Primitive — export 하지 않는다. 컴포넌트에서 직접 사용 금지 ==========
   테마: "모던 차콜 & 소프트 피치 핑크" (피드백 1번, 2026-07-15 반영) */
const palette = {
  charcoal50: "#f1f4f8",
  charcoal600: "#4a5568",
  charcoal700: "#2d3748", // 고객 지정 브랜드색
  charcoal800: "#232d3d",
  charcoal900: "#1a202c",

  peach100: "#faece8",
  peach500: "#e5a99e", // 고객 지정 포인트색
  peach600: "#d18d80",
  peach700: "#a8655a",

  red400: "#ff6568",
  red600: "#e40014",

  white: "#ffffff",
} as const;

/* ========== [2층] Semantic — 컴포넌트가 사용하는 유일한 이름 ========== */
export const theme = {
  color: {
    /* 배경/텍스트 기본 */
    background: palette.white, // 페이지 기본 배경
    foreground: "#1a2233", // 본문 텍스트
    muted: "#5b6577", // 보조 텍스트
    surface: "#f7f9fc", // 섹션 교차 배경
    line: "#e4e8f0", // 보더/구분선

    /* 브랜드 역할 */
    primary: palette.charcoal700, // 주 버튼 배경
    primaryStrong: palette.charcoal800, // 어두운 배너, 헤딩 텍스트
    primaryDeep: palette.charcoal900, // 히어로 그라디언트 시작
    primaryHover: palette.charcoal600, // hover, focus 보더
    primaryTint: palette.charcoal50, // 밝은 칩/배지 배경

    accent: palette.peach500, // 피치 포인트(버튼, 장식선)
    accentHover: palette.peach600,
    accentText: palette.peach700, // 라벨, 필수(*) 표시
    accentTint: palette.peach100,

    /* 상태 */
    danger: palette.red600, // 폼 에러 메시지
    dangerBorder: palette.red400, // 에러 인풋 보더

    /* 외부 브랜드 고정색 (테마와 무관) */
    kakao: "#fee500",
    kakaoText: "#3c1e1e",

    onDark: palette.white, // 어두운 배경 위 텍스트
  },

  font: {
    heading: `var(--font-nanum), "Nanum Myeongjo", serif`, // 제목: 나눔명조
    body: `var(--font-pretendard), -apple-system, sans-serif`, // 본문: Pretendard
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    h3: "1.5rem",
    h2: "1.875rem",
    h1: "2.25rem",
    hero: "2.75rem", // 히어로 h1 (md 이상)
  },

  radius: {
    card: "0.75rem", // 카드
    field: "0.375rem", // 인풋/버튼
    pill: "9999px", // 배지/원형 버튼
  },

  layout: {
    content: "72rem", // 콘텐츠 최대폭
    narrow: "48rem", // 좁은 텍스트 섹션
    sectionY: "5rem", // 섹션 수직 여백
    gutter: "1.25rem", // 좌우 패딩
    headerH: "4.5rem", // 헤더 높이 (scroll-padding 보정에도 사용)
    mobileBarH: "3.75rem", // 모바일 하단 고정 바 높이
  },

  z: {
    floating: 30,
    header: 40,
    mobileBar: 40,
    modal: 50,
  },
} as const;

export type AppTheme = typeof theme;
