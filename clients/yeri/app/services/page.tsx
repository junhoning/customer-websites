import type { Metadata } from "next";
import PageHero from "@/components/common/page-hero";
import AnchorNav from "@/components/services/anchor-nav";
import ServiceDetail from "@/components/services/service-detail";
import CtaBanner from "@/components/common/cta-banner";
import { SERVICES, SERVICES_PAGE } from "@/content/services";

export const metadata: Metadata = {
  title: SERVICES_PAGE.title,
  description: SERVICES_PAGE.metaDescription,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        label={SERVICES_PAGE.label}
        title={SERVICES_PAGE.title}
        description={SERVICES_PAGE.description}
      />
      <AnchorNav />
      {SERVICES.map((service) => (
        <ServiceDetail key={service.id} service={service} />
      ))}
      <CtaBanner />
    </main>
  );
}
