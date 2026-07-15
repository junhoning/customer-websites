import type { Metadata } from "next";
import PageHero from "@/components/common/page-hero";
import PrivacyBody from "@/components/privacy/privacy-body";
import { PRIVACY_PAGE } from "@/content/privacy";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: PRIVACY_PAGE.title,
  description: `${SITE.name} ${PRIVACY_PAGE.title} — 상담 신청 시 수집하는 개인정보의 항목·이용 목적·보유 기간을 안내합니다.`,
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title={PRIVACY_PAGE.title} />
      <PrivacyBody />
    </main>
  );
}
