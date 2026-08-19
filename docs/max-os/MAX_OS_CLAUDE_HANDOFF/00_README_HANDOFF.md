# MAX OS Claude Code 구축 인계 패키지

## 목적

이 폴더는 MAX OS를 Claude Code에서 이어 구축할 때 자료별 역할이 섞이거나, 시안의 임시 수치가 실제 데이터로 오인되는 문제를 막기 위한 실행 기준이다.

## 반드시 지킬 자료 우선순위

서로 다른 자료가 충돌하면 아래 순서를 따른다.

1. `01_SOURCE_OF_TRUTH.md` — 자료별 권한과 충돌 해결 기준
2. `02_PAGE_NAV_CONTENT_SPEC.md` — 페이지·메뉴·콘텐츠 기준
3. `03_MANUAL_PLAYBOOK_ARCHITECTURE.md` — 사용설명서와 워크플로우 기준
4. `04_DATA_METRIC_CONTRACT.md` — 데이터·수치·상태 정의
5. `05_DESIGN_SYSTEM_IMPLEMENTATION.md` — 디자인·컴포넌트 기준
6. `06_CLAUDE_CODE_MASTER_PROMPT.md` — 실행 순서
7. `07_QA_ACCEPTANCE.md` — 완료 판정
8. `09_OPERATIONS_DASHBOARD_DETAIL_SPEC.md` — 간트·Task·프로젝트·리소스 상세 기준

구축 전 미확정 정보를 취합할 때는 `08_REQUIRED_INPUTS_TEMPLATE.md`를 사용한다.

## 핵심 원본

- `../MAX_OS_HOME_WIREFRAME.html`: 홈의 디자인 톤·레이아웃·정보 밀도 기준. 이 수준보다 홈에 정보를 추가하지 않는다.
- `references/MAX_OS_HOME_BALANCED_REFERENCE.png`: 홈의 여백과 카드 수 기준. 이미지 속 수치는 예시다.
- `references/MAX_OS_OPERATIONS_OVERVIEW_REFERENCE.png`: `운영 현황 > 운영 요약`의 상세 카드·표·그래프 참고. 홈에 그대로 배치하지 않는다.
- `references/OPERATIONS_TASK_GANTT_REFERENCE.png`: 주간 Task·간트·Kanban 구성 참고.
- `../MAX_OS_SITE_IA_CLAUDE_CODE_BRIEF.md`: 제품 정의·IA·라우트·페이지 명세 기준.
- `../AI_NATIVE_AX_OPERATING_MODEL_BENCHMARK.md`: AX 조직·거버넌스의 기획 근거.

## Claude Code에 전달하기 전에 추가로 모을 것

다음 자료가 없으면 Claude가 임의로 만들지 말고 `확인 필요`로 보고해야 한다.

- 실제 소스 저장소 경로와 실행 명령
- 프레임워크·패키지 매니저·Node 버전
- 현재 라우트와 재사용 가능한 컴포넌트 목록
- Notion·Google Sheets 등 실제 데이터 소스와 필드명
- `.env.example` 또는 필요한 환경변수 이름. 실제 비밀값은 문서에 넣지 않는다.
- 프로젝트 상태·Gate 상태의 실제 enum
- 구성원별 표준 가용시간과 가동률 산식
- 유휴·적정·과부하 임계값의 최종 승인값
- 사용자 역할과 페이지별 접근 권한
- 배포 환경과 검수 URL 생성 방식

위 항목은 `08_REQUIRED_INPUTS_TEMPLATE.md`에 채운다.

## 권장 실행 순서

1. 이 폴더와 핵심 원본을 저장소의 `/docs/max-os/`에 복사한다.
2. `06_CLAUDE_CODE_MASTER_PROMPT.md`를 Claude Code에 전달한다.
3. Claude가 작성한 사전진단 보고서에서 데이터 연동과 기존 변경사항을 먼저 확인한다.
4. App Shell과 간결한 홈을 구현하고 디자인·데이터 QA를 통과시킨다.
5. 워크플로우·사용설명서·온보딩을 순차 구현한다.

## 금지 사항

- 기존 데이터 연동 삭제 또는 하드코딩 대체
- 시안의 예시 숫자를 실제 운영값으로 사용
- Figma의 모든 화면을 검증 없이 그대로 합치기
- 좌측 전역 메뉴와 상단 로컬 탭에 같은 항목 반복
- Claude Code 설명서와 온보딩 문서의 동일 내용 복제
- Human Gate를 자동 승인으로 처리
