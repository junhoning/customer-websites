# -*- coding: utf-8 -*-
"""feedback_data.py의 접수 피드백을 위젯 시드 JSON(코멘트 스레드 v2)으로 내보낸다.
사용법: python3 common/feedback-widget/tools/export_seed_json.py clients/<고객폴더>
출력:   clients/<고객폴더>/public/feedback-seed.json (위젯이 부팅 시 fetch)

시드 변환 규칙 (기획서 §9 Q2): 유형·중요도는 버리고,
진행 상태 "완료"만 resolved: true로 가져온다.

같은 앵커(요소) = 한 스레드 (2026-07-16 결정): 같은 위치의 피드백들은
하나의 스레드에 코멘트로 합친다. 코멘트 본문은 순수 텍스트만 —
번호·참고 자료 접두어를 붙이지 않는다 (엑셀 번호 대조는 코멘트 id의
seed-NN이 담당). 스레드 id는 첫 항목의 번호를 따른다 — override(답글·숨김)
키가 안정적이어야 해서."""
import importlib.util
import json
import os
import sys
from datetime import datetime, timezone

# 엑셀 위치 라벨 → (페이지, CSS 셀렉터, 텍스트 스니펫) 매핑.
# 셀렉터가 없으면 스니펫 폴백으로, 스니펫도 없으면 페이지 상단으로 점프한다.
# 사이트 섹션이 바뀌면 이 표만 갱신하면 된다. (yeri 기준)
ANCHORS = {
    "홈-1": ("/", "header", "오예리 특허법률사무소"),
    "홈-2": ("/", "", "특허·상표 출원부터 분쟁 대응까지"),
    "홈-3": ("/", "", "누적 출원·등록"),
    "홈-4": ("/", "", "여섯 개 분야를 다룹니다"),
    "홈-5": ("/", "", "상담에서 등록까지"),
    "홈-6": ("/", "", "궁금한 점을 먼저 확인하세요"),
    "홈-7": ("/", "", "상담이 필요하신가요"),
    "홈-8": ("/", "footer", "바로가기"),
    "홈-9": ("/", "body", ""),
    "홈 (새 섹션)": ("/", "body", ""),
    "소개-1": ("/about", "", "사건을 직접 맡는 사무소"),
    "소개-2": ("/about", "", "기술과 브랜드를 함께 읽습니다"),
    "소개-3": ("/about", "", "권리범위를 넓게"),
    "소개-4": ("/about", "", "오시는 길"),
    "소개 (새 섹션)": ("/about", "body", ""),
    "서비스-1": ("/services", "", "서비스 안내"),
    "서비스-2": ("/services", 'nav[aria-label="분야 바로가기"]', ""),
    "서비스-3": ("/services", "#patent", ""),
    "서비스-4": ("/services", "#trademark", ""),
    "서비스-5": ("/services", "#design", ""),
    "서비스-6": ("/services", "#trial", ""),
    "서비스-7": ("/services", "#litigation", ""),
    "서비스-8": ("/services", "#overseas", ""),
    "서비스 전체": ("/services", "body", ""),
    "상담-1": ("/contact", "", "출원 여부가 고민되거나"),
    "상담-2": ("/contact", "", "상담 신청서"),
    "상담-3": ("/contact", "", "빠른 상담 채널"),
    "방침": ("/privacy", "body", ""),
    "사이트 전체": ("/", "body", ""),
    "기타": ("/", "body", ""),
}

RECEIVED_AT = "2026-07-15T00:00:00.000Z"  # 피드백 수령일
SCHEMA_VERSION = 2


def find_anchor(location: str):
    for prefix, anchor in ANCHORS.items():
        if location.startswith(prefix):
            return anchor
    return ANCHORS["기타"]


def to_comment(n: int, row: tuple) -> dict:
    # 본문은 순수 텍스트만 — 위치는 클릭/hover로 표시되고, 참고 자료는 엑셀에 있다
    return {
        "id": f"seed-{n:02d}-c1",
        "author": "고객 (기존 접수)",
        "body": row[2],
        "createdAt": RECEIVED_AT,
    }


def to_thread(members: list) -> dict:
    """members: [(번호, row), ...] — 같은 앵커의 피드백 묶음 (첫 항목이 대표)"""
    first_n, first_row = members[0]
    page, selector, snippet = find_anchor(first_row[0])
    return {
        "id": f"seed-{first_n:02d}",
        "createdAt": RECEIVED_AT,
        "anchor": {"page": page, "selector": selector, "textSnippet": snippet, "scrollY": 0},
        # 묶음 전체가 완료여야 스레드 완료 — 하나라도 남았으면 핀을 유지한다
        "resolved": all(row[5] == "완료" for _, row in members),
        "comments": [to_comment(n, row) for n, row in members],
        "meta": {"userAgent": "", "viewport": ""},
        "origin": "seed",
    }


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    client_dir = sys.argv[1]
    data_path = os.path.join(client_dir, "feedback", "feedback_data.py")
    out_path = os.path.join(client_dir, "public", "feedback-seed.json")
    if not os.path.isfile(data_path):
        sys.exit(f"feedback_data.py 없음: {data_path}")

    spec = importlib.util.spec_from_file_location("feedback_data", data_path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)

    # 같은 앵커끼리 묶는다 — 그룹 순서는 첫 등장 순서를 따른다
    groups: dict = {}
    for i, row in enumerate(mod.FEEDBACK_ITEMS, start=1):
        key = find_anchor(row[0])
        groups.setdefault(key, []).append((i, row))
    threads = [to_thread(members) for members in groups.values()]
    payload = {
        "project": os.path.basename(os.path.normpath(client_dir)),
        "schemaVersion": SCHEMA_VERSION,
        "exportedAt": datetime.now(timezone.utc).isoformat(),
        "threads": threads,
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print(f"시드 생성 완료: {out_path} ({len(threads)}건)")


if __name__ == "__main__":
    main()
