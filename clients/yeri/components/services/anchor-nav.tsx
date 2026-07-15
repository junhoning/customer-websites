"use client";

import styled from "styled-components";
import { SERVICES } from "@/content/services";

/* 분야 앵커 탭 — #분야id로 페이지 내 이동 (스크롤 보정은 전역 scroll-padding이 담당) */

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 1.5rem ${({ theme }) => theme.layout.gutter} 0;
`;

const Pill = styled.a`
  padding: 0.5rem 1.125rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    border-color: ${({ theme }) => theme.color.primaryHover};
    background: ${({ theme }) => theme.color.primaryTint};
  }
`;

export default function AnchorNav() {
  return (
    <Nav aria-label="분야 바로가기">
      {SERVICES.map((service) => (
        <Pill key={service.id} href={`#${service.id}`}>
          {service.name}
        </Pill>
      ))}
    </Nav>
  );
}
