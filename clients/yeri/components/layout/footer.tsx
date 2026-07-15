"use client";

import Link from "next/link";
import styled from "styled-components";
import { media } from "@/styles/media";
import { NAV_ITEMS, PRIVACY_LINK } from "@/content/nav";
import { SITE } from "@/config/site";

/* 푸터 — 브랜드/바로가기/연락처 3열 + 하단 저작권 바 */

const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.color.line};
  background: ${({ theme }) => theme.color.surface};
`;

const Inner = styled.div`
  display: grid;
  gap: 2.5rem;
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 3.5rem ${({ theme }) => theme.layout.gutter};

  ${media.md} {
    grid-template-columns: 2fr 1fr 1.5fr;
  }
`;

const Brand = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 800;
    color: ${({ theme }) => theme.color.primaryStrong};
  }

  p {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.color.muted};
  }
`;

const ColTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
  margin-bottom: 0.875rem;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.color.muted};

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};
`;

const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.line};

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    max-width: ${({ theme }) => theme.layout.content};
    margin: 0 auto;
    padding: 1.25rem ${({ theme }) => theme.layout.gutter};
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.muted};
  }

  a:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Brand>
          <h3>{SITE.name}</h3>
          <p>{SITE.slogan}</p>
        </Brand>

        <div>
          <ColTitle>바로가기</ColTitle>
          <LinkList>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </LinkList>
        </div>

        <div>
          <ColTitle>연락처</ColTitle>
          <ContactList>
            <li>
              <a href={SITE.phoneHref}>T. {SITE.phone}</a>
            </li>
            <li>{SITE.email}</li>
            <li>{SITE.address}</li>
            <li>{SITE.hours}</li>
          </ContactList>
        </div>
      </Inner>

      <BottomBar>
        <div>
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.{" "}
            {SITE.disclaimer}
          </span>
          <Link href={PRIVACY_LINK.href}>{PRIVACY_LINK.label}</Link>
        </div>
      </BottomBar>
    </Wrap>
  );
}
