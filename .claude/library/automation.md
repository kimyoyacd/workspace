# 자동 트리거 설계안 (적용 보류)

> ⚠️ **설계 문서 — settings.json에 아직 적용하지 않음.** 실제 적용은 사용자의 실제 일정·환경 확정 후.
> 대시보드(maxosv2.0) "허브 자동 트리거" 5종을 옮겨 둔 것.

## 트리거 5종
| 주기 | 이름 | 동작 | 연계 에이전트 |
|---|---|---|---|
| 매일 09:00 | 오늘 보드 갱신 | Notion read → "오늘 꼭 / 기일초과" 보드 | max-pm |
| 월 08:00 | 주간 컨닝페이퍼 | 주간 운영 종합 | max-pm + overhead-watcher + account-radar |
| 분기 첫주 | 🎨 디자인 트렌드 | 신선 트렌드 → 레퍼런스 풀 흡수 | design-trend-radar → reference-curator |
| 매일 18:00 | 결정 대기 알림 | 오늘 모인 "사용자 결정 필요" 항목 | (허브 종합) |
| 발송 직전 | 외부 발송 게이트 | 발송 전 자동 검수 체인 | fact-checker → delivery-gate → tone-guardian |

## 적용 시 고려사항
- Claude Code hooks / cron으로 구현(SessionStart hook 또는 외부 스케줄러)
- 자동 트리거라도 **자동 발송은 절대 금지** — 알림·초안까지만, 발송 OK는 사용자
- Notion·Calendar read-only 권한 확인 필요
- 실제 업무 시간대·요일 사용자 확정 후 settings.json 작성

## 상태
- 대시보드 "조직 운영 > 홀딩": settings.json 자동 트리거 세팅 = 설정 대기
