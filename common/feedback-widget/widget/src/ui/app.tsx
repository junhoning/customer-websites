/* 위젯 루트 — 모드/팝오버/사이드바 상태를 쥐고 하위를 조립한다 */
import { useEffect, useState } from "react";
import { ConfirmProvider } from "@ingradient/ui";
import { capture, resolve } from "../anchor";
import type { Anchor } from "../types";
import type { Store } from "../store";
import { useStoreVersion } from "./hooks";
import { Capture } from "./capture";
import { SelectBox } from "./select-box";
import { Pins } from "./pins";
import { Composer } from "./composer";
import { ThreadView } from "./thread-view";
import { Sidebar } from "./sidebar";
import { Toggle } from "./toggle";

type OpenState =
  | { kind: "draft"; el: Element; anchor: Anchor; point: { x: number; y: number } }
  | { kind: "thread"; id: string };

export function App({ store }: { store: Store }) {
  useStoreVersion(store);
  const [open, setOpen] = useState<OpenState | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const enabled = store.enabled;

  useEffect(() => {
    if (!enabled) {
      setOpen(null);
      setSidebarOpen(false);
    }
  }, [enabled]);

  const openThread = open?.kind === "thread" ? store.find(open.id) : undefined;
  const openNumber = openThread
    ? store.list().findIndex((t) => t.id === openThread.id) + 1
    : 0;
  const threadEl =
    openThread && openThread.anchor.page === location.pathname
      ? resolve(openThread.anchor)
      : null;

  return (
    <ConfirmProvider>
      {enabled && (
        <Capture
          active={!open}
          onPick={(el, x, y) => {
            /* 같은 요소 = 같은 스레드 — 이미 대화가 열려 있는 요소면 새 스레드 대신
               그 스레드에 답글을 달게 한다 (Archive된 것은 종결 — 새 스레드 시작) */
            const existing = store
              .list()
              .find(
                (t) =>
                  !t.resolved && t.anchor.page === location.pathname && resolve(t.anchor) === el,
              );
            if (existing) {
              setOpen({ kind: "thread", id: existing.id });
              return;
            }
            setOpen({ kind: "draft", el, anchor: capture(el), point: { x, y } });
          }}
        />
      )}
      {enabled && <Pins store={store} onPinClick={(id) => setOpen({ kind: "thread", id })} />}

      {open?.kind === "draft" && <SelectBox el={open.el} />}
      {threadEl && <SelectBox el={threadEl} />}

      {open?.kind === "draft" && (
        <Composer
          store={store}
          el={open.el}
          anchor={open.anchor}
          point={open.point}
          onClose={() => setOpen(null)}
          onSaved={(t) => {
            setOpen({ kind: "thread", id: t.id });
            setSidebarOpen(true);
          }}
        />
      )}
      {openThread && (
        <ThreadView
          store={store}
          thread={openThread}
          number={openNumber}
          onClose={() => setOpen(null)}
        />
      )}

      {enabled && (
        <Sidebar
          store={store}
          open={sidebarOpen}
          onOpenChange={setSidebarOpen}
          onOpenThread={(id) => setOpen({ kind: "thread", id })}
        />
      )}
      <Toggle store={store} />
    </ConfirmProvider>
  );
}
