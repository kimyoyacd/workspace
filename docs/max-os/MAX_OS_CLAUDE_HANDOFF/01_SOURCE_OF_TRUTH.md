# MAX OS Source of Truth 및 출처 지도

## 자료별 역할

| 자료 | 담당 범위 | 사용 방식 | 사용 금지 방식 |
|---|---|---|---|
| `MAX_OS_HOME_WIREFRAME.html` | 홈 시각 스타일·타이포·버튼·카드·여백·정보 밀도 | 홈 구현 기준 | 예시 숫자를 실제 데이터로 사용 |
| `references/MAX_OS_HOME_BALANCED_REFERENCE.png` | 홈의 여백과 요약 카드 수준 | 홈 밀도 검수 | 상세 운영 정보를 홈에 추가 |
| `references/MAX_OS_OPERATIONS_OVERVIEW_REFERENCE.png` | 운영 현황 상세 카드·표·그래프 | `운영 현황 > 운영 요약` 참고 | 홈 화면 구조로 사용 |
| `MAX_OS_SITE_IA_CLAUDE_CODE_BRIEF.md` | 제품·IA·라우트·페이지 역할 | 정보구조 SoT | 저장소 조사 없이 그대로 구현 |
| Dashboard v8 | 현재 운영 콘텐츠·데이터 연동 | 실제 필드와 기능 추적 | 기존 9개 탭을 그대로 새 메뉴로 복제 |
| Figma node `272:2` | 전체 AX 업무 흐름 | `워크플로우 > 전체 AX 시스템`의 원본 | 단순 장식용 홈 다이어그램으로 축소 |
| Figma node `191:188` | UI 구축·콘텐츠 제작의 AI 적용 맥락 | 해당 워크플로우 상세 근거 | 모든 제작 유형의 공통 흐름으로 일반화 |
| AX 운영 벤치마크 | 조직·역할·거버넌스 근거 | 역할·운영 기준 콘텐츠 | 대시보드 운영 데이터와 혼합 |

## 외부 기준 링크

- Dashboard v8: https://deploy-preview-30--luxury-griffin-44f528.netlify.app/docs/maxosdashboardv8.html
- 전체 AX Product Flow: https://www.figma.com/design/NmXRGXueVLvby4xEp9sgP9/-MAX--AI-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0?node-id=272-2
- MAX OS 관련 Figma: https://www.figma.com/design/NmXRGXueVLvby4xEp9sgP9/-MAX--AI-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0?node-id=222-5697
- UI 제안 프로세스: https://www.figma.com/design/NmXRGXueVLvby4xEp9sgP9/-MAX--AI-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0?node-id=191-188

## 충돌 해결 규칙

1. 실제 운영 데이터와 시안 숫자가 다르면 실제 데이터가 우선한다.
2. 메뉴 명칭과 경로는 IA 문서가 우선한다.
3. 디자인 속성과 홈의 카드 밀도는 HTML과 균형형 홈 이미지가 우선한다. 상세 운영 카드의 표현은 운영 현황 이미지가 우선한다.
4. 업무 단계는 해당 워크플로우 Playbook이 우선한다.
5. 사람의 승인이 필요한 항목은 자동으로 보정하지 않고 Human Gate로 표시한다.
6. 불명확한 내용은 구현 전에 `확인 필요 목록`으로 분리한다.
