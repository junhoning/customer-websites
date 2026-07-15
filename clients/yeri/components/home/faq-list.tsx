"use client";

import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { FAQ_SECTION, FAQ } from "@/content/faq";

/* FAQ — 상태 없이 네이티브 <details>로 구현 */

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.details`
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.color.background};

  &[open] summary svg {
    transform: rotate(180deg);
  }
`;

const Question = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.125rem 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.primaryStrong};
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.muted};
    transition: transform 0.2s;
  }
`;

const Answer = styled.p`
  padding: 0 1.5rem 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};
`;

export default function FaqList() {
  return (
    <Section>
      <SectionInner $narrow>
        <SectionHeading label={FAQ_SECTION.label} title={FAQ_SECTION.title} center />
        <List>
          {FAQ.map((item) => (
            <Item key={item.question}>
              <Question>
                {item.question}
                <ChevronDown size={18} aria-hidden />
              </Question>
              <Answer>{item.answer}</Answer>
            </Item>
          ))}
        </List>
      </SectionInner>
    </Section>
  );
}
