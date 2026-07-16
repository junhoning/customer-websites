# 코멘트 전환 기획서 — feedback-widget v0.5

> 작성일 2026-07-16. 기존 v0(기획서.md)의 "피드백 단건" 모델을 "코멘트 스레드" 모델로
> 전환하고, 위젯 UI를 자체 구현 대신 `@ingradient/ui`에서 100% 가져오도록 개편한다.
> **이 문서는 계획만 다룬다. 구현은 문서 확정 후 시작한다.**

## 1. 왜 바꾸는가

- 지금 모델은 "고객 → 작업자" 단방향이다. 실제 작업은 "반영했어요 → 확인했어요/조금만 더"
  왕복 대화이므로, 항목 하나가 **여러 사람이 답글을 다는 스레드**가 되어야 한다.
- 위젯 UI(폼·사이드바·모달·컨텍스트 메뉴)를 전부 직접 만들었는데, `@ingradient/ui`에
  같은 역할의 검증된 컴포넌트가 이미 있다. 직접 구현을 걷어내고 라이브러리로 치환한다.
  (전역 규칙 "UI는 @ingradient/ui를 사용한다"와도 일치)

## 2. 데이터 모델 변경

```ts
/* v0 */ FeedbackItem { id, anchor, type, priority, content, status, author, ... }

/* v0.5 */
CommentThread {
  id, createdAt, anchor,            // 위치 앵커는 그대로 (page/selector/textSnippet/scrollY)
  resolved: boolean,                // 완료 처리 여부 — 완료된 스레드는 핀 숨김/회색
  comments: Comment[],              // 최초 코멘트 = 기존 content
  origin?: "seed",
}
Comment { id, author, body, createdAt }
```

- **유형·중요도 필드는 없앤다** (2026-07-16 결정). ingradient-ui 코멘트처럼
  "누가 남겼는지 + 대화"만 남긴다. 분류가 필요하면 대화 내용으로 충분하다.
- 단, 완료 여부(`resolved`)만은 유지한다 — 핀 1개 = 스레드 1개 구조에서
  "처리 끝난 핀"을 걷어내는 최소한의 작업 관리 장치. 4단계 상태(대기/진행 중/…)는
  이것으로 대체·단순화한다.
- 마이그레이션: 기존 FeedbackItem → `comments` 1개짜리 스레드로 기계 변환.
  localStorage 키는 `fbw:v2:<project>`로 올리고, 부팅 시 구버전 키 발견하면 변환 후 이관.
- 시드 20건도 동일하게 "고객 최초 코멘트 1개짜리 스레드"가 된다 (export_seed_json.py 수정).

## 3. 아키텍처 전환 — vanilla TS → React

`@ingradient/ui`는 React 18 + styled-components 6 피어 의존이다. 따라서:

- 위젯을 **React 앱**으로 재작성한다. esbuild IIFE 번들 방식은 유지하되 react/react-dom/
  styled-components를 함께 번들한다.
- **Shadow DOM 격리는 유지한다.** `ReactDOM.createRoot(shadowRoot 내부 div)` +
  styled-components `StyleSheetManager target={shadowRoot}`로 스타일을 섀도 안에 가둔다.
- 토큰: 자체 `tokens.ts`를 버리고 `@ingradient/ui/tokens.css`(`--ig-*` 변수 931개)를
  섀도 루트에 `<style>`로 주입한다.
- **번들 예산 변경: 30KB → 450KB (실측 404KB, gzip 전송 ≈ 104KB).** React+styled-components
  동반 비용. 리뷰 모드에서만 로드되는 도구라 수용 가능. react로 확정 (근거는 §9 Q1, §10).
  ※ ingradient-ui가 서브패스당 단일 파일로 빌드돼 미사용 컴포넌트가 tree-shaking되지
  않는다 — 라이브러리 빌드를 컴포넌트별 분할로 바꾸면 감량 가능 (v1 과제).

