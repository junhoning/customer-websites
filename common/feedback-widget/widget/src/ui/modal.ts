/* 확인 모달 — Promise<boolean>을 돌려주는 범용 조각 */
import { T } from "../tokens";

export const css = `
.fbw-modal-backdrop {
  position: fixed; inset: 0; pointer-events: auto;
  background: rgba(17, 24, 39, 0.45);
  display: flex; align-items: center; justify-content: center;
}
.fbw-modal {
  width: 300px; max-width: calc(100vw - 40px); padding: 18px;
  background: ${T.color.panel}; border-radius: ${T.radius.panel};
  box-shadow: ${T.shadow};
  display: flex; flex-direction: column; gap: 12px;
}
.fbw-modal h4 { margin: 0; font-size: 14px; color: ${T.color.text}; }
.fbw-modal p {
  margin: 0; font-size: 13px; color: ${T.color.subtext};
  word-break: keep-all; overflow: hidden; display: -webkit-box;
  -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}
.fbw-modal .fbw-actions { display: flex; gap: 8px; justify-content: flex-end; }
.fbw-btn-danger { background: ${T.color.danger}; border-color: ${T.color.danger}; color: ${T.color.onDark}; }
`;

interface ConfirmOptions {
  title: string;
  detail?: string;
  confirmLabel: string;
}

export function confirmModal(root: HTMLElement, opts: ConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    root.querySelector(".fbw-modal-backdrop")?.remove(); // 한 번에 하나만

    const backdrop = document.createElement("div");
    backdrop.className = "fbw-modal-backdrop";
    backdrop.innerHTML = `
      <div class="fbw-modal" role="alertdialog">
        <h4></h4>
        ${opts.detail ? "<p></p>" : ""}
        <div class="fbw-actions">
          <button type="button" class="fbw-btn" data-role="cancel">취소</button>
          <button type="button" class="fbw-btn fbw-btn-danger" data-role="confirm"></button>
        </div>
      </div>
    `;
    backdrop.querySelector("h4")!.textContent = opts.title;
    if (opts.detail) backdrop.querySelector("p")!.textContent = opts.detail;
    backdrop.querySelector("[data-role=confirm]")!.textContent = opts.confirmLabel;

    const close = (result: boolean) => {
      backdrop.remove();
      resolve(result);
    };
    backdrop.querySelector("[data-role=cancel]")!.addEventListener("click", () => close(false));
    backdrop.querySelector("[data-role=confirm]")!.addEventListener("click", () => close(true));
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close(false); // 바깥 클릭 = 취소
    });

    root.appendChild(backdrop);
    backdrop.querySelector<HTMLButtonElement>("[data-role=cancel]")!.focus();
  });
}
