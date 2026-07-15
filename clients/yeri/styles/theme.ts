/* ========== [1층] Primitive — export 하지 않는다. 컴포넌트에서 직접 사용 금지 ========== */
const palette = {
  navy50: "#eef3fa",
  navy600: "#1e498a",
  navy700: "#16386a",
  navy800: "#10294c",
  navy900: "#0b1f3a",

  gold100: "#f6edd8",
  gold500: "#c8a34e",
  gold600: "#b8912f",
  gold700: "#846818",

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
    primary: palette.navy700, // 주 버튼 배경
    primaryStrong: palette.navy800, // 어두운 배너, 헤딩 텍스트
    primaryDeep: palette.navy900, // 히어로 그라디언트 시작
    primaryHover: palette.navy600, // hover, focus 보더
    primaryTint: palette.navy50, // 밝은 칩/배지 배경

    accent: palette.gold500, // 골드 포인트(버튼, 장식선)
    accentHover: palette.gold600,
    accentText: palette.gold700, // 라벨, 필수(*) 표시
    accentTint: palette.gold100,

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
