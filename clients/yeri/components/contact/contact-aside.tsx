"use client";

import styled from "styled-components";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Card } from "@/components/common/card";
import { CONTACT_ASIDE } from "@/content/contact";
import { SITE } from "@/config/site";

/* 사이드바 — 빠른 상담 채널 + 상담 안내 (폼과 독립적으로 바뀐다) */

const Stack = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryStrong};
  margin-bottom: 1rem;
`;

const ChannelList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.sm};

  li {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: ${({ theme }) => theme.color.foreground};
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.accentText};
  }

  a:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.muted};

  strong {
    color: ${({ theme }) => theme.color.foreground};
    font-weight: 600;
  }
`;

export default function ContactAside() {
  return (
    <Stack>
      <Card>
        <CardTitle>{CONTACT_ASIDE.channelsTitle}</CardTitle>
        <ChannelList>
          <li>
            <Phone size={16} aria-hidden />
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </li>
          <li>
            <MessageCircle size={16} aria-hidden />
            <a href={SITE.kakaoUrl} target="_blank" rel="noopener noreferrer">
              {CONTACT_ASIDE.kakaoLabel}
            </a>
          </li>
          <li>
            <Mail size={16} aria-hidden />
            {SITE.email}
          </li>
        </ChannelList>
      </Card>

      <Card>
        <CardTitle>{CONTACT_ASIDE.infoTitle}</CardTitle>
        <InfoList>
          <li>
            <strong>{CONTACT_ASIDE.hoursLabel}</strong> · {SITE.hours}
          </li>
          <li>
            <strong>{CONTACT_ASIDE.addressLabel}</strong> · {SITE.address}
          </li>
          <li>{CONTACT_ASIDE.freeNotice}</li>
        </InfoList>
      </Card>
    </Stack>
  );
}
