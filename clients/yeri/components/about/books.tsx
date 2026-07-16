"use client";

import styled from "styled-components";
import { media } from "@/styles/media";
import { Section, SectionInner, SectionHeading } from "@/components/common/section";
import { BOOKS, BOOKS_SECTION } from "@/content/profile";

/* 대표 저서 (피드백 #16) — 표지는 수령분, 연결 주소 확정 시 카드가 링크가 된다 */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;

  ${media.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BookCard = styled.figure`
  margin: 0;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: ${({ theme }) => theme.radius.card};
    background: ${({ theme }) => theme.color.surface};
  }
`;

const BookTitle = styled.figcaption`
  margin-top: 0.75rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.color.foreground};
  word-break: keep-all;
`;

const PendingChip = styled.span`
  display: inline-block;
  margin-top: 0.375rem;
  padding: 0.125rem 0.625rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.accentTint};
  color: ${({ theme }) => theme.color.accentText};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export default function Books() {
  return (
    <Section>
      <SectionInner>
        <SectionHeading label={BOOKS_SECTION.label} title={BOOKS_SECTION.title} />
        <Grid>
          {BOOKS.map((book) => (
            <BookCard key={book.title}>
              <img src={book.cover} alt={`${book.title} 표지`} />
              <BookTitle>{book.title}</BookTitle>
              {!book.href && <PendingChip>{BOOKS_SECTION.pendingNote}</PendingChip>}
            </BookCard>
          ))}
        </Grid>
      </SectionInner>
    </Section>
  );
}
