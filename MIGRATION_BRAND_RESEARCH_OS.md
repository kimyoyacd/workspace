# MIGRATION — 브랜드 리서치·전략 OS 승격 (2026-07-21)

기존 자산(에이전트·스킬·HTML)을 삭제·교체하지 않고, 팀 공용 브랜드 리서치·전략·HTML 출력
시스템으로 **승격**한 변경 기록.

## 변경 원칙

- 기존 에이전트·프로젝트 HTML·스킬 원본 삭제 없음
- 수정 전 파일은 `.claude/backup/migration-2026-07-21/`에 백업
- 기존 HTML(GRAIN·Boomi·MAXOS)은 골든 예시로 승격, Manus 리서치 방식은 스킬 사양으로 승격

## 백업 목록

| 백업 파일 | 원본 |
|---|---|
| `.claude/backup/migration-2026-07-21/marketer.md.bak` | `.claude/agents/marketer.md` (v8 리서치·발산 버전) |
| `.claude/backup/migration-2026-07-21/hivelab-proposal-style.md.bak` | `.claude/skills/hivelab-proposal-style.md` |
| `.claude/backup/migration-2026-07-21/CLAUDE.md.bak` | `CLAUDE.md` |

## 이동 (내용 보존)

| 변경 전 | 변경 후 | 비고 |
|---|---|---|
| `.claude/skills/hivelab-proposal-style.md` | `.claude/skills/hivelab-proposal-style/SKILL.md` | 정식 스킬 폴더 구조로 이전. 내용 동일. 원본 파일도 당분간 유지(호출 호환) — 다음 정리 주기에 제거 판단 |

## 신규 생성

### 스킬 (5종)
| 파일 | 역할 |
|---|---|
| `.claude/skills/project-discovery/SKILL.md` | STEP 1~3: 디스커버리·팩트북·문제 재정의. 정보 상태 5분류(FACT/CLIENT CLAIM/INFERENCE/HYPOTHESIS/UNKNOWN). 브랜드 유형별 확장 조사 |
| `.claude/skills/wide-market-research/SKILL.md` | STEP 4~5: 경쟁 30+·이종업계 30+ 와이드 리서치, 축 후보 3+, 화이트스페이스 4유형. Manus 방식 정식 사양 |
| `.claude/skills/insight-strategy/SKILL.md` | STEP 6~7: 긴장 기반 인사이트, 전략 대안 2~3 + 추천(선택·포기 논리) |
| `.claude/skills/quality-gate/SKILL.md` | 완료 게이트 — 수량·출처·근거 미달 시 HTML 진행 차단 |
| `.claude/skills/brand-strategy-deck/` | HTML 생성: SKILL.md + template.html + REPORT_SCHEMA.md + COMPONENTS.md + references/ 골든 예시 3종 |

### 골든 예시 (기존 HTML 재사용)
| 파일 | 출처 |
|---|---|
| `references/grain-golden-example.html` | GitHub 브랜치 `claude/ai-creative-experiment-tswt8n`의 `202606_GRAIN/deck.html` (브랜드 카드 49개·T1~T4 배지·클러스터·전략 전개) |
| `references/boomi-golden-example.html` | `.claude/projects/202606_boomi/deck.html` 복사 (섹션 리듬·포지셔닝 맵·기회/함정 쌍) |
| `references/maxos-golden-example.html` | `.claude/projects/maxosdashboardv7.html` 복사 (데이터 밀도·상태 태그) |

## 수정

### `.claude/agents/marketer.md` — 전면 개편
- **변경 전**: 리서치·발산 5단계 (RFP→시장조사→와이드→트렌드·레퍼런스→발산). mx-deck-design 연동. 도구: Read/Glob/Grep/WebSearch/WebFetch
- **변경 후**: Senior Brand Strategy Marketer — 18단계 파이프라인 총괄. 스킬 체인(project-discovery → wide-market-research → quality-gate → insight-strategy → brand-strategy-deck). 조사 모드 QUICK/STANDARD/DEEP. outputs/ 파일 규약. 도구: + Write/Edit/Skill/Bash
- **보존**: Manus 방식 리서치 구조, 출처 필수·객관 우선·소비자 언어 축 원칙, 발산 계보(brainstormer 사양은 wide-market-research 카테고리 군집으로 흡수)

