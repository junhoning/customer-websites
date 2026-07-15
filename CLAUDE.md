# 저장소 구조

- 이 저장소는 여러 고객 웹사이트를 모아 관리한다: 고객 프로젝트는 `clients/<이름>/`, 공통 도구는 `common/`
- 고객 사이트 작업 시 해당 고객 폴더(`clients/<이름>/`) 안에서만 수정한다. 그 폴더의 CLAUDE.md/AGENTS.md를 따른다
- 두 고객 이상에서 재사용할 것만 `common/`에 둔다. 고객 폴더끼리 서로 참조하지 않는다
- npm 명령은 반드시 고객 폴더 안에서 실행한다 (저장소 루트에는 package.json이 없다)
- 피드백 엑셀 재생성: `python3 common/tools/make_feedback_xlsx.py clients/<이름>` (데이터: `clients/<이름>/feedback/feedback_data.py`)
