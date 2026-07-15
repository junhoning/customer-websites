"use client";

import styled, { css } from "styled-components";

/* 폼 필드의 모양 — 라벨+필수표시+에러 표시 래퍼와 인풋 공통 스타일 */

const LabelRow = styled.label`
  display: block;
  margin-bottom: 0.375rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primaryStrong};

  span {
    margin-left: 0.125rem;
    color: ${({ theme }) => theme.color.accentText};
  }
`;

const ErrorText = styled.p`
  margin-top: 0.375rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.danger};
`;

const controlBase = css<{ $error?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${({ theme, $error }) => ($error ? theme.color.dangerBorder : theme.color.line)};
  border-radius: ${({ theme }) => theme.radius.field};
  background: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.primaryStrong};
  transition: border-color 0.15s;

  &::placeholder {
    color: color-mix(in srgb, ${({ theme }) => theme.color.muted} 60%, transparent);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primaryHover};
  }
`;

export const TextInput = styled.input<{ $error?: boolean }>`
  ${controlBase}
`;

export const TextArea = styled.textarea<{ $error?: boolean }>`
  ${controlBase}
  min-height: 8rem;
  resize: vertical;
`;

export const Select = styled.select<{ $error?: boolean }>`
  ${controlBase}
`;

interface FieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export default function Field({ label, htmlFor, required, error, children }: FieldProps) {
  return (
    <div>
      <LabelRow htmlFor={htmlFor}>
        {label}
        {required && <span aria-hidden>*</span>}
      </LabelRow>
      {children}
      {error && <ErrorText role="alert">{error}</ErrorText>}
    </div>
  );
}
