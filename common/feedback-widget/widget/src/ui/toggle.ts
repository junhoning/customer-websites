/* 플로팅 토글 버튼 — 피드백 모드 ON/OFF. 좌하단(고객사 플로팅 버튼과 반대편) */
import { T } from "../tokens";
import type { Store } from "../store";

export const css = `
.fbw-toggle {
  position: fixed; left: 16px; bottom: 16px;
  width: 52px; height: 52px; border: none; border-radius: ${T.radius.pill};
  background: ${T.color.panelDark}; color: ${T.color.onDark};
  font-size: 22px; cursor: pointer; pointer-events: auto;
  box-shadow: ${T.shadow}; transition: background 0.15s;
}
.fbw-toggle.fbw-on { background: ${T.color.accent}; }
.fbw-toggle-badge {
  position: absolute; top: -4px; right: -4px;
  min-width: 20px; height: 20px; padding: 0 5px;
  border-radius: ${T.radius.pill}; background: ${T.color.pin};
  color: ${T.color.text}; font-size: 11px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.fbw-toggle-label {
  position: fixed; left: 76px; bottom: 28px; padding: 4px 10px;
  border-radius: ${T.radius.field}; background: ${T.color.panelDark};
  color: ${T.color.onDark}; font-size: 12px; pointer-events: none;
  opacity: 0; transition: opacity 0.15s;
}
.fbw-toggle:hover + .fbw-toggle-label { opacity: 1; }
`;

export function createToggle(store: Store): HTMLElement {
  const wrap = document.createElement("div");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "fbw-toggle";
  const label = document.createElement("span");
  label.className = "fbw-toggle-label";

  const render = () => {
    btn.classList.toggle("fbw-on", store.enabled);
    btn.setAttribute("aria-label", store.enabled ? "피드백 모드 끄기" : "피드백 모드 켜기");
    label.textContent = store.enabled
      ? "피드백 모드 켜짐 — 우클릭(길게 누르기)으로 작성"
      : "피드백 모드 켜기";
    const count = store.list().length;
    btn.innerHTML = "💬";
    if (count > 0) {
      const badge = document.createElement("span");
      badge.className = "fbw-toggle-badge";
      badge.textContent = String(count);
      btn.appendChild(badge);
    }
  };

  btn.addEventListener("click", () => store.setEnabled(!store.enabled));
  store.subscribe(render);
  render();
  wrap.append(btn, label);
  return wrap;
}
