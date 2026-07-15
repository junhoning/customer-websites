"use client";

import Link from "next/link";
import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { cardFrame } from "@/components/common/card";
import { HOME_SERVICES_SECTION } from "@/content/home";
import { SERVICES } from "@/content/services";

/* 6대 분야 카드 그리드 — 각 카드는 /services#분야id로 이동 */

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardLink = styled(Link)`
  ${cardFrame}
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.color.primaryHover};
    box-shadow: 0 4px 16px
      color-mix(in srgb, ${({ theme }) => theme.color.primaryDeep} 8%, transparent);
  }
`;

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const Tagline = styled.p`
  margin-top: 0.625rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};
`;

const More = styled.span`
  display: inline-block;
  margin-top: 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.color.accentText};
`;

export default function ServiceCards() {
  return (
    <Section>
      <SectionInner>
        <SectionHeading
          label={HOME_SERVICES_SECTION.label}
          title={HOME_SERVICES_SECTION.title}
          description={HOME_SERVICES_SECTION.description}
        />
        <Grid>
          {SERVICES.map((service) => (
            <CardLink key={service.id} href={`/services#${service.id}`}>
              <Name>{service.name}</Name>
              <Tagline>{service.tagline}</Tagline>
              <More>{HOME_SERVICES_SECTION.cardCta}</More>
            </CardLink>
          ))}
        </Grid>
      </SectionInner>
    </Section>
  );
}
