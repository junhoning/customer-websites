"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner } from "@/components/common/section";
import { PROFILE } from "@/content/profile";
import { SITE } from "@/config/site";

/* 대표 프로필 — 사진(플레이스홀더) + 소개 + 경력 불릿 */

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  ${media.md} {
    grid-template-columns: 2fr 3fr;
    align-items: center;
  }
`;

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.color.primaryTint};
  color: ${({ theme }) => theme.color.muted};
  font-size: ${({ theme }) => theme.fontSize.sm};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RepName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.color.accentText};
`;

const RepNameEn = styled.p`
  margin-top: 0.125rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.muted};
`;

const Title = styled.h2`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
`;

const Description = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.muted};
`;

const CareerList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.foreground};

  li::before {
    content: "·";
    margin-right: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.accentText};
  }
`;

export default function ProfileSection() {
  return (
    <Section>
      <SectionInner>
        <Grid>
          <Photo>
            <img src={PROFILE.photoSrc} alt={PROFILE.photoAlt} />
          </Photo>
          <div>
            <RepName>{SITE.representative}</RepName>
            <RepNameEn>{SITE.representativeEn}</RepNameEn>
            <Title>{PROFILE.title}</Title>
            <Description>{PROFILE.description}</Description>
            <CareerList>
              {PROFILE.careers.map((career) => (
                <li key={career}>{career}</li>
              ))}
            </CareerList>
          </div>
        </Grid>
      </SectionInner>
    </Section>
  );
}
