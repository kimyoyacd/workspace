# project-index 스킬

프로젝트 HTML 산출물 목록을 받아 `.claude/library/index-template.html` 골조로 인덱스 페이지를 생성한다.

## 트리거
- "인덱스 만들어줘", "파일 묶어줘", "바로가기 페이지", "index 생성"
- 프로젝트 마무리 시점에 자동 제안 (CLAUDE.md 마무리 체크 규칙에 의해)

## 입력 정보 (실장님에게 확인 or 자동 탐색)
1. **프로젝트명** — 예: `BOOMI × 넷마블`
2. **브랜치명** — htmlpreview 링크 생성에 필요
3. **산출물 파일 목록** — `.claude/projects/` 아래 해당 프로젝트 HTML 파일들
4. **섹션 구조** — 파일명·내용 보고 자동 분류 (전략/컨셉/브랜드/덱/대시보드)

## 실행 절차

### 1. 파일 탐색
```
Glob: .claude/projects/[프로젝트폴더]/**/*.html
또는 파일명 패턴으로 탐색
```

### 2. 템플릿 복사 & 치환
- `.claude/library/index-template.html` 읽기
- 교체 3곳:
  - `<title>` + `.nav-logo` → 프로젝트명
  - `.hero-title` / `.hero-sub` → 프로젝트 설명
  - 각 `.deck-card href` → 실제 파일 상대 경로
- 섹션은 파일 성격에 따라 자동 분류:
  - `research / state-of / market` → 전략·시장조사
  - `concept / pdp / mockup` → 컨셉·시안
  - `brand / board` → 브랜드 시스템
  - `deck / slide / proposal` → 덱·제안서
  - `dashboard` → 대시보드
  - 나머지 → 아카이브

### 3. 파일 저장
- 경로: `.claude/projects/[프로젝트폴더]/index.html`
  또는 동일 레벨 `.claude/projects/[프로젝트명]-index.html`

### 4. 스크린샷 검증
```bash
/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
  --headless=new --disable-gpu --no-sandbox --window-size=1440,900 \
  --screenshot="/tmp/index-preview.png" "file:///절대경로/index.html"
```

### 5. design-critique 검수 → 🔴 항목 수정

### 6. 커밋·푸시 → htmlpreview 링크 출력
```
https://htmlpreview.github.io/?https://github.com/kimyoyacd/workspace/blob/[브랜치명]/[파일경로]
```

## 출력 형식
```
인덱스 페이지 생성 완료 — [파일 수]종 묶음

https://htmlpreview.github.io/?...index.html

섹션 구성:
- 전략·시장: N종
- 컨셉 시안: N종
- 브랜드: N종
- 덱: N종
```

## 주의
- 파일이 1개뿐이면 인덱스 불필요 — 생성하지 않고 안내
- 브랜치명을 모르면 `git branch --show-current`로 자동 확인
- 기존 index.html이 있으면 덮어쓰기 전에 확인
