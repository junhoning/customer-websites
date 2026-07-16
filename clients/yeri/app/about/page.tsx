import type { Metadata } from "next";
import PageHero from "@/components/common/page-hero";
import ProfileSection from "@/components/about/profile-section";
import Expertise from "@/components/about/expertise";
import Strengths from "@/components/about/strengths";
import Books from "@/components/about/books";
import Location from "@/components/about/location";
import CtaBanner from "@/components/common/cta-banner";
import { ABOUT_HERO } from "@/content/profile";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: ABOUT_HERO.label,
  description: `${SITE.name} 소개. ${SITE.representative}가 사건을 직접 맡는 지식재산 전문 사무소입니다.`,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label={ABOUT_HERO.label}
        title={ABOUT_HERO.title}
        description={ABOUT_HERO.description}
      />
      <ProfileSection />
      <Expertise />
      <Strengths />
      <Books />
      <Location />
      <CtaBanner />
    </main>
  );
}
