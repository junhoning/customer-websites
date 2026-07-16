/* GNB/푸터 메뉴 */
export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "사무소 소개", href: "/about" },
  { label: "서비스 안내", href: "/services" },
  { label: "상담 신청", href: "/contact" },
] as const;

export const CTA_LINK = { label: "상담 신청", href: "/contact" } as const;
export const PRIVACY_LINK = { label: "개인정보처리방침", href: "/privacy" } as const;

/* 피드백 #2 — 헤더 우측 LinkedIn·언어 전환. 연결 주소는 답변 대기(Q1)라 목업 */
export const HEADER_EXTRAS = {
  pendingTitle: "연결 주소 확정 대기 (고객 답변 Q1)",
  linkedin: { label: "in", aria: "LinkedIn", href: "#" }, // TODO: Q1 답변 후 실제 주소
  languages: [
    { label: "한", href: "#" }, // TODO: Q1 — 블로그 연결로 추정
    { label: "EN", href: "#" }, // TODO: Q1 — 링크드인 연결로 추정
    { label: "中", href: "#" }, // TODO: Q1 — 링크드인 연결로 추정
  ],
} as const;
