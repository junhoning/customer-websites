#!/usr/bin/env bash
# 토큰 강제 검사 — app/, components/ 안의 하드코딩을 탐지한다. 발견 시 exit 1
# 값의 정의 지점(styles/theme.ts, styles/media.ts, config/, content/, app/fonts.ts)은 검사 대상이 아니다.
set -u
cd "$(dirname "$0")/.."
FAIL=0

TARGETS=(app components)
INCLUDE=(--include='*.tsx' --include='*.ts')

# 1) hex / rgb 색상 리터럴
if grep -rEn '#[0-9a-fA-F]{3,8}\b|rgba?\(' "${TARGETS[@]}" "${INCLUDE[@]}" | grep -v 'app/fonts.ts'; then
  echo "❌ 색상 리터럴 발견 — styles/theme.ts에 semantic 토큰으로 정의하세요"
  FAIL=1
fi

# 2) 인라인 style 색상
if grep -rEn 'style=\{\{[^}]*(color|background)' "${TARGETS[@]}" "${INCLUDE[@]}"; then
  echo "❌ 인라인 스타일 색상 발견 — styled-components + theme 토큰을 쓰세요"
  FAIL=1
fi

# 3) 폰트명 문자열 리터럴 — font-family에 직접 쓴 경우만 탐지 (정의 지점인 app/fonts.ts 제외)
#    (theme.font 토큰을 참조하는 font-family, 화면 문구 속 폰트 언급은 허용)
if grep -rEn "[\"'\`][^\"'\`]*(Nanum Myeongjo|Pretendard)" "${TARGETS[@]}" "${INCLUDE[@]}" | grep -v 'app/fonts.ts'; then
  echo "❌ 폰트명 하드코딩 — theme.font를 쓰세요"
  FAIL=1
fi
if grep -rEn 'font-family:' "${TARGETS[@]}" "${INCLUDE[@]}" | grep -v 'theme.font'; then
  echo "❌ font-family에 토큰 미사용 — theme.font를 쓰세요"
  FAIL=1
fi

# 4) 사이트 정보 리터럴 (전화번호, 예시 이메일, 주소)
if grep -rEn '0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}|@example\.com|서초구' "${TARGETS[@]}" "${INCLUDE[@]}"; then
  echo "❌ 연락처/주소 리터럴 발견 — config/site.ts에서 import 하세요"
  FAIL=1
fi

# 5) @media 직접 작성 (styles/media.ts의 media 토큰만 허용)
if grep -rEn '@media' "${TARGETS[@]}" "${INCLUDE[@]}"; then
  echo "❌ @media 직접 작성 — styles/media.ts의 media 토큰을 쓰세요"
  FAIL=1
fi

if [ "$FAIL" -eq 0 ]; then
  echo "✅ 토큰 검사 통과 — 하드코딩 없음"
fi
exit $FAIL
