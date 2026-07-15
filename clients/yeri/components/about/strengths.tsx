"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner } from "@/components/common/section";
import { Card } from "@/components/common/card";
import { STRENGTHS } from "@/content/profile";

/* 강점 3카드 */

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const Description = styled.p`
  margin-top: 0.625rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};
`;

export default function Strengths() {
  return (
    <Section $bg="surface">
      <SectionInner>
        <Grid>
          {STRENGTHS.map((item) => (
            <Card key={item.title}>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </Grid>
      </SectionInner>
    </Section>
  );
}
