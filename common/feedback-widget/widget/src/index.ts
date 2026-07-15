/* 부트스트랩 — 설정 읽기, Shadow DOM 마운트, 모듈 조립만 담당 */
import { T } from "./tokens";
import { Store } from "./store";
import { HOST_ID, consumePendingJump } from "./anchor";
import { createToggle, css as toggleCss } from "./ui/toggle";
import { initCapture, css as captureCss } from "./ui/capture";
import { openForm, css as formCss } from "./ui/form";
import { initPins, css as pinsCss } from "./ui/pins";
import { initSidebar, css as sidebarCss } from "./ui/sidebar";
import { css as modalCss } from "./ui/modal";
import { css as selectBoxCss } from "./ui/select-box";

const baseCss = `
.fbw-root {
  font-family: ${T.font}; font-size: 14px; line-height: 1.5;
  color: ${T.color.text};
}
.fbw-root * { box-sizing: border-box; }
`;

/* currentScript는 스크립트 평가 시점에만 유효 — 모듈 스코프에서 즉시 읽는다 */
const SCRIPT =
  (document.currentScript as HTMLScriptElement | null) ??
  document.querySelector<HTMLScriptElement>("script[data-project]");
const PROJECT = SCRIPT?.dataset.project ?? "default";
const SEED_URL = SCRIPT?.dataset.seed; // 기존 접수 피드백 JSON (선택)

function mount() {
  if (document.getElementById(HOST_ID)) return; // 중복 주입 방지

  const host = document.createElement("div");
  host.id = HOST_ID;
  host.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:${T.z};`;

  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent =
    baseCss + toggleCss + captureCss + selectBoxCss + formCss + pinsCss + sidebarCss + modalCss;
  const root = document.createElement("div");
  root.className = "fbw-root";
  shadow.append(style, root);
  document.body.appendChild(host);

  const store = new Store(PROJECT);
  root.appendChild(createToggle(store));
  const sidebar = initSidebar(root, store);
  initPins(root, store, (id) => sidebar.focus(id));
  initCapture(root, host, store, (el, x, y) =>
    openForm(root, store, el, x, y, () => sidebar.open()),
  );

  /* 기존 접수 피드백(시드) 로드 — 실패해도 위젯 동작에는 영향 없음 */
  if (SEED_URL && typeof fetch === "function") {
    fetch(SEED_URL)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data?.items)) store.seed(data.items);
      })
      .catch(() => {});
  }

  consumePendingJump();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
