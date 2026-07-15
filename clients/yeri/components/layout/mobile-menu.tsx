"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { media } from "@/styles/media";
import { NAV_ITEMS, CTA_LINK } from "@/content/nav";
import { ButtonLink } from "@/components/common/button";

/* 햄버거 버튼 + 드로어 — 열림/닫힘 상태는 이 파일에만 존재한다 */

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.primaryStrong};

  ${media.md} {
    display: none;
  }
`;

const Drawer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.layout.headerH};
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem ${({ theme }) => theme.layout.gutter} 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  background: ${({ theme }) => theme.color.background};

  ${media.md} {
    display: none;
  }
`;

const DrawerLink = styled(Link)`
  padding: 0.75rem 0.5rem;
  border-radius: ${({ theme }) => theme.radius.field};
  font-weight: 600;
  color: ${({ theme }) => theme.color.foreground};

  &:hover {
    background: ${({ theme }) => theme.color.primaryTint};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Toggle
        type="button"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
      </Toggle>

      {open && (
        <Drawer>
          {NAV_ITEMS.map((item) => (
            <DrawerLink key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </DrawerLink>
          ))}
          <ButtonLink href={CTA_LINK.href} $variant="primary" onClick={() => setOpen(false)}>
            {CTA_LINK.label}
          </ButtonLink>
        </Drawer>
      )}
    </>
  );
}