### `CLAUDE.md`
- 스킬 목록에 신규 6종 추가
- "브랜드 리서치·전략 프로젝트" 운영 원칙 8줄 추가 (상세 규칙은 스킬에 위임)
- marketer 설명을 스킬 체인 기반으로 갱신
- 문서 구조 트리 갱신

## 기존 에이전트와의 관계 (삭제 없음 — 역할 유지)

| 에이전트 | 새 시스템에서의 위치 |
|---|---|
| `rfp-analyst` | project-discovery STEP 1이 4분류 사양을 참조. 단독 호출도 그대로 가능 |
| `market-research` | wide-market-research가 Manus 사양을 승격·확장. 단독 호출 가능 |
| `manus-1/2`, `runable-3`, `brand-pipeline` | 기존 브랜드 제안 파이프라인 그대로 유지 (별도 트랙) |
| `design-trend-radar`·`reference-curator`·`brainstormer` | marketer 구버전의 3·4단계 담당 — 독립 에이전트로 유지, 필요 시 개별 호출 |
| `fact-checker`·`review-panel`·`delivery-gate` | 발송 전 검수 게이트 — 파이프라인 외부에서 기존대로 경유 |

## 샘플 검증 (Boomi)

`.claude/projects/202606_boomi/`를 새 구조(inputs/·outputs/·report-data.json)로 승격.
기존 00~04 파일은 그대로 보존, outputs/에 신규 산출물 생성.

- 경쟁·대체 브랜드: **35개** (직접 13·간접 10·대체재 6·인접 6), 27개 T1 검증, 4개 T4 플래그
- 카테고리: 4개 군집
- 축 후보 3세트 (선정 1 + 제외 2, 이유 기록)
- 화이트스페이스 3건 (TRUE OPPORTUNITY / EMERGING / FALSE 유형 판정)
- 이종업계: **32개** (08 JSON) → 4개 전략 문법 군집 (09 JSON). 웹 재검증 생략 — 확립 지식 기반, limitation 기록
- 통합 데이터: `report-data.json` — 데이터가 HTML 안에만 존재하지 않도록 outputs/ 원본 포인터 + 요약 구조화
- 신규 덱: `deck-strategy.html` — outputs/ 데이터 기반, template.html 문법으로 생성 (기존 컨셉 쇼케이스 deck.html은 보존)

### 렌더링 검증 (headless Chromium)

| 항목 | 결과 |
|---|---|
| 브랜드 팩트북 출력 (상태 배지 12) | ✅ |
| 경쟁사 카드(brand-card 15) + 카테고리 카드 3 + 사분면 4 | ✅ |
| 카드별 출처 노출 (brand-source 27 · tier-badge 15) | ✅ |
| XY맵 도트 23 (전부 좌표 근거 title 보유) + 축 후보 3 | ✅ |
| 화이트스페이스 기회·함정 쌍 (opp 4 · risk 4) | ✅ |
| 자산→기회→전략 연결 (인사이트 5 · 전략 3 · 추천 1) | ✅ |
| 기존 시각 문법 유지 (cream/paper/ink + accent 2색, Boomi 골든 예시 컴포넌트) | ✅ |

## 되돌리기

```bash
cp .claude/backup/migration-2026-07-21/marketer.md.bak .claude/agents/marketer.md
cp .claude/backup/migration-2026-07-21/CLAUDE.md.bak CLAUDE.md
# 신규 스킬 폴더 5종 삭제 시 구버전 동작으로 복귀
```
