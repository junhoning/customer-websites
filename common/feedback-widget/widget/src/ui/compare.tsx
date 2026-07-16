/* 전후 비교 오버레이 — Before(:3001)/After(현재) iframe을 나란히 띄우고
   양쪽 iframe 안의 embed 위젯에 postMessage로 앵커 점프를 요청한다 */
import styled from "styled-components";
import { ClosePanelIcon, IconButton } from "@ingradient/ui";
import { CONFIG } from "../config";
import type { Anchor } from "../types";
import { L } from "./labels";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-surface-panel);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;

const Side = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);

  code {
    font-weight: var(--ig-font-weight-regular);
    color: var(--ig-color-text-muted);
  }
`;

const Panes = styled.div`
  flex: 1;
  display: flex;
  gap: 2px;
  background: var(--ig-color-border-subtle);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pane = styled.iframe`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
`;

const embedUrl = (base: string, page: string) => `${base}${page}?fbw=embed`;

/* Before 서버(:3001)가 살아 있는지 — 꺼져 있으면 깨진 iframe 대신 안내를 띄운다.
   fetch가 없는 환경(테스트 등)에서는 확인을 생략하고 연다 */
export async function isBeforeServerUp(): Promise<boolean> {
  if (typeof fetch !== "function") return true;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1500);
    await fetch(`${CONFIG.compareBase}/`, { mode: "no-cors", signal: ctrl.signal });
    clearTimeout(timer);
    return true;
  } catch {
    return false;
  }
}

export function CompareOverlay({
  beforeVersion,
  anchor,
  onClose,
}: {
  beforeVersion: string;
  anchor: Anchor;
  onClose: () => void;
}) {
  /* iframe 로드 완료 시 그 창의 embed 위젯에 점프 요청 (origin이 달라 메시지로만 가능) */
  const requestJump = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    e.currentTarget.contentWindow?.postMessage({ type: "fbw:jump", anchor }, "*");
  };

  return (
    <Overlay className="fbw-compare">
      <Header>
        <Side>
          {L.before} <code>{beforeVersion}</code>
        </Side>
        <Side>
          {L.after} <code>{CONFIG.version ?? L.current}</code>
        </Side>
        <IconButton variant="ghost" size="sm" aria-label={L.close} onClick={onClose}>
          <ClosePanelIcon size={16} />
        </IconButton>
      </Header>
      <Panes>
        <Pane
          className="fbw-compare-before"
          title={L.before}
          src={embedUrl(CONFIG.compareBase, anchor.page)}
          onLoad={requestJump}
        />
        <Pane
          className="fbw-compare-after"
          title={L.after}
          src={embedUrl(location.origin, anchor.page)}
          onLoad={requestJump}
        />
      </Panes>
    </Overlay>
  );
}
