/* 항목 CRUD + localStorage 영속화 — UI를 모른다 (단방향: UI가 store를 구독) */
import type { FeedbackItem } from "./types";

const AUTHOR_KEY = "fbw:author";

type ItemPatch = Partial<Pick<FeedbackItem, "content" | "type" | "priority" | "author">>;
/* 시드에는 수정 외에 숨김(삭제)도 override로 영속화한다 */
type OverridePatch = ItemPatch & { hidden?: boolean };

export class Store {
  private items: FeedbackItem[] = [];
  private seedItems: FeedbackItem[] = []; // 시드 파일이 원본, 수정·숨김은 overrides로 영속화
  private overrides: Record<string, OverridePatch> = {};
  private listeners = new Set<() => void>();
  private _enabled = false;

  constructor(readonly project: string) {
    try {
      this.items = JSON.parse(localStorage.getItem(this.itemsKey) ?? "[]");
      this.overrides = JSON.parse(localStorage.getItem(this.overridesKey) ?? "{}");
    } catch {
      this.items = [];
      this.overrides = {};
    }
    this._enabled = sessionStorage.getItem(this.modeKey) === "1";
  }

  private get itemsKey() {
    return `fbw:${this.project}`;
  }

  private get overridesKey() {
    return `fbw:overrides:${this.project}`;
  }

  private get modeKey() {
    return `fbw:mode:${this.project}`;
  }

  get enabled() {
    return this._enabled;
  }

  setEnabled(on: boolean) {
    this._enabled = on;
    sessionStorage.setItem(this.modeKey, on ? "1" : "0");
    this.notify();
  }

  /* 시드 먼저, 새 작성분 나중 — 번호가 엑셀 순서와 이어진다 */
  list(): readonly FeedbackItem[] {
    return [...this.seedItems, ...this.items];
  }

  /* 고객이 회신(내보내기)할 대상 — 시드는 고객이 수정한 것만 포함 */
  exportList(): readonly FeedbackItem[] {
    return [...this.seedItems.filter((i) => this.overrides[i.id]), ...this.items];
  }

  seed(items: FeedbackItem[]) {
    const localIds = new Set(this.items.map((i) => i.id));
    this.seedItems = items
      .filter((i) => !localIds.has(i.id) && !this.overrides[i.id]?.hidden)
      .map((i) => ({ ...i, ...this.overrides[i.id], origin: "seed" as const }));
    this.notify();
  }

  add(item: FeedbackItem) {
    this.items.push(item);
    this.persist();
  }

  remove(id: string) {
    if (this.seedItems.some((i) => i.id === id)) {
      // 시드는 파일이 원본이므로 숨김으로 영속화 (엑셀 기록은 유지)
      this.overrides[id] = { ...this.overrides[id], hidden: true };
      localStorage.setItem(this.overridesKey, JSON.stringify(this.overrides));
      this.seedItems = this.seedItems.filter((i) => i.id !== id);
      this.notify();
      return;
    }
    this.items = this.items.filter((i) => i.id !== id);
    this.persist();
  }

  /* 시드 수정은 override로 영속화 — 번호·위치는 유지되고 내보내기에 포함된다 */
  update(id: string, patch: ItemPatch) {
    if (this.seedItems.some((i) => i.id === id)) {
      this.overrides[id] = { ...this.overrides[id], ...patch };
      localStorage.setItem(this.overridesKey, JSON.stringify(this.overrides));
      this.seedItems = this.seedItems.map((i) => (i.id === id ? { ...i, ...patch } : i));
      this.notify();
      return;
    }
    this.items = this.items.map((i) => (i.id === id ? { ...i, ...patch } : i));
    this.persist();
  }

  get author(): string {
    return localStorage.getItem(AUTHOR_KEY) ?? "";
  }

  set author(v: string) {
    localStorage.setItem(AUTHOR_KEY, v);
  }

  subscribe(fn: () => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private persist() {
    localStorage.setItem(this.itemsKey, JSON.stringify(this.items));
    this.notify();
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }
}
