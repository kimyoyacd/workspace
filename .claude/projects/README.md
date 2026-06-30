# 프로젝트 폴더 규약

프로젝트 **하나당 폴더 하나** — `.claude/projects/[클라슬러그]_[프로젝트슬러그]/` (ASCII 소문자 슬러그, 한글명은 STATUS.md 안에).
한 클라가 프로젝트 여러 개면 폴더도 여러 개 (예: `coway_gui-consulting/`, `coway_sns/`).

## 구조
```
.claude/projects/
  INDEX.md                         # 전체 프로젝트 경량 테이블(grep/중복점검용)
  [클라]_[프로젝트]/
    STATUS.md                      # 현황 미러 (원본은 Notion)
    project_state.json             # brand-proposal 진행 상태(쓰는 경우)
    [산출물]                        # 시안·제안·견적 HTML 등
```

## 규칙
- **새 폴더 생성 전 INDEX.md에서 중복 점검 필수.** 생성 후 INDEX.md에 행 추가.
- STATUS.md는 Notion 2026 Project DB 미러 — **원본 쓰기는 사용자가 Notion에서 직접**(에이전트 read-only).
- 미확인 사실·숫자 임의 기재 금지(`Assumption` 표시). 민감정보(단가·개인정보) 외부 노출 금지.
- 파일 생성만으로는 사라짐 — **git commit·push로 누적**(컨테이너는 세션 후 초기화).

## STATUS.md 템플릿
```
# [클라] — [프로젝트] — STATUS
> Notion 미러 · 기준일 YYYY-MM-DD
- 클라이언트 / 프로젝트 / 카테고리·난이도 / 기간 / 상태:
- 리스크·데이터 플래그:
- 최근 커뮤니케이션:
- 결정 대기 (Director Decision Needed):
- 산출물:
- 관련 에이전트:
```
