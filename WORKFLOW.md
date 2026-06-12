# 제안서 워크플로우 — RFP 투입부터 골격 생성까지

> RFP와 받은 자료를 `00_inbox/`에 넣고 세션을 시작하면,
> 아래 순서대로 분석 → 소스 매칭 → 골격 조립까지 진행합니다.

## 폴더 구조

```
00_inbox/      ← RFP, 클라이언트가 준 자료 전부 여기에 (PDF, md, 이미지, 메일 내용 등)
01_분석/       ← RFP 분석 결과 (요구사항, 평가기준, 키워드, 도메인 분류)
02_레퍼런스/   ← 매칭된 내부 사례 + 외부 소스 정리 md
03_초안/       ← 제안서 목차·스토리라인·페이지별 골격
```

## 시작 방법

1. `00_inbox/`에 RFP와 받은 자료를 넣는다 (또는 Google Drive 경로/링크를 알려준다)
2. 세션에서 한 마디로 시작: **"인박스 분석해서 제안 준비 시작해줘"**
3. 이후 단계는 자동으로 진행:

### STEP 1 — RFP 분석 → `01_분석/RFP_분석.md`
- 발주사 / 도메인 / 프로젝트 유형 분류
- 요구사항·평가기준·일정 추출
- 핵심 키워드 도출 (AI, 리뉴얼, BX, 공간, GUI 등)

### STEP 2 — 내부 사례 매칭 → `02_레퍼런스/내부사례_매칭.md`
Google Drive `@제안샘플` 폴더의 `제안사례_활용계획.md` 매칭 가이드 기준:

| RFP 키워드 | 1순위 레퍼런스 | 보강 자산 |
|---|---|---|
| AI / 챗봇 / Agent | KT 인텔리전스 | 42dot Research |
| 웹사이트 리뉴얼 | 42dot Website Renewal | JEJUAIR, 제주맥주 |
| 브랜드/BX | FANLIGHT, 11ST | np_bx, kakao_pp, 디뮤지엄 |
| 디자인 전략·Discovery | Design Strategy_42dot | JEJUAIR 디자인전략 |
| 채용 플랫폼 | 42dot Recruit | 42dot Renewal 채용 섹션 |
| CX 컨설팅 | 제주항공 서비스경험 | Clay SDIJ |
| 공간·오프라인 경험 | Clay SDIJ 시리즈 | - |
| 디바이스 GUI | 코웨이 BEREX | - |
| 교육 도메인 | FINPlusX 시대인재, Clay SDIJ | edutech-trust-modern 스킬 |

### STEP 3 — 외부 소스 수집 → `02_레퍼런스/외부소스.md`
RFP 성격에 맞춰 아래에서 선별 수집:

- **구조 참고**: [joelparkerhenderson/pitch-deck](https://github.com/joelparkerhenderson/pitch-deck), [Awesome-Decks](https://github.com/rafaecheve/Awesome-Decks)
- **템플릿**: [Figma Community Pitch Deck](https://www.figma.com/community/presentations/pitch-deck), [Proposal Presentation Template](https://www.figma.com/community/file/1502021139748994875/proposal-presentation-template)
- **비주얼 레퍼런스**: [Behance UI/UX Presentation](https://www.behance.net/search/projects/?search=UI+UX+Presentation&sort=recommended&time=month), [Dribbble design_proposal](https://dribbble.com/tags/design_proposal)
- **실제 사례**: [bestpitchdeck.com](https://bestpitchdeck.com/), [getalai 100+ decks](https://getalai.com/blog/pitch-deck-examples)
- 필요 시 웹 검색으로 도메인 특화 레퍼런스 추가 수집

### STEP 4 — 골격 조립 → `03_초안/제안서_골격.md`
`제안서_템플릿.md`(Drive)의 0~10 섹션 골격에 STEP 1~3 결과를 끼워 조립:

```
0. 표지/목차 → 1. 배경·목적 → 2. 목표·3대 제안 → 3. 리서치/Discovery
→ 4. 사용자 분석 → 5. UX/디자인 전략 → 6. 수행범위 → 7. 방법론
→ 8. 일정 → 9. 운영방안 → 10. 제안사 현황
```

각 섹션마다: 들어갈 내용 요약 + 원본 사례 페이지 출처 + 디자인 무드 지정.

## 연결된 자산

- Google Drive `@제안샘플`: https://drive.google.com/drive/folders/1V2oXg2_6E2E5p92zNeojmprLZ-qMgCxu
  - `제안사례_활용계획.md` — 16건 사례 인덱스·매칭 가이드
  - `제안서_템플릿.md` — 조립용 페이지 골격
  - `edutech-trust-modern_SKILL.md` — 교육 도메인 디자인 무드
- Figma (하이브랩 MAX 계정 연동) — 템플릿 복제·디자인 작업 가능
- Notion (HIVELAB 워크스페이스) — 회의록·주간보고 검색 가능
