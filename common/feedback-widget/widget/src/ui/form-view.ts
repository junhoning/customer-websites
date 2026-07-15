/* 폼의 렌더링·입력 검증 — 무엇을 채우고 저장 시 무엇을 할지는 form.ts(정책)가 정한다 */
import { T } from "../tokens";
import { TYPES, type FeedbackType, type Priority } from "../types";
import { clearSelectBox } from "./select-box";

export const css = `
.fbw-form {
  position: fixed; width: 300px; padding: 14px; pointer-events: auto;
  background: ${T.color.panel}; border: 1px solid ${T.color.line};
  border-radius: ${T.radius.panel}; box-shadow: ${T.shadow};
  display: flex; flex-direction: column; gap: 8px;
}
.fbw-form h4 { margin: 0; font-size: 14px; color: ${T.color.text}; }
.fbw-form .fbw-target {
  font-size: 11px; color: ${T.color.subtext}; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis;
}
.fbw-form textarea, .fbw-form select, .fbw-form input {
  width: 100%; padding: 8px 10px; font-size: 13px; font-family: inherit;
  border: 1px solid ${T.color.line}; border-radius: ${T.radius.field};
  background: ${T.color.panel}; color: ${T.color.text};
}
.fbw-form textarea { min-height: 70px; resize: vertical; }
.fbw-form textarea.fbw-error { border-color: ${T.color.danger}; }
.fbw-form .fbw-row { display: flex; gap: 8px; }
.fbw-form .fbw-actions { display: flex; gap: 8px; justify-content: flex-end; }
.fbw-btn {
  padding: 7px 14px; font-size: 13px; font-weight: 600; cursor: pointer;
  border: 1px solid ${T.color.line}; border-radius: ${T.radius.field};
  background: ${T.color.panel}; color: ${T.color.text};
}
.fbw-btn-primary { background: ${T.color.accent}; border-color: ${T.color.accent}; color: ${T.color.onDark}; }
`;

export interface FormValues {
  content: string;
  type: FeedbackType;
  priority: Priority;
  author: string;
}

export interface FormConfig {
  title: string;
  targetText: string;
  initial: FormValues;
  cancelLabel?: string; // 기본 "취소"
  position: (form: HTMLElement) => void;
  onSubmit: (values: FormValues) => void;
  /* 있으면 액션줄 맨 왼쪽에 삭제 버튼 — true를 돌려주면(확인 통과) 폼을 닫는다 */
  onDelete?: () => Promise<boolean>;
}

export function renderForm(root: HTMLElement, config: FormConfig) {
  root.querySelector(".fbw-form")?.remove(); // 한 번에 하나만

  const form = document.createElement("div");
  form.className = "fbw-form";
  form.innerHTML = `
    <h4></h4>
    <div class="fbw-target"></div>
    <textarea placeholder="요청 내용을 적어 주세요 (문구 수정은 바꿀 문장을 그대로)"></textarea>
    <div class="fbw-row">
      <select data-role="type">${TYPES.map((t) => `<option>${t}</option>`).join("")}</select>
      <select data-role="priority">
        <option value="A">A (꼭)</option>
        <option value="B">B (가능하면)</option>
        <option value="C">C (아이디어)</option>
      </select>
    </div>
    <input type="text" data-role="author" placeholder="작성자 이름 (선택)" />
    <div class="fbw-actions">
      <button type="button" class="fbw-btn" data-role="cancel">취소</button>
      <button type="button" class="fbw-btn fbw-btn-primary" data-role="save">저장</button>
    </div>
  `;
  form.querySelector("h4")!.textContent = config.title;
  form.querySelector<HTMLElement>(".fbw-target")!.textContent = `📍 ${config.targetText}`;

  const textarea = form.querySelector("textarea")!;
  const typeSel = form.querySelector<HTMLSelectElement>("[data-role=type]")!;
  const priSel = form.querySelector<HTMLSelectElement>("[data-role=priority]")!;
  const authorInput = form.querySelector<HTMLInputElement>("[data-role=author]")!;
  const cancelBtn = form.querySelector<HTMLButtonElement>("[data-role=cancel]")!;
  const saveBtn = form.querySelector<HTMLButtonElement>("[data-role=save]")!;
  textarea.value = config.initial.content;
  typeSel.value = config.initial.type;
  priSel.value = config.initial.priority;
  authorInput.value = config.initial.author;
  if (config.cancelLabel) cancelBtn.textContent = config.cancelLabel;

  const closeAll = () => {
    clearSelectBox();
    form.remove();
  };
  cancelBtn.addEventListener("click", closeAll);

  if (config.onDelete) {
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "fbw-btn fbw-btn-danger";
    delBtn.style.marginRight = "auto"; // 맨 왼쪽 정렬
    delBtn.textContent = "삭제";
    delBtn.addEventListener("click", async () => {
      if (await config.onDelete!()) closeAll();
    });
    form.querySelector(".fbw-actions")!.prepend(delBtn);
  }
  saveBtn.addEventListener("click", () => {
    const content = textarea.value.trim();
    if (!content) {
      textarea.classList.add("fbw-error");
      textarea.focus();
      return;
    }
    closeAll();
    config.onSubmit({
      content,
      type: typeSel.value as FeedbackType,
      priority: priSel.value as Priority,
      author: authorInput.value.trim(),
    });
  });

  root.appendChild(form);
  config.position(form);
  textarea.focus();
}
