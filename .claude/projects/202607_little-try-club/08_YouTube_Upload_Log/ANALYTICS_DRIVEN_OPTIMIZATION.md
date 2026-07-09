# 데이터 기반 컷 최적화 (Analytics-Driven Cut Optimization)

> **참고 사례**: https://dbhyeong.github.io/blog/youtube-analytics-driven-longform-split-upload
> 원문은 롱폼(25분+)을 유튜브 애널리틱스 데이터로 5-8분대로 분할하는 사례.
> 우리는 이미 30초 고정 숏폼이라 "길이 구간 비교"는 해당 없음 — 대신 **컷 단위 이탈 구간·훅 반응**을 보는 방식으로 응용.
> **상태**: 문서만 준비, 실제 연동은 EP001 업로드 후 실측 데이터가 쌓이면 진행.

---

## 1) 우리한테 맞는 적용 방식

롱폼 사례의 "길이별 평균 시청률 비교"는 우리에게 의미 없음 (숏폼은 이미 30초 고정).
대신 볼 것:

- **컷 단위 이탈 지점**: YouTube Analytics의 Audience Retention 그래프에서 어느 초(=어느 컷)에서 급격히 이탈하는지
- **훅 강도**: 첫 1-2초 유지율(스와이프 안 하고 남는 비율)
- **재시청률**: 30초를 다 보고 다시 처음부터 보는 비율 (숏폼 알고리즘 핵심 신호)
- **구독 전환**: 이 영상을 보고 구독한 비율

이 데이터가 쌓이면 `03_Higgsfield_Prompts/TEMPLATE_higgsfield-prompt.md`의 "컷 시간: 4-6초" 같은 고정 가이드를
실측 기반으로 조정 가능 (예: "이탈 많은 컷 유형은 2초로 줄이고, 반응 좋은 훅 유형은 늘리기").

## 2) 필요한 설정 (사용자가 직접 해야 하는 부분)

1. **Google Cloud 프로젝트 생성** + 아래 API 활성화:
   - YouTube Data API v3
   - YouTube Analytics API
2. **OAuth 2.0 인증 정보** 발급 (채널 소유 계정으로 동의) — `yt-analytics.readonly` 스코프 필요
3. 인증 정보(클라이언트 시크릿 등)는 **채팅에 붙여넣지 말고**, 연동 진행 시점에 별도 보안 경로로 전달

## 3) 연동 가능해지면 할 일 (EP001 업로드 후)

- [ ] 채널에 최소 1개 이상 에피소드 업로드 + 며칠간 데이터 누적 대기
- [ ] Google Cloud 프로젝트/OAuth 셋업 (사용자)
- [ ] Analytics API로 영상별 retention curve, 재시청률, 구독전환 조회하는 스크립트/에이전트 구성
- [ ] 결과를 `HIGGSFIELD_CREDIT_MANAGER.md`/`TEMPLATE_higgsfield-prompt.md`에 "실측 기반 팁"으로 반영하는 루프 정착
- [ ] (선택) `project-manager` 에이전트처럼 read-only로 주기 집계하는 전용 에이전트 신설 검토

## 4) 지금 당장은 보류하는 이유

- EP001이 아직 업로드 전이라 실측 데이터가 없음 (가설을 검증할 표본 자체가 없음)
- API 연동은 계정 인증이 필요한 작업이라 사용자 액션이 선행되어야 함

이 문서는 그 시점이 왔을 때 바로 시작할 수 있도록 만든 준비 문서입니다.
