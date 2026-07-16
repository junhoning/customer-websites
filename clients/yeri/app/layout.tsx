import type { Metadata } from "next";
import Script from "next/script";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "@/app/providers";
import { nanumMyeongjo, pretendard } from "@/app/fonts";
import { SITE } from "@/config/site";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingActions from "@/components/layout/floating-actions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | 특허·상표·디자인 전문`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | 특허·상표·디자인 전문`,
    description: SITE.description,
    locale: "ko_KR",
    type: "website",
  },
};

/* 리뷰 배포 전용 피드백 위젯 — 환경변수가 꺼진 빌드(실제 오픈)에는 포함되지 않는다 */
const feedbackWidgetSrc =
  process.env.NEXT_PUBLIC_FEEDBACK === "1"
    ? process.env.NEXT_PUBLIC_FEEDBACK_URL
    : undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nanumMyeongjo.variable} ${pretendard.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Footer />
            <FloatingActions />
          </Providers>
        </StyledComponentsRegistry>
        {feedbackWidgetSrc && (
          <Script
            src={feedbackWidgetSrc}
            data-project="yeri"
            data-seed="/feedback-seed.json"
            data-version={process.env.NEXT_PUBLIC_GIT_SHA}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
