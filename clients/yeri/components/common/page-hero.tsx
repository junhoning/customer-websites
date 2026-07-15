"use client";

import styled from "styled-components";
import { media } from "@/styles/media";

/* 서브페이지 상단 히어로 — 라벨 + h1 + 설명. 콘텐츠는 props로만 받는다 */

const Wrap = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  background: ${({ theme }) => theme.color.surface};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 3.5rem ${({ theme }) => theme.layout.gutter};

  ${media.md} {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }
`;

const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.color.accentText};
`;

const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const Description = styled.p`
  max-width: ${({ theme }) => theme.layout.narrow};
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.muted};
`;

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <Wrap>
      <Inner>
        {label && <Label>{label}</Label>}
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Inner>
    </Wrap>
  );
}
