import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  /* dev 서버를 외부(내부망 IP·공인 IP)에서 접속할 때 허용할 호스트.
     dev 전용 설정 — 프로덕션(next start)에는 영향 없음. Firebase 배포 후 불필요 */
  allowedDevOrigins: ["10.100.150.34", "211.118.24.136"],
  /* 좌하단 Next 개발 표시기(N 로고) 숨김 — 고객 리뷰 시 피드백 위젯과 겹침 방지 */
  devIndicators: false,
};

export default nextConfig;
