import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
