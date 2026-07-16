import Hero from "@/components/home/hero";
import StatsBand from "@/components/home/stats-band";
import ServiceCards from "@/components/home/service-cards";
import ProcessSteps from "@/components/home/process-steps";
import FaqList from "@/components/home/faq-list";
import PartnerLogos from "@/components/home/partner-logos";
import CtaBanner from "@/components/common/cta-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBand />
      <ServiceCards />
      <ProcessSteps />
      <FaqList />
      <PartnerLogos />
      <CtaBanner />
    </main>
  );
}
