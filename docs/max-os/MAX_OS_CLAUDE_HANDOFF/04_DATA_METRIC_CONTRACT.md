# 데이터·지표 계약

## 원칙

- 시안의 숫자는 레이아웃 예시이며 실제 값이 아니다.
- 실제 데이터가 연결되지 않으면 `연결 안 됨`과 마지막 정상 동기화 시간을 표시한다.
- mock fallback은 개발 모드에서만 사용하고 화면에 `샘플 데이터` 배지를 노출한다.
- 계산식·임계값·필드 매핑은 코드와 별도 설정으로 관리한다.

## 홈 KPI 정의

| 지표 | 정의 | 필요한 필드 | 상세 이동 |
|---|---|---|---|
| 진행 중 프로젝트 | 현재 실행·검수 중인 프로젝트 수 | project_id, status | 프로젝트 현황 |
| 신규 인입 | 선택 기간에 접수된 신규 요청 | request_id, created_at | 업무 인입 목록 |
| 승인 대기 | Human Gate가 pending인 항목 | gate_id, gate_status | 일정·Gate |
| 7일 내 마감 | 오늘부터 7일 안에 마감되는 미완료 프로젝트 | due_date, status | 프로젝트 현황 |
| 주의 프로젝트 | 지연·차단·과부하·근거 부족 규칙 중 하나 이상 충족 | risk_type, severity | 리소스·위험 |

## 리소스 지표

| 지표 | 산식·판정 |
|---|---|
| 개인 가동률 | 확정 배정시간 ÷ 표준 가용시간 × 100 |
| 전체 가동률 | 전체 확정 배정시간 합 ÷ 전체 표준 가용시간 합 × 100 |
| 유휴 | 가동률이 승인된 하한 미만인 인원 |
| 적정 | 승인된 하한 이상 100% 이하인 인원 |
| 과부하 | 가동률이 100%를 초과한 인원 |
| 가용 용량 | `max(표준 가용시간 - 확정 배정시간, 0)`의 합 |
| 예정 수요 | 예정 프로젝트의 기간별 예상 투입시간 합 |

유휴 하한은 임시로 가정하지 않는다. 운영 책임자가 승인한 값을 환경 설정 또는 관리자 설정에서 관리한다.

## 필수 데이터 개체

### Project

`id, name, client, service_type, stage, status, gate_status, owner_id, contributors, start_date, due_date, planned_hours, actual_hours, risk_level, risk_reason, sot_url, updated_at`

### Member

`id, name, role, team, weekly_capacity_hours, allocated_hours, utilization_rate, availability_status, next_available_date`

### Gate

`id, project_id, gate_type, status, decision_owner_id, requested_at, due_at, decided_at, evidence_url, comment`

### Workflow

`id, type, subtype, current_step, required_inputs, required_outputs, human_gates, playbook_url, version`

### Asset

`id, project_id, asset_type, identity_id, rights_scope, qa_status, library_status, source_model, prompt_version, usage_history, performance, updated_at`

### Task

`id, project_id, sprint_id, workflow_step, name, description, status, priority, owner_id, contributors, start_date, due_date, planned_hours, actual_hours, progress, dependency_ids, gate_id, blocker_reason, output_url, updated_at`

### Assignment

`id, member_id, project_id, task_id, role, allocation_hours, allocation_rate, start_date, end_date, status, updated_at`

### TimeEntry

`id, member_id, project_id, task_id, work_date, planned_hours, actual_hours, source, updated_at`

### Milestone

`id, project_id, name, type, due_at, status, gate_id, owner_id, updated_at`

## 구현 전에 채울 데이터 소스 표

| 개체 | 실제 소스 | 테이블·DB | 식별자 | 갱신 주기 | Owner | 상태 |
|---|---|---|---|---|---|---|
| Project | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 미확인 |
| Member | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 미확인 |
| Gate | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 미확인 |
| Asset | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 확인 필요 | 미확인 |
