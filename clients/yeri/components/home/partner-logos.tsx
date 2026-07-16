"use client";

import styled from "styled-components";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { PARTNERS, PARTNERS_SECTION } from "@/content/home";

/* 협력·관련 기관 (피드백 #13) — 로고 이미지 확보 전까지 기관명 칩으로 표시 */

const ChipRow = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const Chip = styled.li`
  padding: 0.625rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.color.muted};
`;

export default function PartnerLogos() {
  return (
    <Section $bg="surface">
      <SectionInner>
        <SectionHeading label={PARTNERS_SECTION.label} title={PARTNERS_SECTION.title} />
        <ChipRow>
          {PARTNERS.map((name) => (
            <Chip key={name}>{name}</Chip>
          ))}
        </ChipRow>
      </SectionInner>
    </Section>
  );
}
