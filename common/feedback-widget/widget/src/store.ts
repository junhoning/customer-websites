/* 스레드 CRUD + localStorage 영속화 — UI를 모른다 (단방향: UI가 store를 구독)
   시드 override 계산은 seed-overrides.ts가 담당 */
import { uid, type Comment, type CommentThread } from "./types";
import { migrateV0 } from "./migrate";
import {
  applySeedOverrides,
  seedEditPatch,
  seedRemovePatch,
  type SeedOverride,
  type SeedOverrides,
} from "./seed-overrides";

const AUTHOR_KEY = "fbw:author";

export class Store {
  private threads: CommentThread[] = [];
  private rawSeeds: CommentThread[] = []; // 시드 파일 원본 (override 미적용)
  private seedThreads: CommentThread[] = []; // override 적용본 (화면 표시용)
  private overrides: SeedOverrides = {};
  private listeners = new Set<() => void>();
  private _enabled = false;

  constructor(readonly project: string) {
    migrateV0(project);
    try {
      this.threads = JSON.parse(localStorage.getItem(this.threadsKey) ?? "[]");
      this.overrides = JSON.parse(localStorage.getItem(this.overridesKey) ?? "{}");
    } catch {
      this.threads = [];
      this.overrides = {};
    }
    this._enabled = sessionStorage.getItem(this.modeKey) === "1";
  }

  private get threadsKey() {
    return `fbw:v2:${this.project}`;
  }
  private get overridesKey() {
    return `fbw:v2:overrides:${this.project}`;
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
  list(): readonly CommentThread[] {
    return [...this.seedThreads, ...this.threads];
  }
  find(id: string): CommentThread | undefined {
    return this.list().find((t) => t.id === id);
  }

  /* 고객이 회신(내보내기)할 대상 — 시드는 고객이 건드린 것(답글·완료·숨김 제외)만 */
  exportList(): readonly CommentThread[] {
    return [...this.seedThreads.filter((t) => this.overrides[t.id]), ...this.threads];
  }

  seed(items: CommentThread[]) {
    const localIds = new Set(this.threads.map((t) => t.id));
    this.rawSeeds = items.filter((t) => !localIds.has(t.id));
    this.refreshSeeds();
    this.notify();
  }

  private refreshSeeds() {
    this.seedThreads = applySeedOverrides(this.rawSeeds, this.overrides);
  }

  addThread(t: CommentThread) {
    this.threads.push(t);
    this.persist();
  }

  addComment(threadId: string, author: string, body: string, version?: string) {
    const comment: Comment = {
      id: uid(),
      author,
      body,
      createdAt: new Date().toISOString(),
      version,
    };
    if (this.isSeed(threadId)) {
      const ov = this.overrides[threadId] ?? {};
      this.overrideSeed(threadId, { addedComments: [...(ov.addedComments ?? []), comment] });
      return;
    }
    this.threads = this.threads.map((t) =>
      t.id === threadId ? { ...t, comments: [...t.comments, comment] } : t,
    );
    this.persist();
  }

  /* 코멘트 수정 — 시드는 override로, 새 작성분은 제자리에서 */
  updateComment(threadId: string, commentId: string, body: string) {
    if (this.isSeed(threadId)) {
      this.overrideSeed(threadId, seedEditPatch(this.overrides[threadId] ?? {}, commentId, body));
      return;
    }
    this.threads = this.threads.map((t) =>
      t.id === threadId
        ? { ...t, comments: t.comments.map((c) => (c.id === commentId ? { ...c, body } : c)) }
        : t,
    );
    this.persist();
  }

  /* 코멘트 삭제 — 마지막 코멘트를 지우면 스레드도 사라진다 */
  removeComment(threadId: string, commentId: string) {
    if (this.isSeed(threadId)) {
      this.overrideSeed(threadId, seedRemovePatch(this.overrides[threadId] ?? {}, commentId));
      return;
    }
    this.threads = this.threads
      .map((t) =>
        t.id === threadId ? { ...t, comments: t.comments.filter((c) => c.id !== commentId) } : t,
      )
      .filter((t) => t.comments.length > 0);
    this.persist();
  }

  setResolved(threadId: string, on: boolean) {
    if (this.isSeed(threadId)) {
      this.overrideSeed(threadId, { resolved: on });
      return;
    }
    this.threads = this.threads.map((t) => (t.id === threadId ? { ...t, resolved: on } : t));
    this.persist();
  }

  removeThread(id: string) {
    if (this.isSeed(id)) {
      // 시드는 파일이 원본이므로 숨김으로 영속화 (엑셀 기록은 유지)
      this.overrideSeed(id, { hidden: true });
      return;
    }
    this.threads = this.threads.filter((t) => t.id !== id);
    this.persist();
  }

  private isSeed(id: string) {
    return this.rawSeeds.some((t) => t.id === id);
  }

  private overrideSeed(id: string, patch: SeedOverride) {
    this.overrides[id] = { ...this.overrides[id], ...patch };
    localStorage.setItem(this.overridesKey, JSON.stringify(this.overrides));
    this.refreshSeeds();
    this.notify();
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
    localStorage.setItem(this.threadsKey, JSON.stringify(this.threads));
    this.notify();
  }
  private notify() {
    this.listeners.forEach((fn) => fn());
  }
}
