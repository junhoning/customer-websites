"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section } from "@/components/common/section";
import { STATS } from "@/content/stats";

/* 실적 수치 4칸 밴드 */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1rem;
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 3rem ${({ theme }) => theme.layout.gutter};

  ${media.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Item = styled.div`
  text-align: center;
`;

const Value = styled.p`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 800;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const Label = styled.p`
  margin-top: 0.375rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};
`;

export default function StatsBand() {
  return (
    <Section $bg="surface">
      <Grid>
        {STATS.map((stat) => (
          <Item key={stat.label}>
            <Value>{stat.value}</Value>
            <Label>{stat.label}</Label>
          </Item>
        ))}
      </Grid>
    </Section>
  );
}
