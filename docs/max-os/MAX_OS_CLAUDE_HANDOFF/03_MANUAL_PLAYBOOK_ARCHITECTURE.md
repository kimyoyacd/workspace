# 사용설명서·Playbook 구조

## 1. 전체 AX 시스템의 위치

경로: `워크플로우 > 전체 AX 시스템`

표시할 흐름:

`업무 인입 → 신규·기존 판단 → 진입 경로 선택 → 서비스 유형 선택 → 실행 → Human Review → Project SoT → Asset Library → Usage & Learning`

이 화면은 MAX OS 전체 운영 방식을 설명하는 원본 지도다. 홈에는 1줄 요약만 두고, `역할·운영 기준`에서는 조직과 Gate가 이 흐름을 어떻게 지원하는지만 설명한다.

## 2. Claude Code 사용설명서

경로: 좌측 메뉴 `AI 실행 환경 > Claude Code`

| 탭 | 필수 내용 |
|---|---|
| 처음 시작 | 무엇을 할 수 있는지 · 하지 말아야 할 것 · 첫 실행 |
| 설치·연결 | 환경 확인 · 저장소 열기 · MCP·도구 연결 · 정상 확인 |
| 프로젝트 구조 | CLAUDE.md · Agent · Skill · Project SoT · 산출물 위치 |
| 요청 작성법 | 좋은 요청의 필수 입력 · 예시 · 수정 요청법 |
| Agent·Skill | 언제 자동 사용되는지 · 결과를 어떻게 확인하는지 |
| 권한·Human Gate | 자동 실행 범위 · 승인 필요 범위 · 금지 작업 |
| 문제 해결 | 연결 실패 · 파일 충돌 · 근거 부족 · 결과 불일치 |
| 업데이트 | 버전 · 변경 내용 · 영향 범위 · 재학습 필요 여부 |

각 탭 작성 순서:

`언제 필요한가 → 준비물 → 따라 하기 → 정상 결과 → 실패 시 조치 → 관련 템플릿`

## 3. 워크플로우별 사용설명서

각 상세 페이지 공통 상단 탭:

`개요 / 언제 사용 / 준비물 / 단계별 실행 / Human Gate / Agent·Skill / 템플릿 / 실행 예시 / 문제 해결`

### UI 구축·콘텐츠 제작

하위 유형:

- UI 구축
- 운영성 상세페이지
- 콘텐츠·이벤트 페이지
- 마케팅 배너

유형마다 요구사항·정보구조·산출물 규격·QA가 다르므로 하나의 `운영 디자인` 흐름으로 합치지 않는다.

### AI 비주얼 에셋

카테고리:

- 인물 Identity
- 포즈·표정·앵글
- 의상·액세서리
- 제품·목업
- 배경·공간·텍스처
- 타이포·카피 비주얼

인물 Identity 필수 9단계:

1. Brief & Rights
2. Casting Exploration
3. Casting Lock — Human Gate
4. Identity Master
5. Variation Production
6. Channel Application
7. Identity & Brand QA
8. Library Promotion
9. Usage & Learning

### AI 영상·필름

하위 유형:

- 15초·30초
- 게임 영상
- 브랜드 필름
- 90초 이상 시네마틱
- 스토리보드·연출 기획

모든 유형에 사운드 방향·음악·효과음·환경음·믹싱·권리 확인을 포함한다.

## 4. Playbook 콘텐츠 템플릿

```text
이름
목적
사용 시점 / 사용하지 않는 시점
요청 전 필수 입력
단계별 실행
단계별 Agent·Skill
Human Gate와 결정권자
필수 산출물
완료 조건
품질·권리 체크리스트
Project SoT 저장 위치
Asset Library 승격 조건
Claude Code 요청 예시
자주 발생하는 실패와 복구 방법
버전·담당 Owner·최근 수정일
```
