# -*- coding: utf-8 -*-
"""위젯 내보내기 JSON을 고객 폴더의 feedback_data.py에 병합한다.
사용법: python3 common/feedback-widget/tools/merge_feedback_json.py <export.json> clients/<고객폴더>
병합 후: python3 common/tools/make_feedback_xlsx.py clients/<고객폴더> 로 엑셀 재생성"""
import json
import os
import re
import sys

TYPE_MAP = {
    "문구": "문구 (글자·문장)",
    "디자인": "디자인 (색·글꼴·간격)",
    "구조": "구조 (순서·추가·삭제)",
    "정보": "정보 (연락처·수치 등)",
    "기능": "기능 (동작 관련)",
    "오류": "오류 (깨짐·안 됨)",
}
PRI_MAP = {"A": "A (오픈 전 꼭)", "B": "B (가능하면)", "C": "C (아이디어)"}
STATUS_MAP = {"확인 필요": "확인 필요 (고객 답변 대기)"}  # 나머지는 동일

# 위치 열은 섹션 이름을 자동으로 알 수 없으므로 '기타'로 넣고
# 페이지·셀렉터를 참고 자료에 남긴다 (작업자가 엑셀에서 보정)
LOCATION = "기타 (요청 내용에 설명)"


def to_tuple(item: dict) -> tuple:
    anchor = item.get("anchor", {})
    meta = item.get("meta", {})
    ref = (
        f"[위젯 {item.get('id', '')[:8]}] {anchor.get('page', '?')}"
        f" · {anchor.get('selector', '?')}"
        f" · {meta.get('viewport', '')}"
    )
    content = item.get("content", "").strip()
    author = item.get("author", "고객")
    created = item.get("createdAt", "")[:10]
    body = f"{content} (작성: {author}, {created})"
    status = item.get("status", "대기")
    return (
        LOCATION,
        TYPE_MAP.get(item.get("type", "문구"), TYPE_MAP["문구"]),
        body,
        ref,
        PRI_MAP.get(item.get("priority", "B"), PRI_MAP["B"]),
        STATUS_MAP.get(status, status),
    )


def fmt(t: tuple) -> str:
    loc, typ, body, ref, pri, status = (s.replace('"', '\\"') for s in t)
    return (
        f'    ("{loc}", "{typ}",\n'
        f'     "{body}",\n'
        f'     "{ref}", "{pri}", "{status}"),\n'
    )


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    json_path, client_dir = sys.argv[1], sys.argv[2]
    data_path = os.path.join(client_dir, "feedback", "feedback_data.py")
    if not os.path.isfile(data_path):
        sys.exit(f"feedback_data.py 없음: {data_path}")

    export = json.load(open(json_path, encoding="utf-8"))
    items = export.get("items", [])
    if not items:
        sys.exit("JSON에 항목이 없습니다.")

    src = open(data_path, encoding="utf-8").read()

    # 이미 병합된 위젯 id는 건너뛴다 (참고 자료의 "[위젯 xxxxxxxx]" 표식 기준)
    merged_ids = set(re.findall(r"\[위젯 ([0-9a-zA-Z-]{1,8})\]", src))
    fresh = [i for i in items if i.get("id", "")[:8] not in merged_ids]
    skipped = len(items) - len(fresh)
    if not fresh:
        sys.exit(f"새 항목 없음 (이미 병합 {skipped}건)")

    # FEEDBACK_ITEMS 리스트의 닫는 대괄호 앞에 삽입
    marker = "FEEDBACK_ITEMS = ["
    start = src.index(marker)
    end = src.index("\n]", start)
    block = "".join(fmt(to_tuple(i)) for i in fresh)
    new_src = src[: end + 1] + block.rstrip("\n") + src[end + 1 :]

    open(data_path, "w", encoding="utf-8").write(new_src)
    print(f"병합 완료: 새 항목 {len(fresh)}건, 중복 건너뜀 {skipped}건 → {data_path}")
    print(f"엑셀 재생성: python3 common/tools/make_feedback_xlsx.py {client_dir}")


if __name__ == "__main__":
    main()
