"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { ButtonLink } from "@/components/common/button";
import { SITE } from "@/config/site";
import { HOME_HERO } from "@/content/home";
import { SERVICES } from "@/content/services";

/* 메인 히어로 — 그라디언트 배경, 분야 배지, 타이틀, CTA 버튼, "오" 워터마크 */

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.primaryDeep},
    ${({ theme }) => theme.color.primaryStrong}
  );
  color: ${({ theme }) => theme.color.onDark};
`;

const Inner = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  padding: 6rem ${({ theme }) => theme.layout.gutter};
`;

const Watermark = styled.span`
  position: absolute;
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 18rem;
  font-weight: 800;
  line-height: 1;
  color: color-mix(in srgb, ${({ theme }) => theme.color.onDark} 6%, transparent);
  pointer-events: none;
  user-select: none;
`;

const Badge = styled.p`
  display: inline-block;
  padding: 0.375rem 1rem;
  border: 1px solid color-mix(in srgb, ${({ theme }) => theme.color.onDark} 30%, transparent);
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.primaryTint};
`;

const Title = styled.h1`
  max-width: 42rem;
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSize.hero};
  }
`;

const Description = styled.p`
  max-width: 36rem;
  margin-top: 1.25rem;
  color: ${({ theme }) => theme.color.primaryTint};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.5rem;
`;

export default function Hero() {
  return (
    <Wrap>
      <Inner>
        <Watermark aria-hidden>{SITE.name.charAt(0)}</Watermark>
        <Badge>{SERVICES.map((s) => s.name).join(" · ")}</Badge>
        <Title>{SITE.slogan}</Title>
        <Description>{SITE.description}</Description>
        <Actions>
          <ButtonLink href={HOME_HERO.primaryHref} $variant="accent" $size="lg">
            {HOME_HERO.primaryLabel}
          </ButtonLink>
          <ButtonLink href={HOME_HERO.secondaryHref} $variant="outlineOnDark" $size="lg">
            {HOME_HERO.secondaryLabel}
          </ButtonLink>
        </Actions>
      </Inner>
    </Wrap>
  );
}
