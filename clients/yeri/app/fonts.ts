/* 폰트 정의 지점 — 폰트명 리터럴은 이 파일과 styles/theme.ts에만 존재한다 */
import { Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum",
  display: "swap",
});

export const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});
