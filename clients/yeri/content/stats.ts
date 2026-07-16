/* 홈 실적 수치 밴드 — 피드백 #8 반영 (3칸 교체, 4번째 칸은 고객 답변 대기) */
export const STATS = [
  { value: "의료 & IP 전략", label: "전문 분야" },
  { value: "영어·중국어", label: "다국어 상담 가능" },
  { value: "9년+", label: "실무 경력" },
  { value: "24시간", label: "이내 상담 회신" }, // TODO: 4번째 칸 내용 — 고객 답변 대기 (Q3)
] as const;