## 4. 치환 지도 — 없앨 것 / 가져올 것

| 현재 (직접 구현) | 처리 | @ingradient/ui 대체 |
|---|---|---|
| `ui/form-view.ts`, `ui/form.ts` | 삭제 | `CommentItem`+`CommentInput`(스레드 팝오버), `TextField`(작성자 이름 최초 1회) |
| `ui/sidebar.ts` | 삭제 | `DetailPanelSidebar` + `CommentThread`/`CommentItem` + `Avatar`(작성자) |
| `ui/modal.ts` (confirmModal) | 삭제 | `ConfirmProvider`/`useConfirm` |
| `ui/capture.ts`의 메뉴 UI | 삭제 | `ContextMenuBackdrop`/`ContextMenuList`/`ContextMenuButton` |
| `ui/toggle.ts` | 삭제 | `Button`/`IconButton` |
| `ui/select-box.ts` (대상 표시 박스) | **로직 유지**, 스타일만 `--ig-*` 토큰화 | 없음 — DOM 요소 하이라이트는 라이브러리 범위 밖 (`AnnotationOverlay`는 이미지 좌표 전용이라 부적합) |
| `ui/pins.ts` | **로직 유지**, 핀 비주얼만 토큰화 | 없음 — 페이지 좌표 핀은 커스텀 유지 |
| `tokens.ts` | 삭제 | `tokens.css` 주입 |

**UI가 아닌 코어는 그대로 유지**: `anchor.ts`(capture/resolve/flash/점프),
`store.ts`(스레드 모델로 개편, 시드 override 정책 유지), `types.ts`, `index.ts` 부트 로직,
`export.ts`, 모드 게이트(`fbw:mode`), `.env` 연동, `merge_feedback_json.py`
(스레드 평탄화: 최초 코멘트 = 요청 내용, 답글은 " ↳ " 이력으로 병기.
유형·중요도 칸은 빈 값으로 두고 필요 시 작업자가 엑셀에서 수동 지정,
resolved는 진행 상태 "완료"로 매핑).

## 5. 새 UX (v0에서 달라지는 것만)

- 핀/카드 클릭 → 수정 폼 대신 **스레드 팝오버**: 코멘트 목록 + 하단 `CommentInput`
  (Ctrl+Enter 전송). 유형·중요도 같은 분류 입력은 없다 — 본문만 쓰면 끝.
- **같은 요소 = 같은 스레드** (2026-07-16 추가): 이미 활성 스레드가 있는 요소를
  다시 우클릭하면 새 스레드를 만들지 않고 그 스레드를 열어 답글을 달게 한다.
  Archive된 스레드는 종결된 대화 — 그 요소에는 새 스레드를 시작한다.
- 작성자: 최초 1회 이름 입력(`fbw:author` 유지), 이후 코멘트에 자동 표기. 로그인 없음.
- **첨부 파일** (2026-07-16 추가): 코멘트에 이미지 첨부 가능 (로고·사진·참고 자료).
  1200px 초과분은 자동 축소. 스크린샷과 달리 **회신 JSON에 포함**되어 작업자에게
  전달되고, 병합 시 `feedback/attachments/`에 파일로 풀린다 — "자료 보내주세요"가
  코멘트 첨부 한 번으로 끝난다.
- 삭제: 스레드 삭제(= v0 삭제와 동일, useConfirm 확인) + 내 코멘트 개별 삭제.
- 완료 처리: 스레드 팝오버 상단 체크 버튼으로 resolve 토글. 완료 스레드는
  사이드바 하단 "완료됨" 그룹으로 접히고 핀은 사라진다.

## 6. 패키지 조달

`@ingradient/ui`는 GitHub Packages(`npm.pkg.github.com`)용 publishConfig가 있으나
아직 로컬 저장소다. 단계적으로:

