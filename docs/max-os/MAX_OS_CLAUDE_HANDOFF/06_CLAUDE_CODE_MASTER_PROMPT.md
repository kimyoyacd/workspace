# Claude Code 실행 요청문

아래 본문을 소스 저장소 경로와 함께 Claude Code에 전달한다.

```text
MAX OS 내부 운영 사이트를 현재 저장소 위에서 이어 구축해줘.

먼저 다음 파일을 순서대로 모두 읽어라.
1. docs/max-os/MAX_OS_CLAUDE_HANDOFF/00_README_HANDOFF.md
2. docs/max-os/MAX_OS_CLAUDE_HANDOFF/01_SOURCE_OF_TRUTH.md
3. docs/max-os/MAX_OS_CLAUDE_HANDOFF/02_PAGE_NAV_CONTENT_SPEC.md
4. docs/max-os/MAX_OS_CLAUDE_HANDOFF/03_MANUAL_PLAYBOOK_ARCHITECTURE.md
5. docs/max-os/MAX_OS_CLAUDE_HANDOFF/04_DATA_METRIC_CONTRACT.md
6. docs/max-os/MAX_OS_CLAUDE_HANDOFF/05_DESIGN_SYSTEM_IMPLEMENTATION.md
7. docs/max-os/MAX_OS_CLAUDE_HANDOFF/07_QA_ACCEPTANCE.md
8. docs/max-os/MAX_OS_CLAUDE_HANDOFF/09_OPERATIONS_DASHBOARD_DETAIL_SPEC.md
9. docs/max-os/MAX_OS_HOME_WIREFRAME.html
10. docs/max-os/MAX_OS_SITE_IA_CLAUDE_CODE_BRIEF.md

작업 원칙:
- 기존 프레임워크·라우팅·컴포넌트·데이터 연동을 우선 보존한다.
- 사용자 변경사항과 무관한 파일을 수정하지 않는다.
- 시안의 숫자와 이름을 실제 데이터로 하드코딩하지 않는다.
- 데이터 연결 전에는 mock을 명확히 분리하고 `샘플 데이터`를 표시한다.
- Human Gate는 자동 승인하지 않는다.
- 모든 메뉴와 UI 라벨은 한글로 작성한다.

0단계 — 사전진단:
코드를 수정하기 전에 다음을 채팅에 보고해라.
1. 프레임워크·빌드·실행 명령
2. 현재 route map
3. 재사용 가능한 component map
4. 실제 데이터 소스와 필드 매핑
5. 환경변수 이름과 누락 상태. 비밀값은 출력하지 말 것.
6. 현재 변경 파일과 충돌 가능성
7. 문서 요구사항 중 구현 근거가 없는 항목
8. 1차 구현 파일 목록과 검증 계획

1단계 — App Shell:
- 224px 좌측 전역 메뉴
- 상단 유틸리티
- 내부 페이지 로컬 탭
- 디자인 토큰과 공통 상태 컴포넌트

2단계 — 간결한 홈:
- `MAX_OS_HOME_WIREFRAME.html`의 Hero·여백·카드 밀도를 그대로 유지
- 진행 중 프로젝트·승인 대기·7일 내 마감·위험 프로젝트의 숫자만 표시
- `가동 리소스`와 `유휴 리소스`를 큰 숫자로 표시
- 3개 제작 워크플로우와 처음 사용 경로
- 데이터 출처와 마지막 동기화
- 프로젝트 표·개인별 가동률·위험 사유·Gate 목록·예측 그래프는 홈에 넣지 말 것

3단계 — 핵심 라우트:
- 운영 현황: 운영 요약·프로젝트 현황·Task·스프린트·일정·Gate·리소스·위험 상세
- 프로젝트·Task 간트의 일·주·월 전환과 의존성·Milestone·Gate 표시
- 개인별 투입 프로젝트·Task·배정시간·가동률과 프로젝트별 투입 인력
- 업무 시작
- 워크플로우 > 전체 AX 시스템
- 3개 제작 워크플로우 상세 골조
- AI 실행 환경과 Claude Code 사용설명서 골조
- 온보딩 딥링크 구조

4단계 — 검증:
- lint, typecheck, unit test, build를 실행한다.
- 1920px, 1440px, 1280px, 모바일에서 시각 QA를 한다.
- 기존 데이터 연결의 정상·로딩·오류·빈 상태를 검증한다.
- 07_QA_ACCEPTANCE.md 결과를 항목별로 보고한다.

사전진단에서 데이터 소스·권한·가동률 임계값이 확인되지 않으면 임의로 결정하지 말고 `HUMAN_DECISION_REQUIRED`로 보고한 뒤 해당 부분만 보류한다.
```
