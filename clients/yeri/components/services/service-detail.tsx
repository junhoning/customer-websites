"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { ButtonLink } from "@/components/common/button";
import { SERVICE_COMMON, type Service } from "@/content/services";

/* 분야 상세 "한 개"의 렌더링 — 어떤 분야인지는 props로 받는다 */

const Block = styled.section`
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 3.5rem ${({ theme }) => theme.layout.gutter};

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.line};
  }
`;

const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const Description = styled.p`
  max-width: ${({ theme }) => theme.layout.narrow};
  margin-top: 0.875rem;
  color: ${({ theme }) => theme.color.muted};
`;

const Columns = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;

  ${media.md} {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const ColTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
  margin-bottom: 1rem;
`;

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const StepItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.foreground};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.color.primaryTint};
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 700;
  }
`;

const DocList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.foreground};

  li::before {
    content: "•";
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.color.accentText};
  }
`;

const Notice = styled.p`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};
`;

const Cta = styled(ButtonLink)`
  margin-top: 1.25rem;
`;

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <Block id={service.id}>
      <Name>{service.name}</Name>
      <Description>{service.description}</Description>

      <Columns>
        <div>
          <ColTitle>{SERVICE_COMMON.stepsTitle}</ColTitle>
          <StepList>
            {service.steps.map((step, i) => (
              <StepItem key={step}>
                <span aria-hidden>{i + 1}</span>
                {step}
              </StepItem>
            ))}
          </StepList>
        </div>
        <div>
          <ColTitle>{SERVICE_COMMON.documentsTitle}</ColTitle>
          <DocList>
            {service.documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </DocList>
        </div>
      </Columns>

      <Notice>{SERVICE_COMMON.costNotice}</Notice>
      <Cta href={SERVICE_COMMON.ctaHref} $variant="primary">
        {service.name} {SERVICE_COMMON.ctaSuffix}
      </Cta>
    </Block>
  );
}
