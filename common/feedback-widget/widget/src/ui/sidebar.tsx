/* 우측 사이드바 — 스레드 목록·점프·내보내기. 완료 스레드는 하단 그룹으로 접힌다 */
import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  ClosePanelIcon,
  DetailPanelSidebar,
  IconButton,
  TextButton,
} from "@ingradient/ui";
import { jump, requestJump } from "../anchor";
import { download, copyToClipboard } from "../export";
import type { Store } from "../store";
import type { CommentThread } from "../types";
import { ThreadCard } from "./thread-card";

const SIDEBAR_W = 320;

const Tab = styled.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 8px;
  border: none;
  border-radius: var(--ig-radius-sm) 0 0 var(--ig-radius-sm);
  background: var(--ig-color-accent-strong);
  color: var(--ig-color-on-accent);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  writing-mode: vertical-rl;
  cursor: pointer;
  box-shadow: var(--ig-shadow-raised);
`;

const Panel = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${SIDEBAR_W}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${(p) => (p.$open ? "0" : "100%")});
  transition: transform 0.2s;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`;

const Empty = styled.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`;

const ExportRow = styled.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;

export function Sidebar({
  store,
  open,
  onOpenChange,
  onOpenThread,
}: {
  store: Store;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenThread: (id: string) => void;
}) {
  const [copied, setCopied] = useState<string | null>(null);
  const [showResolved, setShowResolved] = useState(false);

  const list = store.list();
  const active = list.filter((t) => !t.resolved);
  const resolved = list.filter((t) => t.resolved);
  const numberOf = (t: CommentThread) => list.findIndex((x) => x.id === t.id) + 1;

  /* 카드 클릭 = 위치로 점프 후 대상 옆에 스레드 팝오버.
     다른 페이지 항목은 이동만 하고, 도착한 페이지에서 다시 누르면 열린다 */
  const select = (t: CommentThread) => {
    if (!jump(t.anchor)) {
      requestJump(t.anchor);
      return;
    }
    setTimeout(() => onOpenThread(t.id), 450); // 스크롤 안착 후
  };

  const copy = async () => {
    setCopied((await copyToClipboard(store.project, store.exportList())) ? "복사됨!" : "복사 실패");
    setTimeout(() => setCopied(null), 1500);
  };

  const cards = (threads: CommentThread[]) =>
    threads.map((t) => (
      <ThreadCard key={t.id} store={store} thread={t} number={numberOf(t)} onSelect={select} />
    ));

  return (
    <>
      <Tab className="fbw-sidetab" type="button" onClick={() => onOpenChange(!open)}>
        코멘트 {list.length}
      </Tab>
      <Panel $open={open} className="fbw-sidebar">
        <DetailPanelSidebar
          headerSlot={
            <Head>
              <span>코멘트 목록 ({list.length})</span>
              <IconButton variant="ghost" size="sm" aria-label="닫기" onClick={() => onOpenChange(false)}>
                <ClosePanelIcon size={16} />
              </IconButton>
            </Head>
          }
          bodySectionTitle="진행 중"
          bodySlot={
            active.length === 0 ? (
              <Empty>
                아직 코멘트가 없습니다.
                <br />
                페이지 요소에 우클릭(모바일: 길게 누르기)해 보세요.
              </Empty>
            ) : (
              cards(active)
            )
          }
          footerSlots={[
            resolved.length > 0 && (
              <>
                <TextButton tone="muted" onClick={() => setShowResolved((v) => !v)}>
                  완료됨 {resolved.length} {showResolved ? "접기" : "펼치기"}
                </TextButton>
                {showResolved && cards(resolved)}
              </>
            ),
            <ExportRow>
              <Button variant="secondary" size="sm" onClick={copy}>
                {copied ?? "복사"}
              </Button>
              <Button
                variant="solid"
                size="sm"
                onClick={() => download(store.project, store.exportList())}
              >
                JSON 내려받기
              </Button>
            </ExportRow>,
          ]}
        />
      </Panel>
    </>
  );
}
