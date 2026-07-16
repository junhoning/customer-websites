"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Globe } from "lucide-react";
import { HEADER_EXTRAS } from "@/content/nav";

/* 언어 선택 드롭다운 (피드백 #2) — 지구본 클릭 → 한국어/English/中文.
   연결 주소는 고객 답변(Q1) 대기 — 확정 시 nav.ts의 href만 바꾸면 된다 */

const Wrap = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: none;
  color: ${({ theme }) => theme.color.muted};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.primaryHover};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Menu = styled.ul`
  position: absolute;
  right: 0;
  top: calc(100% + 0.375rem);
  min-width: 7rem;
  margin: 0;
  padding: 0.25rem;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.field};
  background: ${({ theme }) => theme.color.background};
  box-shadow: 0 8px 20px color-mix(in srgb, ${({ theme }) => theme.color.primaryDeep} 15%, transparent);
`;

const Item = styled.a`
  display: block;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.radius.field};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.foreground};

  &:hover {
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default function LangMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        type="button"
        aria-label={HEADER_EXTRAS.languageAria}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe size={14} aria-hidden />
      </Trigger>
      {open && (
        <Menu>
          {HEADER_EXTRAS.languages.map((lang) => (
            <li key={lang.label}>
              <Item
                href={lang.href}
                title={HEADER_EXTRAS.pendingTitle}
                onClick={() => setOpen(false)}
              >
                {lang.label}
              </Item>
            </li>
          ))}
        </Menu>
      )}
    </Wrap>
  );
}
