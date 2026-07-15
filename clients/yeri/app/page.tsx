import Hero from "@/components/home/hero";
import StatsBand from "@/components/home/stats-band";
import ServiceCards from "@/components/home/service-cards";
import ProcessSteps from "@/components/home/process-steps";
import FaqList from "@/components/home/faq-list";
import CtaBanner from "@/components/common/cta-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBand />
      <ServiceCards />
      <ProcessSteps />
      <FaqList />
      <CtaBanner />
    </main>
  );
}
