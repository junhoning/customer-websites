"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { PROCESS_SECTION, PROCESS_STEPS } from "@/content/process";

/* 진행 절차 1~5 스텝 */

const Steps = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Step = styled.li`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  ${media.md} {
    flex-direction: column;
    text-align: center;
  }
`;

const Number = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onDark};
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 700;
`;

const StepTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

export default function ProcessSteps() {
  return (
    <Section $bg="surface">
      <SectionInner>
        <SectionHeading
          label={PROCESS_SECTION.label}
          title={PROCESS_SECTION.title}
          description={PROCESS_SECTION.description}
        />
        <Steps>
          {PROCESS_STEPS.map((title, i) => (
            <Step key={title}>
              <Number aria-hidden>{i + 1}</Number>
              <StepTitle>{title}</StepTitle>
            </Step>
          ))}
        </Steps>
      </SectionInner>
    </Section>
  );
}
