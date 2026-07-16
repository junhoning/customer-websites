"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { Card } from "@/components/common/card";
import { EXPERTISE, EXPERTISE_SECTION } from "@/content/profile";

/* 전문분야 소개 (피드백 #15) — 사례 목록은 자료 수급 전 목업 */

const Grid = styled.div`
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AreaTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
  margin-bottom: 0.75rem;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.foreground};

  li::before {
    content: "·";
    margin-right: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.accentText};
  }
`;

const MockupNote = styled.p`
  margin-top: 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.muted};
`;

export default function Expertise() {
  return (
    <Section $bg="surface">
      <SectionInner>
        <SectionHeading label={EXPERTISE_SECTION.label} title={EXPERTISE_SECTION.title} />
        <Grid>
          {EXPERTISE.map((area) => (
            <Card key={area.title}>
              <AreaTitle>{area.title}</AreaTitle>
              <ItemList>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ItemList>
            </Card>
          ))}
        </Grid>
        <MockupNote>{EXPERTISE_SECTION.mockupNote}</MockupNote>
      </SectionInner>
    </Section>
  );
}
