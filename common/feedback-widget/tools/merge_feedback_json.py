# -*- coding: utf-8 -*-
"""위젯 내보내기 JSON(코멘트 스레드)을 고객 폴더의 feedback_data.py에 병합한다.
사용법: python3 common/feedback-widget/tools/merge_feedback_json.py <export.json> clients/<고객폴더>
병합 후: python3 common/tools/make_feedback_xlsx.py clients/<고객폴더> 로 엑셀 재생성

스레드 평탄화 규칙 (기획서 §4):
- 최초 코멘트 = 요청 내용, 이후 답글은 " ↳ 작성자: 본문" 이력으로 병기
- 유형·중요도는 빈 값 — 필요하면 작업자가 엑셀에서 수동 지정
- resolved → 진행 상태 "완료", 아니면 "대기"
"""
import json
import os
import re
import sys

# 위치 열은 섹션 이름을 자동으로 알 수 없으므로 '기타'로 넣고
# 페이지·셀렉터를 참고 자료에 남긴다 (작업자가 엑셀에서 보정)
LOCATION = "기타 (요청 내용에 설명)"


def flatten(thread: dict) -> str:
    comments = thread.get("comments", [])
    if not comments:
        return ""
    first = comments[0]
    created = first.get("createdAt", "")[:10]
    body = f"{first.get('body', '').strip()} (작성: {first.get('author', '고객')}, {created})"
    for reply in comments[1:]:
        body += f" ↳ {reply.get('author', '고객')}: {reply.get('body', '').strip()}"
    return body


def to_tuple(thread: dict) -> tuple:
    anchor = thread.get("anchor", {})
    meta = thread.get("meta", {})
    ref = (
        f"[위젯 {thread.get('id', '')[:8]}] {anchor.get('page', '?')}"
        f" · {anchor.get('selector', '?')}"
        f" · {meta.get('viewport', '')}"
    )
    status = "완료" if thread.get("resolved") else "대기"
    # 열 순서: 위치, 유형(빈 값), 내용, 참고, 중요도(빈 값), 진행 상태
    return (LOCATION, "", flatten(thread), ref, "", status)


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
    threads = export.get("threads", [])
    if not threads:
        sys.exit("JSON에 스레드가 없습니다. (v0 형식이면 items — 위젯을 새로 빌드했는지 확인)")

    src = open(data_path, encoding="utf-8").read()

    # 이미 병합된 위젯 id는 건너뛴다 (참고 자료의 "[위젯 xxxxxxxx]" 표식 기준)
    merged_ids = set(re.findall(r"\[위젯 ([0-9a-zA-Z-]{1,8})\]", src))
    fresh = [t for t in threads if t.get("id", "")[:8] not in merged_ids]
    skipped = len(threads) - len(fresh)
    if not fresh:
        sys.exit(f"새 스레드 없음 (이미 병합 {skipped}건)")

    # FEEDBACK_ITEMS 리스트의 닫는 대괄호 앞에 삽입
    marker = "FEEDBACK_ITEMS = ["
    start = src.index(marker)
    end = src.index("\n]", start)
    block = "".join(fmt(to_tuple(t)) for t in fresh)
    new_src = src[: end + 1] + block.rstrip("\n") + src[end + 1 :]

    open(data_path, "w", encoding="utf-8").write(new_src)
    print(f"병합 완료: 새 스레드 {len(fresh)}건, 중복 건너뜀 {skipped}건 → {data_path}")
    print(f"엑셀 재생성: python3 common/tools/make_feedback_xlsx.py {client_dir}")


if __name__ == "__main__":
    main()
