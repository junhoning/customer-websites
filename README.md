# Customer Websites

외주 고객 웹사이트를 모아 관리하는 저장소입니다.

## 구조

```
├── common/                 # 모든 고객에 공통으로 쓰는 도구·템플릿
│   └── tools/
│       └── make_feedback_xlsx.py   # 피드백 엑셀 생성기
└── clients/                # 고객별 웹사이트 (폴더 하나 = 프로젝트 하나)
    └── yeri/               # 오예리 특허법률사무소 (Next.js)
        ├── docs/           # 분석·기획·설계 문서
        └── feedback/       # 고객 피드백 원본, feedback_data.py, 엑셀 양식
```

## 규칙

- 고객 프로젝트는 `clients/<이름>/` 안에서 자체 완결된다 (자체 package.json, 문서, 피드백 포함)
- 두 고객 이상에서 쓰이는 도구·템플릿만 `common/`에 둔다
- 고객 폴더끼리는 서로 참조하지 않는다

## 자주 쓰는 명령

```bash
# 개발 서버 (고객 폴더 안에서)
cd clients/yeri && npm run dev

# 피드백 엑셀 재생성 (저장소 루트에서)
python3 common/tools/make_feedback_xlsx.py clients/yeri
```
