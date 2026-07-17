# Production Tracker — 구글시트

업로드받은 `LittleTryClub_Production_Template_v2.xlsx` 를 구글시트로 이관.

- **URL**: https://docs.google.com/spreadsheets/d/1XTYH4je7ZKglq_kb7boK-_ze22hmFWxW9wCA3Cegkg8/edit
- **소유**: kimyoya@gmail.com
- 원본 xlsx는 EP마다 별도 탭(EP001~EP010, 각 6씬 Scene/Time/Story Beat/Emotion/Start·End 프롬프트/모션
  프롬프트/카메라/Status) 구조였으나, 임포트 과정에서 멀티탭 xlsx 인코딩 이슈로 **탭 1개짜리 플랫 시트**로
  재구성해서 올렸다. 필요하면 원본처럼 EP별 탭으로 다시 나눠도 됨.

## 게이트0 사전 검토 결과 (원본 10개 로그라인 중)

| EP | 제목 | 문제 |
|---|---|---|
| EP001 | The Star That Ran Away | ⚠️ 별이 스스로 사라짐 — 캐릭터 행동이 원인이 아님. 재정의 필요 |
| EP003 | Brave in the Dark | ⚠️ 두려움 극복형 모험 서사 — "다시 시도해서 스스로 고침" 구조가 아님. 재정의 필요 |
| EP004 | The Falling Block Tower | 현재 `episode-director` 에이전트로 EP005_test 폴더에서 캐릭터 행동 원인형으로 각색해 실제 검증 진행 중 (조명 불일치 이슈로 재작업 필요, 2026.07.17) |

나머지(EP002, EP005~EP010)는 로그라인 단계에서는 게이트0 위반이 뚜렷하지 않으나, 실제 착수 시
`episode-director` 1단계(콘셉트 브리프)에서 재확인 필요.

## 다음 단계
1. EP004(블록 탑) 재작업: 조명·시간대 일치 스틸로 재생성 → Kling 재검증
2. EP001, EP003은 로그라인 자체를 게이트0 통과하도록 새로 정의한 뒤 착수
3. 승인된 순서대로 `episode-director` 에이전트를 돌려 13키프레임→6씬→영상까지 진행
