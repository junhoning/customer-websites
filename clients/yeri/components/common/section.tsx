"use client";

import styled, { css } from "styled-components";

/* 섹션 골격 — 배경 변형 + 콘텐츠 폭 + 수직 여백 + 섹션 헤딩 */

const backgrounds = {
  default: css``,
  surface: css`
    background: ${({ theme }) => theme.color.surface};
    border-top: 1px solid ${({ theme }) => theme.color.line};
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
  `,
  dark: css`
    background: ${({ theme }) => theme.color.primaryStrong};
    color: ${({ theme }) => theme.color.onDark};
  `,
} as const;

export type SectionBg = keyof typeof backgrounds;

export const Section = styled.section<{ $bg?: SectionBg }>`
  ${({ $bg = "default" }) => backgrounds[$bg]}
`;

export const SectionInner = styled.div<{ $narrow?: boolean }>`
  max-width: ${({ theme, $narrow }) =>
    $narrow ? theme.layout.narrow : theme.layout.content};
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.sectionY} ${({ theme }) => theme.layout.gutter};
`;

/* ---------- 섹션 헤딩 (라벨 + 제목 + 설명) ---------- */

const HeadingWrap = styled.div<{ $center?: boolean }>`
  margin-bottom: 3rem;
  ${({ $center }) => $center && "text-align: center;"}
`;

const Label = styled.p<{ $onDark?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme, $onDark }) =>
    $onDark ? theme.color.accent : theme.color.accentText};
`;

const Title = styled.h2<{ $onDark?: boolean }>`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 700;
  color: ${({ theme, $onDark }) =>
    $onDark ? theme.color.onDark : theme.color.primaryStrong};
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.color.muted};
`;

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  onDark?: boolean;
  center?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  onDark,
  center,
}: SectionHeadingProps) {
  return (
    <HeadingWrap $center={center}>
      {label && <Label $onDark={onDark}>{label}</Label>}
      <Title $onDark={onDark}>{title}</Title>
      {description && <Description>{description}</Description>}
    </HeadingWrap>
  );
}
