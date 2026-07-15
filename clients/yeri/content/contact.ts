/* 상담 신청 페이지 문구 — 폼 라벨/플레이스홀더/상태 메시지 전부 여기서 관리 */
export const CONTACT_PAGE = {
  label: "상담 신청",
  title: "상담 신청",
  description:
    "출원 여부가 고민되거나 분쟁 상황이라면 편하게 남겨 주세요. " +
    "상담 비용은 없고, 접수하면 다음 영업일 안에 답변드립니다.",
  metaDescription: "특허·상표·디자인 무료 상담 신청. 24시간 이내에 담당 변리사가 회신합니다.",
} as const;

export const CONSULT_FORM = {
  heading: "상담 신청서",
  subheading: "아래 정보를 남겨 주시면 담당 변리사가 직접 연락드립니다.",
  fields: {
    name: { label: "이름", placeholder: "홍길동" },
    phone: { label: "연락처", placeholder: "010-1234-5678" },
    email: { label: "이메일 (선택)", placeholder: "you@example.com" },
    service: { label: "상담 분야", placeholder: "분야를 선택하세요" },
    message: { label: "문의 내용", placeholder: "상담받고 싶은 내용을 간단히 적어 주세요." },
  },
  privacy: {
    linkLabel: "개인정보 수집·이용",
    after: "에 동의합니다. (상담 목적으로만 사용됩니다)",
  },
  submitLabel: "무료 상담 신청하기",
  submittingLabel: "전송 중…",
  success: {
    title: "상담 신청이 접수되었습니다",
    description: "24시간 이내에 담당 변리사가 연락드리겠습니다.",
    againLabel: "다시 신청하기",
  },
  errorMessage: "전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.",
} as const;

export const CONTACT_ASIDE = {
  channelsTitle: "빠른 상담 채널",
  kakaoLabel: "카카오톡 상담",
  infoTitle: "상담 안내",
  hoursLabel: "상담 시간",
  addressLabel: "주소",
  freeNotice: "상담 비용은 무료입니다.",
} as const;
