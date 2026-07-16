/* 영역 전후 비교 — 코멘트 작성 순간 저장한 스크린샷(Before)과 지금 모습(After)을
   팝업 하나에 나란히 보여준다. 서버 필요 없음 (BugHerd·Marker.io 방식) */
import styled from "styled-components";
import { ClosePanelIcon, IconButton } from "@ingradient/ui";
import { L } from "./labels";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 50%, transparent);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  max-width: min(1100px, 92vw);
  max-height: 88vh;
  overflow: auto;
  padding: var(--ig-space-5);
  background: var(--ig-color-surface-panel);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-overlay);
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);

  span {
    margin-right: auto;
  }
`;

const Panes = styled.div`
  display: flex;
  gap: var(--ig-space-4);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pane = styled.figure`
  flex: 1;
  min-width: 0;
  margin: 0;

  figcaption {
    margin-bottom: var(--ig-space-2);
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    color: var(--ig-color-text-muted);
    text-transform: uppercase;
  }

  img {
    display: block;
    width: 100%;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-sm);
  }
`;

const Missing = styled.div`
  padding: var(--ig-space-6);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`;

export function AreaCompare({
  before,
  after,
  onClose,
}: {
  before: string; // 작성 순간의 스크린샷 (dataURL)
  after?: string; // 지금 모습 — 캡처 실패 시 없음
  onClose: () => void;
}) {
  return (
    <Backdrop className="fbw-area-compare" onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Head>
          <span>
            {L.before} / {L.after}
          </span>
          <IconButton variant="ghost" size="sm" aria-label={L.close} onClick={onClose}>
            <ClosePanelIcon size={16} />
          </IconButton>
        </Head>
        <Panes>
          <Pane>
            <figcaption>{L.before}</figcaption>
            <img className="fbw-shot-before" src={before} alt={L.before} />
          </Pane>
          <Pane>
            <figcaption>{L.after}</figcaption>
            {after ? (
              <img className="fbw-shot-after" src={after} alt={L.after} />
            ) : (
              <Missing>{L.captureFailed}</Missing>
            )}
          </Pane>
        </Panes>
      </Card>
    </Backdrop>
  );
}
