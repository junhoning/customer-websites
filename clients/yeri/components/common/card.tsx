"use client";

import styled, { css } from "styled-components";

/* 카드 프레임의 모양 — 내용물은 children. 링크 카드 등은 cardFrame을 공유한다 */
export const cardFrame = css`
  display: block;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.color.background};
  padding: 1.75rem;
`;

export const Card = styled.div`
  ${cardFrame}
`;
