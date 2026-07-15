"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

/* 링크형/버튼형 버튼의 모양 — 콘텐츠는 children으로만 받는다 */

const variants = {
  /* 주 행동 (네이비) */
  primary: css`
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.onDark};

    &:hover {
      background: ${({ theme }) => theme.color.primaryHover};
    }
  `,
  /* 강조 행동 (골드) — 어두운 배경 위 CTA */
  accent: css`
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.primaryStrong};
    font-weight: 700;

    &:hover {
      background: ${({ theme }) => theme.color.accentHover};
    }
  `,
  /* 보조 행동 (밝은 배경 위 외곽선) */
  outline: css`
    border: 1px solid ${({ theme }) => theme.color.line};
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primary};

    &:hover {
      border-color: ${({ theme }) => theme.color.primaryHover};
    }
  `,
  /* 보조 행동 (어두운 배경 위 외곽선) */
  outlineOnDark: css`
    border: 1px solid ${({ theme }) => theme.color.onDark};
    background: transparent;
    color: ${({ theme }) => theme.color.onDark};

    &:hover {
      background: ${({ theme }) => theme.color.primary};
    }
  `,
} as const;

const sizes = {
  md: css`
    padding: 0.625rem 1.25rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
  `,
  lg: css`
    padding: 0.875rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  `,
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

interface ButtonStyleProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
}

const base = css<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.field};
  font-weight: 600;
  transition: background-color 0.15s, border-color 0.15s;
  ${({ $size = "md" }) => sizes[$size]}
  ${({ $variant = "primary" }) => variants[$variant]}
`;

export const ButtonLink = styled(Link)<ButtonStyleProps>`
  ${base}
`;

export const Button = styled.button<ButtonStyleProps>`
  border: none;
  ${base}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
