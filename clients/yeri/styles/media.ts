/* 브레이크포인트 토큰 — 컴포넌트에서 @media 직접 작성 금지, 반드시 이 토큰 사용 */
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const media = {
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  /* 모바일 전용 스타일 (md 미만) */
  maxMd: `@media (max-width: ${breakpoints.md - 0.02}px)`,
} as const;
