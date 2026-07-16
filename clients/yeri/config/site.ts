/* 사이트 정보 토큰 — 연락처·주소 등 확정되면 이 파일만 수정한다 */
export const SITE = {
  name: "오예리 특허법률사무소",
  slogan: "특허·상표 출원부터 분쟁 대응까지, 변리사가 직접 맡습니다",
  description:
    "오예리 특허법률사무소는 개인 발명가와 스타트업, 중소기업의 지식재산을 " +
    "출원 단계부터 등록과 분쟁 대응까지 책임집니다.",
  representative: "오예리 대표 변호사·변리사", // 피드백 #14 — 변호사 자격 추가
  representativeEn: "dual-qualified Attorney-at-Law & Patent Attorney (Korea)",

  phone: "02-1234-5678", // TODO: 확정 후 교체
  phoneHref: "tel:02-1234-5678",
  email: "contact@example.com", // TODO: 확정 후 교체
  address: "서울특별시 서초구 반포대로 00, 0층 (서초동)", // TODO: 확정 후 교체
  hours: "평일 09:00 – 18:00 (점심 12:00 – 13:00)",
  kakaoUrl: "https://pf.kakao.com/_example", // TODO: 확정 후 교체
  responseTime: "24시간", // "○○ 이내 회신" 문구에 사용
  disclaimer: "본 사이트의 콘텐츠·수치는 예시입니다.", // TODO: 실 콘텐츠 확정 시 제거

  url: "https://example.com", // TODO: 배포 도메인 (sitemap/OG용)
} as const;
