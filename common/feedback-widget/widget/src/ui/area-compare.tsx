/* 영역 전후 비교 (2-up) — 작성 순간의 스크린샷(Before)과 지금 모습(After)을
   나란히. 이미지를 클릭하면 크게 보고, ESC/바깥 클릭으로 닫는다 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ClosePanelIcon, IconButton, TextButton } from "@ingradient/ui";
import { L } from "./labels";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 55%, transparent);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  max-width: min(1200px, 94vw);
  max-height: 90vh;
  overflow: auto;
  padding: var(--ig-space-5);
  background: var(--ig-color-surface-panel);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-overlay);
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);

  span {
    margin-right: auto;
  }
`;

const Panes = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--ig-space-4);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Tag = styled.figcaption<{ $after?: boolean }>`
  display: inline-block;
  margin-bottom: var(--ig-space-2);
  padding: 2px var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: ${(p) =>
    p.$after ? "var(--ig-color-accent-strong)" : "var(--ig-color-surface-muted)"};
  color: ${(p) => (p.$after ? "var(--ig-color-on-accent)" : "var(--ig-color-text-muted)")};
`;

const Pane = styled.figure`
  flex: 1;
  min-width: 0;
  margin: 0;

  img {
    display: block;
    width: 100%;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-sm);
    cursor: zoom-in;
    transition: border-color 0.12s;
  }
  img:hover {
    border-color: var(--ig-color-accent);
  }
`;

const ZoomedImg = styled.img`
  display: block;
  max-width: 100%;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  cursor: zoom-out;
`;

const Missing = styled.div`
  padding: var(--ig-space-7);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  border: var(--ig-border-1px) dashed var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
`;

type Zoom = "before" | "after" | null;

export function AreaCompare({
  before,
  after,
  onClose,
}: {
  before: string; // 작성 순간의 스크린샷 (dataURL)
  after?: string; // 지금 모습 — 캡처 실패 시 없음
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState<Zoom>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setZoom((z) => {
        if (z) return null; // 확대 중이면 확대만 해제
        onClose();
        return z;
      });
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const zoomedSrc = zoom === "before" ? before : after;

  return (
    <Backdrop className="fbw-area-compare" onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Head>
          <span>
            {L.before} / {L.after}
          </span>
          {zoom && (
            <TextButton tone="muted" onClick={() => setZoom(null)}>
              {L.zoomBack}
            </TextButton>
          )}
          <IconButton variant="ghost" size="sm" aria-label={L.close} onClick={onClose}>
            <ClosePanelIcon size={16} />
          </IconButton>
        </Head>

        {zoom && zoomedSrc ? (
          <figure style={{ margin: 0 }}>
            <Tag $after={zoom === "after"}>{zoom === "after" ? L.after : L.before}</Tag>
            <ZoomedImg src={zoomedSrc} alt={zoom} onClick={() => setZoom(null)} />
          </figure>
        ) : (
          <Panes>
            <Pane>
              <Tag>{L.before}</Tag>
              <img
                className="fbw-shot-before"
                src={before}
                alt={L.before}
                title={L.zoomHint}
                onClick={() => setZoom("before")}
              />
            </Pane>
            <Pane>
              <Tag $after>{L.after}</Tag>
              {after ? (
                <img
                  className="fbw-shot-after"
                  src={after}
                  alt={L.after}
                  title={L.zoomHint}
                  onClick={() => setZoom("after")}
                />
              ) : (
                <Missing>{L.captureFailed}</Missing>
              )}
            </Pane>
          </Panes>
        )}
      </Card>
    </Backdrop>
  );
}
