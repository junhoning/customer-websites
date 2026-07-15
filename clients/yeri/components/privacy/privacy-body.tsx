"use client";

import styled from "styled-components";
import { Section, SectionInner } from "@/components/common/section";
import { PRIVACY_PAGE, PRIVACY_SECTIONS } from "@/content/privacy";

/* 개인정보처리방침 조항 렌더링 */

const Intro = styled.p`
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 2.5rem;
`;

const Clause = styled.section`
  & + & {
    margin-top: 2rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    color: ${({ theme }) => theme.color.primaryStrong};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.color.foreground};

    & + p {
      margin-top: 0.375rem;
    }
  }
`;

const Notice = styled.p`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.muted};
`;

export default function PrivacyBody() {
  return (
    <Section>
      <SectionInner $narrow>
        <Intro>{PRIVACY_PAGE.intro}</Intro>
        {PRIVACY_SECTIONS.map((section) => (
          <Clause key={section.title}>
            <h2>{section.title}</h2>
            {section.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Clause>
        ))}
        <Notice>{PRIVACY_PAGE.notice}</Notice>
      </SectionInner>
    </Section>
  );
}
