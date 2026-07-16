/* 코멘트의 첨부 이미지 목록 — 썸네일 그리드 + 클릭 시 라이트박스 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Attachment } from "../types";

const Grid = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: var(--ig-space-2);
  margin-top: var(--ig-space-2);
`;

const Thumb = styled.button`
  padding: 0;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  overflow: hidden;
  cursor: zoom-in;
  background: none;

  img {
    display: block;
    height: 72px;
    max-width: 140px;
    object-fit: cover;
  }
  &:hover {
    border-color: var(--ig-color-accent);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 65%, transparent);
  cursor: zoom-out;

  img {
    max-width: 92vw;
    max-height: 88vh;
    border-radius: var(--ig-radius-sm);
  }

  figcaption {
    position: fixed;
    bottom: var(--ig-space-5);
    left: 50%;
    transform: translateX(-50%);
    padding: 2px var(--ig-space-4);
    border-radius: var(--ig-radius-pill);
    background: color-mix(in srgb, #000 70%, transparent);
    color: #fff;
    font-size: var(--ig-font-size-2xs);
  }
`;

export function AttachmentList({ attachments }: { attachments: Attachment[] }) {
  const [open, setOpen] = useState<Attachment | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <Grid className="fbw-attachments">
        {attachments.map((a, i) => (
          <Thumb key={`${a.name}-${i}`} type="button" title={a.name} onClick={() => setOpen(a)}>
            <img src={a.dataUrl} alt={a.name} />
          </Thumb>
        ))}
      </Grid>
      {open && (
        <Backdrop onClick={() => setOpen(null)}>
          <figure style={{ margin: 0 }}>
            <img src={open.dataUrl} alt={open.name} />
            <figcaption>{open.name}</figcaption>
          </figure>
        </Backdrop>
      )}
    </>
  );
}
