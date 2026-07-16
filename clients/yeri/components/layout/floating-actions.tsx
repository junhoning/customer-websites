"use client";

import Link from "next/link";
import styled from "styled-components";
import { MessageCircle, PenLine } from "lucide-react";
import { media } from "@/styles/media";
import { SITE } from "@/config/site";
import { CTA_LINK } from "@/content/nav";

/* 빠른 연락 진입점 — 데스크톱: 우하단 플로팅 / 모바일: 하단 고정 3분할 바 */

const DesktopStack = styled.div`
  display: none;

  ${media.md} {
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    z-index: ${({ theme }) => theme.z.floating};
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const CircleLink = styled.a<{ $kakao?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme, $kakao }) =>
    $kakao ? theme.color.kakao : theme.color.primary};
  color: ${({ theme, $kakao }) =>
    $kakao ? theme.color.kakaoText : theme.color.onDark};
  box-shadow: 0 4px 12px color-mix(in srgb, ${({ theme }) => theme.color.primaryDeep} 25%, transparent);

  &:hover {
    background: ${({ theme, $kakao }) =>
      $kakao ? theme.color.kakao : theme.color.primaryHover};
  }
`;

const MobileBar = styled.nav`
  position: fixed;
  inset: auto 0 0 0;
  z-index: ${({ theme }) => theme.z.mobileBar};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: ${({ theme }) => theme.layout.mobileBarH};
  border-top: 1px solid ${({ theme }) => theme.color.line};
  background: ${({ theme }) => theme.color.background};

  ${media.md} {
    display: none;
  }
`;

const BarItem = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primaryStrong};

  & + & {
    border-left: 1px solid ${({ theme }) => theme.color.line};
  }
`;

/* 모바일에서 콘텐츠가 하단 바에 가리지 않도록 문서 흐름에 여백 확보 */
const Spacer = styled.div`
  height: ${({ theme }) => theme.layout.mobileBarH};

  ${media.md} {
    display: none;
  }
`;

export default function FloatingActions() {
  return (
    <>
      <Spacer aria-hidden />

      <DesktopStack>
        <CircleLink
          href={SITE.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 상담"
          $kakao
        >
          <MessageCircle size={22} aria-hidden />
        </CircleLink>
      </DesktopStack>

      <MobileBar aria-label="빠른 상담 메뉴">
        <BarItem href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden />
          카카오톡
        </BarItem>
        <BarItem href={CTA_LINK.href}>
          <PenLine size={18} aria-hidden />
          상담 신청
        </BarItem>
      </MobileBar>
    </>
  );
}
