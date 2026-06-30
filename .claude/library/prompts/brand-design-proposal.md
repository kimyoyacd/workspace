# 프롬프트 원형 — 브랜드 디자인 제안서 (0~3단계 마스터)

> 출처: Manus 협업 자료. 지시문 끝: "위 내용을 최대한 반영하여 아래 항목을 포함한 '브랜드 디자인
> 제안서'를 작성해줘. 아래 3가지 단계를 순서대로 진행한 후 모든 내용을 포함해야 해."
> 시스템 프롬프트(페르소나·지침)는 `persona-directives.md`. 하위 컴포넌트는 각 파일 참조.

## ★ 실행 원칙 (Materialize) — "글로만 끝내지 말 것"
**서브에이전트는 텍스트만 낸다. 이미지 생성과 파일 저장은 오케스트레이터(메인 세션)가 한다.**
- 서브에이전트(market-research·brainstormer·concept-director·critic·visual-generator)는 도구가 Read/Glob/Grep뿐 → **분석·전략·프롬프트까지만** 산출. 이미지·실제 파일은 못 만든다.
- **메인 세션이 반드시 다음을 실행한다:**
  1. 각 단계 결과를 **실제 파일로 저장** (아래 경로 표대로).
  2. **이미지는 Higgsfield로 직접 생성**(`generate_image` → `job_display`로 URL 회수, get_cost로 비용 확인). visual-generator의 [Image Prompt]를 그대로 실행.
  3. 마지막에 **HTML 덱**으로 조립(이미지 URL 임베드) + 커밋·PR.
- 즉 "에이전트 띄움 → 글 받음 → **메인이 파일·이미지로 굳힘**"이 한 세트다. 글만 받고 끝내면 미완성.

## 산출물 경로 규약
프로젝트별 폴더: `.claude/projects/<YYYYMM_프로젝트명>/`
| 단계 | 산출 파일 | 실행 주체 |
|---|---|---|
| 0 브리프 | `00-brief.md` | 메인 (brand-brief-template 채움) |
| 1 Wide Research | `01-research.md` (30/8/3 테이블) | market-research(글) → 메인 저장 |
| 2 포지셔닝 | `02-positioning.md` + `images/positioning-map.png`(선택) | market-research(글) → 메인 저장/생성 |
| 3 전략 | `03-strategy.md` (전략 3종 + 관점) | brainstormer·concept-director·critic(글) → 메인 저장 |
| 4 비주얼 | `images/*.png` + `04-visuals.md`(프롬프트 기록) | visual-generator(프롬프트) → **메인이 Higgsfield 생성** |
| 5 덱 | `deck.html` (이미지 임베드) | 메인 조립 → 커밋·PR |
(단일 파일로 갈 땐 `<프로젝트명>.html` 한 장에 전부 임베드도 가능. 단 이미지는 반드시 실제 생성·임베드.)

## 0단계 — 브랜드 기본 정보 (빈칸 브리프)
→ `brand-brief-template.md` 사용. (공간/목적/타겟/이름 + 목표·타겟층·기능·이름의미·스토리 5필드)
※ 채워진 예시는 이해용일 뿐, 항목별로 연결되는 내용이 아님.

## 1단계 — Wide research
→ `wide-research.md` 사용.
- 최근 1년 이내 활동 중인 국내/해외 (산업/제품군) 브랜딩 사례 **30개** 선정
- **8속성** 분석: 이름 · 공식 로고 이미지 · 소재지 · 오픈 시기 · 브랜드 스토리 · 타겟층 · 브랜드/제품의 기능 · 목적
- 인사이트 공통점에 따라 **3개 그룹(Category A/B/C)으로 분류**
- 예시 30 브랜드(일부 판독): Dover Street Market · 10 Corso Como · Colette · Opening Ceremony · BEAMS · UNITED ARROWS · Isetan Shinjuku · Lane Crawford · Joyce · I.T · SKP-S Beijing · The Skateroom/Ace Hotel · Gentle Monster · Ader Error …
- **3그룹 예시**:
  - **Category A — Curated Chaos**: 편집의 철학으로 공간을 재정의 / 큐레이션 = 브랜드 정체성. (ref: Dover Street Market, 10 Corso Como, Colette, BEAMS JAPAN, HIGHSNOBIETY)
  - **Category B — Immersive Worlds** *(본문 미확보)*
  - **Category C — Street Pulse** *(본문 미확보)*

