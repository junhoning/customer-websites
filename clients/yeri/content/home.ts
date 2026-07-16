/* 홈 전용 문구 — 히어로 버튼과 업무 분야 섹션 헤딩 */
export const HOME_HERO = {
  primaryLabel: "무료 상담 신청",
  primaryHref: "/contact",
  secondaryLabel: "서비스 안내",
  secondaryHref: "/services",
} as const;

/* 피드백 #6 반영 — 메인 배너에 보여줄 이 사무소만의 강점 3가지 */
export const HOME_HERO_STRENGTHS = [
  {
    title: "변호사·변리사 1:1 전담",
    description: "출원부터 법률자문·소송·투자유치 자료까지 한 사람이 끝까지",
  },
  {
    title: "의료·뷰티·디자인 전문",
    description: "산업을 이해하는 분야 특화 IP 전략",
  },
  {
    title: "영어·중국어 상담",
    description: "해외 고객도 모국어처럼 편하게",
  },
] as const;

export const HOME_SERVICES_SECTION = {
  label: "업무 분야",
  title: "여섯 개 분야를 다룹니다",
  description:
    "특허와 상표, 디자인 출원은 물론 심판과 소송, 해외출원까지 한 곳에서 진행합니다.",
  cardCta: "자세히 보기 →",
} as const;
