# Copy Corpus — 카피라이팅 RAG 기출문제 저장소

AI가 카피를 쓸 때 참고할 "기출문제" 모음. 좋은 카피의 기준은 하나 — **누르고 싶은 문구**.
문법책(규칙)이 아니라 좋은 글(사례)을 읽고 따라 쓰는 방식으로 학습시키기 위한 데이터.

## 작동 원리 (RAG)

1. 카피 요청이 들어오면 요청에서 키워드를 뽑는다 (예: "인터넷 요금제" → 인터넷, 요금제, 속도, 통신)
2. 이 폴더의 JSONL을 grep으로 검색해 키워드가 들어간 기출 카피를 꺼낸다
3. 꺼낸 기출 15~30개를 few-shot 예시로 삼아 패턴(구조·어조·후킹)을 분석한다
4. 그 패턴 위에서 새 카피를 쓴다

검색 예시:
```bash
# 키워드 검색 (동의어까지 함께)
grep -h -iE "인터넷|요금제|와이파이|속도" .claude/library/copy-corpus/*.jsonl

# 카테고리 파일만 좁혀서
grep -h -iE "요금제|무제한" .claude/library/copy-corpus/telecom-internet.jsonl

# 톤으로 검색
grep -h '"tone":"위트"' .claude/library/copy-corpus/*.jsonl | head -30
```

## 파일 구성 (카테고리별 JSONL)

| 파일 | 커버 범위 |
|---|---|
| `telecom-internet.jsonl` | 통신사·인터넷·요금제·알뜰폰·와이파이 |
| `food-beverage.jsonl` | 식품·음료·주류·카페·프랜차이즈 |
| `finance-insurance.jsonl` | 은행·카드·보험·핀테크·증권 |
| `beauty-fashion.jsonl` | 뷰티·화장품·패션·쇼핑몰 |
| `ecommerce-delivery.jsonl` | 커머스·배달·플랫폼·앱푸시·프로모션 |
| `game-entertainment.jsonl` | 게임(UA·사전예약·업데이트)·OTT·엔터 |
| `tech-appliance-auto.jsonl` | 가전·IT기기·자동차·B2B테크 |
| `living-health-public.jsonl` | 생활용품·헬스·교육·공익·브랜드 슬로건 |

## 스키마 (한 줄 = 카피 한 건)

```json
{"copy":"잘 자, 내 꿈 꿔","brand":"스피드011","product":"이동통신","category":"통신","keywords":["통신","감성","연인","밤"],"tone":"감성","structure":"일상 대화 차용","source":"recalled","why":"광고 문구가 아니라 연인의 말로 들려서 브랜드 호감이 생김"}
```

| 필드 | 설명 |
|---|---|
| `copy` | 카피 본문 (필수) |
| `brand` | 브랜드/광고주. 모르면 `"무명"` |
| `product` | 제품/서비스 |
| `category` | 대분류 (통신, 식음료, 금융, 뷰티, 커머스, 게임, 테크, 생활 등) |
| `keywords` | 검색용 키워드 배열 — **이 필드가 RAG 검색의 핵심**. 제품어 + 정서어 + 상황어를 섞어 5개 내외 |
| `tone` | 감성 / 위트 / 직설 / 도발 / 프리미엄 / 공감 / 긴급 중 택1 |
| `structure` | 후킹 구조 한 줄 (반전, 대구, 질문, 숫자 제시, 손실 회피, 사회적 증거 등) |
| `source` | `verified`(출처 확인) / `recalled`(실제 카피, 기억 기반) / `crafted`(실제 캠페인 스타일을 본뜬 제작 카피) |
| `why` | 왜 누르고 싶은가 — 한 줄 (필수) |

## 수집 규칙

- 기준은 하나: **누르고 싶은가.** 예쁜 문장이 아니라 클릭·구매·기억을 만든 문장만.
- 실제 집행된 카피(`verified`/`recalled`) 우선. `crafted`는 실제 캠페인 문법을 본뜬 경우만 허용하고 반드시 표기.
- `keywords`에는 제품 단어만 넣지 말 것. "인터넷" 카피라면 `속도`, `버퍼링`, `답답함` 같은 정서·상황어를 함께 넣어야 검색이 산다.
- 중복 카피 금지. 같은 캠페인의 변형 카피는 대표 1건 + 변형 1건까지.
- 새 카피 추가는 해당 카테고리 JSONL 맨 아래에 한 줄 append. 파일이 없는 새 카테고리는 파일 신설 후 이 README 표에 추가.

## 성장시키는 법

- 레퍼런스 서핑 중 "이건 눌렀다" 싶은 카피를 만나면 그 자리에서 한 줄 추가 (Claude에게 "코퍼스에 추가해줘"라고 말하면 됨)
- 우리 실에서 낸 카피 중 성과 좋았던 것도 `brand`를 클라이언트명으로 해서 축적 → 자체 기출화
- 사용은 `.claude/skills/copywriter/SKILL.md` 참조
