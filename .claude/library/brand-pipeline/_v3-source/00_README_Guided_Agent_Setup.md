# Hyojung Guided Brand Proposal Agent v3 · 사용법

## 목적
이 파일 세트는 Claude에서 브랜드 제안 프로세스를 **자동 질문형 에이전트**처럼 작동시키기 위한 설계입니다.

중요한 구조는 다음입니다.

1. 에이전트가 현재 단계를 판단한다.
2. 필요한 질문을 3개 이하로 묻는다.
3. 사용자가 답하면 다음 단계 산출물을 만든다.
4. 단계별 검증 게이트를 통과하지 못하면 다시 질문한다.
5. 모든 상태값을 `project_state`로 누적한다.
6. 최종 단계에서만 이미지 프롬프트와 슬라이드 HTML을 생성한다.

## 기존 1차·2차·3차 흐름 유지
외부 출처명은 노출하지 않습니다. 기존의 1차·2차·3차 구조는 아래 이름으로 재정의합니다.

- Stage 1 · Research & Positioning
- Stage 2 · Visual Identity & Concept System
- Stage 3 · Brand System & Slide HTML Export

## Claude 웹 Project에서 쓰는 법
1. Claude에서 새 Project를 만듭니다.
2. 아래 파일들을 Project Knowledge에 업로드합니다.
   - 01_Guided_Agent_Project_Instructions.md
   - 02_State_Machine_and_Gates.md
   - 03_Question_Flow_Runbook.md
   - 04_Claude_Code_Subagent_Optional.md
3. Project Instructions에는 `01_Guided_Agent_Project_Instructions.md` 전문을 붙여넣습니다.
4. 새 채팅에서 아래 문장으로 시작합니다.

```md
Hyojung Guided Brand Proposal Agent로 시작합니다.
먼저 Stage 0 Intake만 진행하세요.
한 번에 많은 질문을 하지 말고, 지금 필요한 질문 3개만 해주세요.
아직 리서치, 컨셉, 슬라이드 HTML은 생성하지 마세요.
```

## Claude Code에서 쓰는 법
Claude Code를 쓰는 경우 `04_Claude_Code_Subagent_Optional.md` 내용을 `.claude/agents/hyojung-brand-process-orchestrator.md`로 저장합니다.
기존 에이전트 수가 이미 많다면 신규 에이전트로 추가하지 말고 `.claude/library/hyojung-guided-agent/`에 라이브러리로 저장한 뒤 CLAUDE.md에서 호출 규칙만 추가합니다.

## 운영 원칙
- 질문은 단계당 3개 이하.
- 사용자가 답하지 않은 정보는 임의 확정하지 않고 `Assumption`으로 표시.
- Gate가 빨간색이면 다음 단계로 넘어가지 않음.
- 사용자가 “계속”이라고 하면 가장 합리적인 가정으로 진행하되, 가정 목록을 먼저 제시.
- 최종 슬라이드 HTML은 Stage 3 검증 통과 후에만 생성.