1. **지금**: `ingradient-ui` 저장소에서 `npm run build:package && npm pack` →
   생성된 tgz를 `common/feedback-widget/vendor/`에 커밋하고 `file:` 의존으로 설치.
   (모노레포를 clone한 어떤 환경에서도 재현 가능)
2. **나중**: GitHub Packages 배포 후 vendor tgz 제거, 레지스트리 의존으로 전환.

## 7. 다자 공유의 한계 (변함없음)

localStorage 기반이므로 **서로 다른 사람의 코멘트는 아직 서로 보이지 않는다.**
이번 전환은 그걸 위한 선행 작업(모델+UI)이고, 실제 다자 공유는 v1 Firestore 수집
서버가 붙어야 완성된다 (기존 기획서 §8). v1 때 store의 저장 계층만 갈아끼운다.

## 8. 단계 계획

1. vendor tgz 준비 + widget package.json에 react/react-dom/@ingradient/ui 추가
2. React 마운트 스캐폴드 (shadow root + StyleSheetManager + tokens.css 주입)
3. 스레드 데이터 모델 + store 개편 + v0 데이터 마이그레이션
4. UI 치환 (§4 지도 순서대로: 사이드바 → 스레드 팝오버 → 컨텍스트 메뉴 → 모달 → 토글)
5. 시드/엑셀 파이프라인 수정 (export_seed_json.py, merge_feedback_json.py)
6. smoke.mjs 재작성 (jsdom + React 렌더 대기 방식으로 전면 수정)
7. 번들을 clients/yeri/public/widget.js로 복사, 실사용 검증

## 9. 결정 사항 (2026-07-16 확정)

- **Q1. react vs preact** → **react 확정.** 이 위젯은 일회성 리뷰 도구가 아니라
  모든 고객 프로젝트의 소통 플랫폼으로 키운다(§10). 전후 비교 뷰어, 토큰 실시간
  편집 등 무거운 기능이 계속 얹히므로 호환성 리스크가 있는 preact로 110KB를
  아끼는 것은 장기적으로 손해다. ingradient-ui가 React 기준으로 진화하는 것과도 정렬.
- ~~Q2. 유형·중요도 필드 유지 여부~~ → **없애기로 결정.**
  완료 여부(`resolved`)만 남긴다. 시드 변환 시 기존 유형·중요도는 버리고,
  진행 상태 "완료"만 `resolved: true`로 가져온다.
- **Q3. 기존 v0 데이터** → **자동 마이그레이션 확정 + 원칙화.** 장기 프로젝트라
  스키마 변경은 앞으로도 반복된다(v2→v3→Firestore 이관…). 이번에 "저장 데이터에
  schemaVersion을 박고, 모든 스키마 변경은 마이그레이션 코드와 함께 나간다"를
  표준 패턴으로 확립한다. v0→v2가 그 첫 사례.

## 10. 장기 로드맵 (이번 결정의 배경)

이 위젯은 yeri 전용이 아니라 **외주 고객 전체와 소통하는 공용 플랫폼**이다.
아래는 구현 순서 미정이지만 아키텍처 결정 시 항상 전제한다:

1. **멀티 고객**: 새 고객 사이트마다 `data-project`만 바꿔 붙인다 (v0부터 지원 중)
2. **다자 코멘트 공유**: v1 Firestore — 고객·작업자가 서로의 코멘트를 실시간으로 본다
3. **적용 전후 시각 비교**: 코멘트(요청) ↔ 반영 결과를 before/after로 나란히 보여준다
4. **고객 셀프 테마 편집**: 사이트가 100% 디자인 토큰 기반인 점을 활용해, 위젯에서
   고객이 색·폰트·스타일 토큰을 직접 바꿔보고 그 결과를 즉시 미리보는 기능
   → 위젯이 점점 "에디터"에 가까워지므로 React 생태계(상태 관리, ingradient-ui
   확장)를 온전히 쓸 수 있어야 한다 = Q1에서 react를 확정한 이유
