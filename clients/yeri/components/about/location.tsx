"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { LOCATION_SECTION } from "@/content/profile";
import { SITE } from "@/config/site";

/* 오시는 길 — 연락처 정보 리스트 + 지도 플레이스홀더 */

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoList = styled.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  dt {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 700;
    color: ${({ theme }) => theme.color.accentText};
  }

  dd {
    margin: 0.25rem 0 0;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.color.foreground};
  }

  a:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const MapBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 16rem;
  border: 1px dashed ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.muted};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const INFO_ROWS = [
  { term: "주소", value: SITE.address },
  { term: "전화", value: SITE.phone, href: SITE.phoneHref },
  { term: "이메일", value: SITE.email },
  { term: "상담 시간", value: SITE.hours },
] as const;

export default function Location() {
  return (
    <Section>
      <SectionInner>
        <SectionHeading title={LOCATION_SECTION.title} />
        <Grid>
          <InfoList>
            {INFO_ROWS.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd>
                  {"href" in row ? <a href={row.href}>{row.value}</a> : row.value}
                </dd>
              </div>
            ))}
          </InfoList>
          <MapBox>{LOCATION_SECTION.mapPlaceholder}</MapBox>
        </Grid>
      </SectionInner>
    </Section>
  );
}