## 2단계 — 포지셔닝 지도로 방향성 확인
1. 30개 브랜드를 분류한 **X·Y축 브랜드 포지셔닝 지도**
   - ※ 가격대·역사·기능·지역성 등 X·Y축을 구분할 설정값을 직접 입력하면 더 좋음.
2. [1단계]에서 분류한 **3가지 인사이트를 바탕으로 적용 가능한 브랜딩 전략을 도출**

## 3단계 — 브랜딩 전략 산출
각 전략 포맷: **[전략명] + 한 줄 정의 + 설명 + REFERENCE BRANDS(3개+, 각 한 줄) + 적용(2줄)**

### Strategy 1 — Cycle of Scenes
**장면의 순환: 공간 안에서 순환하는 서울의 다양한 장면들.**
과거의 잔심(오래된 골목·빈티지)과 현재의 감각(최신 플래그십·디지털)이 예측 불가능하게 교차하도록 브랜드를 배치. 방문할 때마다 새로운 서울을 발견하는 큐레이션 시스템을 구축.
- **REFERENCE**: Dover Street Market(매 시즌 완전히 다른 공간으로 재정의하는 'Beautiful Chaos', 럭셔리×서브컬처 경계를 허무는 편집력) / Colette(아트·상업 경계 없는 큐레이션, 2017 폐점 후에도 상징적 레퍼런스) / 10 Corso Como(갤러리·리스토랑이 하나의 서사로 연결, 공간 자체가 편집자 세계관)
- **적용**: 시즌마다 순환하는 입점 브랜드 구성 / 서울의 특정 골목·장면을 테마로 한 팝업 큐레이션 운영.

### Strategy 2 — Raw Meets Refined
**날 것과 정제의 충돌: 서울의 도시적 이중성을 공간 언어로 번역.**
정제되지 않은 날것의 소재(노출 콘크리트·녹슨 철)와 극도로 정제된 소재(아크릴·거울·미디어 월)를 의도적으로 충돌. 본능적으로 반응하고 기록하고 싶어 하는 강렬한 몰입형 공간 서사를 창조.
- **REFERENCE**: Gentle Monster(매 시즌 교체되는 대형 설치 미술이 공간을 콘텐츠로, 아이웨어를 위해 공간을 예술 설치로 재정의) / SKP-S(화성 테마+로봇 설치로 백화점 개념 해체, 베이징 Gen Z 필수 방문지·SNS 콘텐츠 생산지) / Ader Error(오류(Error)를 정체성으로, 불완전함의 미학)
- **적용**: 콘크리트 바닥+미러 천장, 녹슨 철제 선반+아크릴 디스플레이 / 공간의 서사가 되는 소재의 충돌.

### Strategy 3 — Living Archive
**살아있는 아카이브: 스트리트 문화의 에너지가 박동하는 커뮤니티 허브.**
단순한 트렌드 소비를 넘어 서울 로스터리 카페 문화를 F&B 존에 이식, 한정판 드롭·로컬 DJ 팝업을 통해… *(원문 일부 잘림 — 이후 본문 미확보)*

> ⚠️ 원문에 **Brutalist Framework** 등 추가 전략/프레임워크가 더 존재하나 본문 미확보. 확보 시 보강.

## 에이전트 매핑 + 실행(누가 글/누가 이미지·파일)
| 단계 | 에이전트(글 산출) | 메인 세션 실행(굳히기) |
|---|---|---|
| 0 브리프 | (brand-brief-template) | `00-brief.md` 저장 |
| 1 Wide research (30/8/3) | `market-research` | `01-research.md` 저장 |
| 2 포지셔닝 (XY·화이트스페이스) | `market-research` | `02-positioning.md` (+ 맵 이미지 선택) 저장 |
| 3 전략·관점 | `concept-director`+`brainstormer`+`critic` | `03-strategy.md` 저장 |
| 4 비주얼 프롬프트 | `visual-generator` | **Higgsfield로 이미지 생성** → `images/` 저장 |
| 5 덱 조립 | — | `deck.html`(이미지 임베드) → 커밋·PR |

> 한 줄: **에이전트는 글, 메인은 이미지·파일.** 글만 받고 끝내면 절반만 한 것이다.
> 예: Boomi 프로젝트가 이 방식으로 실제 이미지 4컷 + 쇼케이스 HTML까지 굳혔다(`.claude/projects/boomi-showcase.html`).
