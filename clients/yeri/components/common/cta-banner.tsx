"use client";

import styled from "styled-components";
import { MessageCircle } from "lucide-react";
import { Section, SectionInner } from "@/components/common/section";
import { ButtonLink } from "@/components/common/button";
import { CTA_BANNER } from "@/content/cta";
import { SITE } from "@/config/site";

/* "상담이 필요하신가요" 공통 배너 — privacy 제외 전 페이지 하단에 배치 */

const Inner = styled(SectionInner)`
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.color.primaryTint};

  strong {
    color: ${({ theme }) => theme.color.accent};
    font-weight: 700;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export default function CtaBanner() {
  return (
    <Section $bg="dark">
      <Inner $narrow>
        <Title>{CTA_BANNER.title}</Title>
        <Description>
          {CTA_BANNER.descriptionBefore}
          <strong>{SITE.representative}</strong>
          {CTA_BANNER.descriptionAfter}
        </Description>
        <Actions>
          <ButtonLink href={CTA_BANNER.primaryHref} $variant="accent" $size="lg">
            {CTA_BANNER.primaryLabel}
          </ButtonLink>
          <ButtonLink
            href={SITE.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            $variant="outlineOnDark"
            $size="lg"
          >
            <MessageCircle size={18} aria-hidden />
            {CTA_BANNER.kakaoLabel}
          </ButtonLink>
        </Actions>
      </Inner>
    </Section>
  );
}
