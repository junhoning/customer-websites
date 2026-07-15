"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import ConsultForm from "@/components/contact/consult-form";
import ContactAside from "@/components/contact/contact-aside";
import { CONSULT_FORM } from "@/content/contact";

/* 상담 페이지 본문 배치 — 폼(좌) + 사이드바(우) 2열 */

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: start;

  ${media.md} {
    grid-template-columns: 3fr 2fr;
  }
`;

export default function ContactBody() {
  return (
    <Section>
      <SectionInner>
        <SectionHeading
          title={CONSULT_FORM.heading}
          description={CONSULT_FORM.subheading}
        />
        <Grid>
          <ConsultForm />
          <ContactAside />
        </Grid>
      </SectionInner>
    </Section>
  );
}
