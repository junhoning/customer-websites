"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { media } from "@/styles/media";
import { NAV_ITEMS, CTA_LINK, HEADER_EXTRAS } from "@/content/nav";
import { SITE } from "@/config/site";
import MobileMenu from "@/components/layout/mobile-menu";
import LangMenu from "@/components/layout/lang-menu";
import { ButtonLink } from "@/components/common/button";

/* 스티키 헤더의 레이아웃 — 모바일 메뉴의 상태는 MobileMenu가 소유 */

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.z.header};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  background: color-mix(in srgb, ${({ theme }) => theme.color.background} 90%, transparent);
  backdrop-filter: blur(8px);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: ${({ theme }) => theme.layout.headerH};
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.gutter};
`;

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: ${({ theme }) => theme.font.heading};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 800;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.primaryStrong};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Nav = styled.nav`
  display: none;

  ${media.md} {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ theme, $active }) =>
    $active ? theme.color.primary : theme.color.foreground};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const DesktopCta = styled(ButtonLink)`
  display: none;

  ${media.md} {
    display: inline-flex;
  }
`;

/* LinkedIn·언어 전환 (피드백 #2) — 주소 확정 전까지 목업 링크 */
const Extras = styled.div`
  display: none;

  ${media.md} {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }
`;

const ExtraLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.75rem;
  height: 1.75rem;
  padding: 0 0.375rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.color.muted};

  &:hover {
    border-color: ${({ theme }) => theme.color.primaryHover};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default function Header() {
  const pathname = usePathname();

  return (
    <Bar>
      <Inner>
        <LogoLink href="/">
          <LogoMark aria-hidden>{SITE.name.charAt(0)}</LogoMark>
          {SITE.name}
        </LogoLink>

        <Nav aria-label="주 메뉴">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} $active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <Extras>
          <ExtraLink
            href={HEADER_EXTRAS.linkedin.href}
            aria-label={HEADER_EXTRAS.linkedin.aria}
            title={HEADER_EXTRAS.pendingTitle}
          >
            {HEADER_EXTRAS.linkedin.label}
          </ExtraLink>
          <LangMenu />
        </Extras>

        <DesktopCta href={CTA_LINK.href} $variant="primary">
          {CTA_LINK.label}
        </DesktopCta>

        <MobileMenu />
      </Inner>
    </Bar>
  );
}
