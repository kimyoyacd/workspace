# 디자인 시스템 구현 기준

## 기준 자료

- 시각 스타일: `../MAX_OS_HOME_WIREFRAME.html`
- 홈 정보 밀도: `references/MAX_OS_HOME_BALANCED_REFERENCE.png`
- 운영 현황 상세 표현: `references/MAX_OS_OPERATIONS_OVERVIEW_REFERENCE.png`

## 레이아웃

- 16:9 데스크톱 우선. 기준 검수 폭: 1920, 1440, 1280.
- 좌측 전역 메뉴: 224px 고정. 모바일에서는 드로어.
- 상단: 검색·알림·조직·프로필 유틸리티만 제공.
- 내부 페이지: 제목 아래 sticky 로컬 탭.
- 홈 Hero와 카드 수는 HTML 레퍼런스 수준의 여백을 유지한다.
- 홈에서는 진행 중·승인 대기 등의 숫자와 가동·유휴 리소스 숫자만 크게 보여준다.
- 개인별 가동률·프로젝트 표·위험 사유·Gate 목록·예측 그래프는 운영 현황에서 사용한다.

## 컬러

- 기본: White `#FFFFFF`, Off-white `#F7F7F5`, Black `#0A0A0A`.
- 회색은 위계·비활성·보더에만 사용.
- Orange `#FF6B3D`: 위험·마감·과부하.
- Green `#28C765`: 정상·적정·완료.
- Lavender `#8B7CF6`: 선택·중립 정보·유휴 용량.
- 포인트 컬러는 그래프·태그·상태점에만 사용한다.
- 카드 전체를 포인트 컬러로 채우지 않는다.

## 타이포그래피

- 기본: Pretendard 또는 프로젝트의 한글 Grotesk.
- Hero: 56~72px, 700~800.
- 페이지 제목: 36~48px, 700.
- 섹션 제목: 20~28px, 700.
- 본문: 14~17px.
- 데이터: 32~56px. 날짜·버전·축 라벨은 mono 계열 11~13px.

## 형태

- 카드 라운드: 20~28px.
- 버튼 라운드: 12~18px 또는 pill.
- 보더: 1px `#E6E6E3`.
- 그림자: 계층 구분에 필요한 최소 수준.
- 주요 CTA: 검정 배경·흰색 텍스트.

## 핵심 컴포넌트

`AppShell, GlobalSidebar, UtilityHeader, LocalTabs, FilterBar, KpiCard, ResourceCountCard, StatusTag, ProjectTable, ResourceUtilizationCard, CapacityForecastChart, GateQueue, RiskList, WorkflowEntryCard, DataSourceBadge, EmptyState, ErrorState, LoadingSkeleton`

## 그래프 규칙

- 홈: 숫자와 매우 얇은 보조 추세선만 허용한다.
- 운영 현황의 프로젝트 단계 분포: segmented bar.
- 운영 현황의 개인 가동률: horizontal bar.
- 운영 현황의 가용 용량 대 예정 수요: 2-line 또는 line+area chart.
- 운영 현황의 Gate 대기: 숫자+우선순위 목록.
- 위험은 색만으로 구분하지 않고 텍스트 상태와 아이콘을 함께 사용한다.
