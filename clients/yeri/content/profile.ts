/* 사무소 소개(/about) 콘텐츠 */
export const ABOUT_HERO = {
  label: "사무소 소개",
  title: "사건을 직접 맡는 사무소",
  description:
    "특허와 상표, 디자인 출원부터 심판과 소송까지 지식재산 업무를 다룹니다. " +
    "담당 변리사가 상담부터 사건 종결까지 직접 챙깁니다.",
} as const;

export const PROFILE = {
  photoAlt: "오예리 대표 변호사·변리사 프로필 사진",
  photoSrc: "/representative.jpg", // TODO: 에셋 수령 후 플레이스홀더 대신 사용
  photoPlaceholder: "대표 프로필 사진 (플레이스홀더)",
  title: "기술과 브랜드를 함께 읽습니다",
  description:
    "심사와 심판 실무를 두루 거친 변리사가 출원부터 등록, 이후 분쟁까지 맡습니다. " +
    "발명의 핵심과 브랜드의 쓰임을 정확히 파악해, 사업 목표에 맞는 권리를 설계합니다.",
  careers: [
    "특허·상표·디자인 출원 및 등록 전 과정 대리",
    "거절이유·의견제출통지 대응 및 심판 수행",
    "침해 감정, 경고장 대응, 지식재산 소송 지원",
    "PCT·마드리드 등 해외출원 포트폴리오 설계",
  ],
} as const;

export const STRENGTHS = [
  {
    title: "권리범위를 넓게",
    description:
      "출원 자체보다 등록 이후를 봅니다. 사업을 실제로 지킬 수 있는 권리범위를 설계합니다.",
  },
  {
    title: "변리사가 직접",
    description: "명세서 작성부터 심사 대응까지, 담당 변리사가 사건을 직접 맡습니다.",
  },
  {
    title: "빠른 회신",
    description: "상담을 접수하면 늦어도 다음 영업일 안에 답변드립니다.",
  },
] as const;

export const LOCATION_SECTION = {
  title: "오시는 길",
  mapPlaceholder: "지도 영역 (플레이스홀더)", // TODO: 지도 연동 여부 발주자 확인
} as const;
