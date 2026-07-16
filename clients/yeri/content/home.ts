/* 홈 전용 문구 — 히어로 버튼과 업무 분야 섹션 헤딩 */
export const HOME_HERO = {
  primaryLabel: "상담 신청",
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
    "특허·상표·디자인·저작권 등록부터 조사와 전략, 침해 대응·영업비밀까지 한 곳에서 진행합니다.",
  cardCta: "자세히 보기 →",
} as const;

/* 피드백 #13 반영 — 협력·관련 기관 (로고 이미지 확보 시 텍스트 칩 대신 교체) */
export const PARTNERS_SECTION = {
  label: "협력·관련 기관",
  title: "함께하는 기관",
} as const;

export const PARTNERS = [
  "특허청",
  "키프리스",
  "한국발명진흥회",
  "특허심판원",
  "특허법원",
  "칭화대학 (清华大学)",
] as const;
