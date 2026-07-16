/* 부트스트랩 — 설정 읽기, Shadow DOM 마운트, React 루트 조립만 담당 */
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import tokensCss from "@ingradient/ui/tokens.css";
import { CONFIG } from "./config";
import { Store } from "./store";
import { HOST_ID, consumePendingJump } from "./anchor";
import { App } from "./ui/app";

const Z_INDEX = 2147483000; // 고객사 어떤 요소보다 위

/* tokens.css는 :root 기준(다크 기본) — Shadow에선 :host로 바꾸고,
   라이트 블록이 파일 뒤에 있어 캐스케이드로 라이트 테마가 적용된다 */
function adaptTokens(css: string): string {
  return css
    .replaceAll(":root, :root[data-theme='dark']", ":host")
    .replaceAll(":root[data-theme='light']", ":host")
    .replaceAll(":root", ":host");
}

const baseCss = `
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host는 none — 위젯 UI는 여기서 되살린다. 오버레이(hover/select 박스)는 개별로 none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;

function mount() {
  if (document.getElementById(HOST_ID)) return; // 중복 주입 방지

  const host = document.createElement("div");
  host.id = HOST_ID;
  host.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:${Z_INDEX};`;

  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = adaptTokens(tokensCss) + baseCss;
  const scTarget = document.createElement("div"); // styled-components가 <style>을 꽂는 곳
  const rootEl = document.createElement("div");
  rootEl.className = "fbw-root";
  shadow.append(style, scTarget, rootEl);
  document.body.appendChild(host);

  const store = new Store(CONFIG.project);
  createRoot(rootEl).render(
    <StyleSheetManager target={scTarget}>
      <App store={store} />
    </StyleSheetManager>,
  );

  /* 기존 접수분(시드) 로드 — 실패해도 위젯 동작에는 영향 없음 */
  if (CONFIG.seedUrl && typeof fetch === "function") {
    fetch(CONFIG.seedUrl)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data?.threads)) store.seed(data.threads);
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
