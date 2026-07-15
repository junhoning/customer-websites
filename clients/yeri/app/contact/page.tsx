import type { Metadata } from "next";
import PageHero from "@/components/common/page-hero";
import ContactBody from "@/components/contact/contact-body";
import { CONTACT_PAGE } from "@/content/contact";

export const metadata: Metadata = {
  title: CONTACT_PAGE.title,
  description: CONTACT_PAGE.metaDescription,
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label={CONTACT_PAGE.label}
        title={CONTACT_PAGE.title}
        description={CONTACT_PAGE.description}
      />
      <ContactBody />
    </main>
  );
}
