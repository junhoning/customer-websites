#!/usr/bin/env bash
# Before 서버 — 과거 커밋을 git worktree로 꺼내 비교용 dev 서버를 띄운다 (작업자용)
# 사용법: common/feedback-widget/tools/compare-serve.sh clients/<고객> <커밋해시> [포트=3001]
# 종료:  Ctrl+C → worktree 자동 정리
set -euo pipefail

CLIENT_DIR=${1:?사용법: compare-serve.sh clients/<고객> <커밋해시> [포트]}
SHA=${2:?커밋해시가 필요합니다}
PORT=${3:-3001}

ROOT=$(git rev-parse --show-toplevel)
WT=$(mktemp -d)/fbw-before-$SHA

echo "▶ worktree 생성: $SHA → $WT"
git -C "$ROOT" worktree add --detach "$WT" "$SHA"
cleanup() {
  echo "▶ worktree 정리"
  git -C "$ROOT" worktree remove --force "$WT" 2>/dev/null || true
}
trap cleanup EXIT

# .env.local은 gitignore라 worktree에 없다 — 위젯 활성화(NEXT_PUBLIC_FEEDBACK)에 필요
if [ -f "$ROOT/$CLIENT_DIR/.env.local" ]; then
  cp "$ROOT/$CLIENT_DIR/.env.local" "$WT/$CLIENT_DIR/.env.local"
else
  echo "⚠ $CLIENT_DIR/.env.local 없음 — Before 페이지에 위젯이 안 뜹니다 (동기 스크롤 불가)"
fi

# 옛 커밋의 widget.js에는 embed 모드가 없다 — 현재 번들로 덮어써야 점프 메시지를 받는다
cp "$ROOT/$CLIENT_DIR/public/widget.js" "$WT/$CLIENT_DIR/public/widget.js"

cd "$WT/$CLIENT_DIR"
echo "▶ npm install (과거 커밋의 의존성)"
npm install --no-audit --no-fund

echo "▶ Before 서버 시작: http://0.0.0.0:$PORT (버전 $SHA)"
NEXT_PUBLIC_GIT_SHA=$SHA npx next dev -H 0.0.0.0 -p "$PORT"
