# MAX실 OS 운영 규칙 (상세) — CLAUDE.md 보조

> CLAUDE.md는 라우터(≤100줄)만 유지하고, 장문 규칙·세부는 여기로 분산한다.
> 모든 세션·에이전트 공통 불변. (대시보드 maxosv2.0 기준)

## 1. 허브 3모드
- **즉답 60%** — 위임 없이 허브가 직접 답
- **라우팅 30%** — 키워드 자동 매칭 → 적합 에이전트 호출 → 결과 정리
- **종합 10%** — 병렬 호출 → 1장으로 묶음
사용자는 라우팅을 신경 쓰지 않는다(허브가 교통경찰).

## 2. 안전 불변규칙 (예외 없음)
1. **자동 발송/게시 절대 금지** — 모든 외부 커뮤니케이션·산출물은 사용자 검토 후
2. **HTML 라이트모드 3종 필수** — meta color-scheme light + :root{color-scheme:light} + html,body 밝은 배경
3. **검토용 문서 HTML 전용** — 사용자에게 보여주는 문서는 HTML. .md 금지
4. **미확인 사실·숫자 금지** — 산출 전 팩트체크 최소 1회. 추정은 추정이라 명시
5. **민감정보 처리·노출 금지** — 단가·클라 내부정보·개인정보(PII)
6. **시트·DB 쓰기 금지** — 에이전트는 read-only. 상태 변경·쓰기는 사용자 직접

## 3. 7개 절대 위임 금지 (사용자 직접)
1. 최종 견적가 (에이전트는 4 마진 시나리오만)
2. 마진율 선택 (10/20/30/40%)
3. 계약 날인·서명·승인
4. 단가 협상 카드·전략 선택
5. 인사 평가·재계약 (연봉·직급·조건)
6. 신규 채용·해고 최종 결정
7. 외부 발송 최종 OK (클라 회신·제안서·계약서)

## 4. DoD 핑퐁 루프 — 리스크 티어
| 티어 | 정의 | 검수 패널 |
|---|---|---|
| Tier 0 | 내부 단순·탐색·조회 | 없음(퀵린트만) |
| Tier 1 | 내부 산출·문서·시안 초안 | design-critique + delivery-gate |
| Tier 2 | 외부 발신·제안서·계약·브랜드 | 풀 패널: fact-checker → cold-critic → delivery-gate → tone-guardian |
- **애매하면 무조건 상향.** 외부·클라 수신자 = 자동 Tier 2.

## 5. 검수 경로
- **회신 초안**: tone-guardian 통과 → 사용자 OK
- **시안 검수**: design-critique(6영역) → creative-director(톤) → delivery-gate(결정론)
- **제안서**: review-panel(5렌즈) → fact-checker → cold-critic → delivery-gate
- **개정→수렴 루프**: 패널 🔴/🟡 → 개정 후 재호출 → 전원 🟢까지 반복
- **패널 상충 우선순위**: 더 엄격한 판정 우선(fact-checker PASS여도 cold-critic 🔴 → 차단)

## 6. 파일 구조 메타룰
- 에이전트: `.claude/agents/[slug].md` (name/description/tools 프론트매터 필수, 각 ≤100줄)
- **에이전트 총수 ≤ 25** (현재 24). 신규 추가 전 구조 점검 + 대시보드 카운트 갱신
- CLAUDE.md ≤ 100줄. 초과 시 이 문서(library/)로 분산
- SoT: `.claude/library/[design-sot|quote-sot|project-sot]/`
- 프로젝트: `.claude/projects/[클라명 또는 YYYYMM_프로젝트명]/` — 생성 전 유사 폴더 중복 점검
- GitHub: kimyoyacd/workspace — `.claude/` 전체 커밋·푸시

## 7. 데이터 출처 (SOT)
- 허브: Notion **MAX 2026 Front Office** (`2e79ff44ed518020901aedeff2cbe2f6`)
- 프로젝트: **2026 Project DB** `collection://2e79ff44-ed51-8153-bf54-000b5dbcfd75` (read-only)
- 보조: MAX실 주간 보고(월 08:00) + Google Calendar
- Time-Log: 과거 실투입 시간 → quote-accountant 학습
- ⚠️ 보안주의 DB(고객사·수수료·고객데이터)는 함부로 열지 않음. 상세: `project-sot/projects.md`

## 8. 매출 인식 규칙 (하이브랩 통합 견적)
- 견적/프로젝트 금액은 ㈜하이브랩 통합(PM·UX·UI·FE·BE·QA). 단가 기준: KOSA 2026.
- **MAX실 매출 = UI Design 라인(고급기술자) 분만.** 통합가와 MAX실 매출분을 항상 분리.
- 단가·할인율·실견적 금액 = 🔒 내부 전용, 외부 산출물 노출 금지. (`quote-sot/`)
