/* 홈 진행 절차 섹션 */
export const PROCESS_SECTION = {
  label: "진행 절차",
  title: "상담에서 등록까지",
  description:
    "각 단계에서 어떤 일이 진행되는지 미리 안내드립니다. 담당 변리사가 처음부터 끝까지 맡습니다.",
} as const;

export const PROCESS_STEPS = [
  "무료 상담 접수",
  "선행조사·전략 수립",
  "출원·명세서 작성",
  "심사·의견 대응",
  "등록 및 사후관리",
] as const;
