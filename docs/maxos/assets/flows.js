/* MAX OS 워크플로우 데이터 — 와이어프레임 v1 확정본
 * 구조: 갈래 → 하위 유형 → 3단계
 * 담당 원칙: 한 사람이 1~3단계를 이어서. 디렉터는 gate:true 단계 끝에서 방향만 컨펌.
 */
window.FLOWS = {
  entry: [
    { label: '일이 들어와요', note: '어디로 오든 여기서 시작합니다.' },
    { label: '새 일인지, 하던 일인지 정해요', note: '하던 일이면 「진행 중인 일」에서 찾으시면 됩니다.' },
    { label: '어떤 일인지 골라요', note: '만들 결과물만 고르면 됩니다.' },
    { label: '작업 공간이 열려요', note: 'Figma 템플릿을 복제해 새로 만듭니다. 맡은 사람이 끝까지 이어서 합니다.' }
  ],
  end: [
    { label: '사람이 확인해요', en: 'Human Review', note: '방향 정할 때 한 번, 내보내기 전에 한 번 봅니다. 통과·보완·다시 중 하나를 그 자리에서 정합니다.' },
    { label: '이 일의 기록으로 남겨요', en: 'Project SoT', note: '무엇을 왜 그렇게 정했는지 한곳에 모읍니다. 다음 사람이 처음부터 다시 묻지 않도록.' },
    { label: '다시 쓰게 모아둬요', en: 'Asset Library', note: '검수를 지난 것만 올라갑니다. 지금은 Figma 자산 파일에 모읍니다.' }
  ],
  branches: [
    {
      id: 'proposal', label: '제안서 만들기',
      when: '아직 우리 일이 아닐 때 고릅니다. 제안이 통과하면 아래 세 갈래 중 하나로 이어집니다.',
      subtypes: [{
        id: 'rfp', label: '제안서 만들기', formal: '제안·RFP',
        steps: [
          { t: '요청 뜯어보기', get: 'RFP 문서·요청 메일', make: '과업 정리표와 확인 질문 목록', next: '바로 2단계로',
            call: [{ n: 'marketer', w: 'RFP를 뜯어서 진짜 니즈까지 한 번에' }] },
          { t: '조사하고 방향 잡기', get: '과업 정리표', make: '시장·경쟁 정리와 방향 한 문장', gate: true,
            call: [{ n: 'marketer', w: '조사 이어서' }, { n: 'concept-director', w: '관점 한 문장 고정' }] },
          { t: '목업·제안서 만들기', get: '확정된 방향', make: '제안서와 목업 시안', next: '내보내기 전 최종 확인',
            call: [{ n: 'mx-deck-design', sk: 1, w: '16:9 제안서 덱' }, { n: 'visual-generator', w: '목업 이미지' }] }
        ]
      }]
    },
    {
      id: 'build', label: '화면·페이지·배너 만들기',
      when: '일이 확정되면 여기서 만듭니다. 무엇을 만드는지에 따라 순서가 달라서, 아래에서 한 번 더 고르시면 됩니다.',
      subtypes: [
        { id: 'ui', label: '앱·웹 화면 만들기', formal: 'UI 구축', steps: [
          { t: '무엇을 만들지 정리하기', get: '기획서·화면 목록·기존 서비스 링크', make: '요구사항 정리본과 화면 목록표', next: '바로 2단계로',
            call: [{ n: 'rfp-analyst', w: '요구사항 분해' }, { n: 'reference-curator', w: '참고 사례' }] },
          { t: '구조 잡고 화면 만들기', get: '확정된 화면 목록', make: '화면 흐름도와 핵심 화면 시안, 컴포넌트 세트', gate: true,
            call: [{ n: 'design-system-guardian', w: '시스템 지켰는지' }, { n: 'figma-bridge', w: 'Figma 왕복' }] },
          { t: '눌러보고 고치기', get: '확정된 방향', make: '눌러보는 시안과 검수표 통과 기록', next: '내보내기 전 최종 확인',
            call: [{ n: 'design-critique', w: '눌러보기 전 결함 잡기' }] }
        ]},
        { id: 'detail', label: '상품 상세페이지 만들기', formal: '운영성 상세페이지', steps: [
          { t: '상품 정보 모으기', get: '상품·캠페인 자료, 사진, 문구', make: '정보 정리표와 빠진 자료 요청 목록', next: '바로 2단계로',
            call: [{ n: 'rfp-analyst', w: '빠진 자료 목록 뽑기' }] },
          { t: '읽는 순서 잡고 비주얼 만들기', get: '정보 정리표', make: '정보 순서안과 본문 비주얼', gate: true,
            call: [{ n: 'reference-curator', w: '레퍼런스' }, { n: 'visual-generator', w: '본문 비주얼' }] },
          { t: '모바일까지 맞추고 검수하기', get: '확정된 방향', make: '기기별 페이지와 검수표 통과 기록', next: '내보내기 전 최종 확인',
            call: [{ n: 'design-critique', w: '시안 검수' }, { n: 'fact-checker', w: '문구·수치 확인' }] }
        ]},
        { id: 'content', label: '콘텐츠·이벤트 페이지 만들기', formal: '콘텐츠·이벤트 페이지', steps: [
          { t: '목표와 성공 기준 정하기', get: '캠페인 목적·기간·타깃', make: '목표 한 문장과 성공 기준 숫자', next: '바로 2단계로',
            call: [{ n: 'rfp-analyst', w: '목표 정리' }, { n: 'critic', w: '현실성 점검' }] },
          { t: '콘셉트와 이야기 흐름 짜기', get: '목표와 성공 기준', make: '콘셉트 한 장과 화면 흐름', gate: true,
            call: [{ n: 'concept-director', w: '관점' }, { n: 'brainstormer', w: '발산' }, { n: 'storytelling', sk: 1, w: '이야기 흐름' }] },
          { t: '만들고 올려서 확인하기', get: '고른 콘셉트', make: '페이지·인터랙션과 실제 링크 점검 기록', next: '내보내기 전 최종 확인',
            call: [{ n: 'design-critique', w: '퍼블리싱 전 검수' }] }
        ]},
        { id: 'banner', label: '광고 배너 만들기', formal: '마케팅 배너', steps: [
          { t: '메시지·채널·규격 정하기', get: '채널 목록과 소재 규격, 집행 일정', make: '규격표와 메시지 한 줄', next: '바로 2단계로',
            call: [{ n: 'rfp-analyst', w: '채널·규격 정리' }] },
          { t: '대표 한 장 만들기', get: '규격표와 메시지', make: '대표 배너 한 장과 문구 후보', gate: true,
            call: [{ n: 'brainstormer', w: '아이디어' }, { n: 'visual-generator', w: 'KV' }, { n: 'viral-hooks', sk: 1, w: '카피 첫 줄' }] },
          { t: '규격별로 늘리고 검수하기', get: '고른 대표 한 장', make: '규격별 배너 전체와 브랜드 검수 기록', next: '내보내기 전 최종 확인',
            call: [{ n: 'design-system-guardian', w: '규격' }, { n: 'design-critique', w: '브랜드 검수' }] }
        ]}
      ]
    },
    {
      id: 'image', label: 'AI 이미지 만들기',
      when: 'AI로 이미지를 만들 때 고릅니다. 사람이 기본이고 제품·배경·글자도 같은 순서로 갑니다.',
      subtypes: [{ id: 'asset', label: 'AI 이미지 만들기', formal: 'AI 비주얼 에셋', steps: [
        { t: '누구를 쓸지 고르고 권리 확인하기', get: '사용 목적·채널·국가·기간', make: '후보 인물과 사용 범위 메모', gate: true,
          call: [{ n: 'moodboard-builder', w: '후보 만들기' }, { n: 'legal-compliance', w: '권리 범위 확인' }] },
        { t: '포즈·표정·앵글 늘리기', get: '확정된 인물과 기준 이미지', make: '파생 컷과 프롬프트 기록', next: '바로 3단계로',
          call: [{ n: 'visual-generator', w: '파생 생성' }, { n: '26raw-realism', sk: 1, w: '리얼리즘 프롬프트' }] },
        { t: '화면에 넣고 다시 쓰기', get: '검수를 지난 컷', make: '채널별 적용본과 재사용 메모', next: '내보내기 전 최종 확인',
          call: [{ n: 'design-critique', w: '얼굴·손·브랜드 일관성' }] }
      ]}]
    },
    {
      id: 'video', label: '영상 만들기',
      when: '영상을 만들 때 고릅니다. 길이에 따라 준비물이 달라서 몇 초짜리인지 먼저 정합니다. 음악과 음원 권리는 두 경우 모두 1단계에서 잡습니다.',
      subtypes: [
        { id: 'short', label: '15초·30초 영상', steps: [
          { t: '콘셉트·사운드 방향 정하기', get: '캠페인 목적·길이·매체', make: '콘셉트 한 장과 음악·효과음 방향, 사용 권리 확인', gate: true,
            call: [{ n: 'concept-director', w: '관점' }, { n: 'brainstormer', w: '콘셉트 발산' }] },
          { t: '스토리보드·키프레임 만들기', get: '고른 콘셉트', make: '컷별 보드와 대표 프레임', next: '바로 3단계로',
            call: [{ n: 'storyboard-maker', w: '컷별 콘티·키프레임' }] },
          { t: '생성·편집·믹싱하기', get: '확정된 보드', make: '완성 영상과 음원 권리 기록', next: '내보내기 전 최종 확인',
            call: [{ n: 'visual-generator', w: '생성' }, { n: 'design-critique', w: '검수' }] }
        ]},
        { id: 'film', label: '90초 넘는 영상', steps: [
          { t: '트리트먼트·사운드 방향 정하기', get: '브랜드 메시지·러닝타임·매체', make: '트리트먼트와 음악·효과음·환경음 방향, 사용 권리 확인', gate: true,
            call: [{ n: 'concept-director', w: '관점' }, { n: 'reference-curator', w: '연출 레퍼런스' }] },
          { t: '스토리보드·샷리스트 만들기', get: '확정된 트리트먼트', make: '컷별 보드와 샷리스트, 생성 프롬프트', next: '바로 3단계로',
            call: [{ n: 'storyboard-maker', w: '샷리스트까지' }] },
          { t: '생성·편집·믹싱하고 검수하기', get: '확정된 샷리스트', make: '완성 영상과 믹싱본, 음원 권리 기록', next: '내보내기 전 최종 확인',
            call: [{ n: 'visual-generator', w: '생성' }, { n: 'review-panel', w: '5관점 검토' }] }
        ]}
      ]
    }
  ],
  always: [
    { when: '내보내기 직전', call: [{ n: 'delivery-gate', w: '잘림·PII·링크 점검' }, { n: 'tone-guardian', w: '메일 톤' }] },
    { when: '숫자가 들어가면', call: [{ n: 'fact-checker', w: '수치·인용 검증' }] }
  ],
  offProject: [
    { s: '견적 뽑아야 할 때', call: [{ n: 'quote-accountant', w: '원가표 + 마진 시나리오 (최종가는 사람이)' }] },
    { s: '고객사 미팅 들어가기 전', call: [{ n: 'account-radar', w: '히스토리·리스크 브리핑' }] },
    { s: '현황·가동률 물어볼 때', call: [{ n: 'project-manager', w: '노션·시트 읽어서 정리 (읽기만)' }] },
    { s: '계약서·NDA 볼 때', call: [{ n: 'legal-compliance', w: '쟁점 플래그 (자문 대체 아님)' }] },
    { s: '외주 구할 때 / 채용', call: [{ n: 'vendor-radar', w: '외주 풀' }, { n: 'hiring-radar', w: '채용 파이프라인' }] },
    { s: '산출물 여러 개 묶을 때', call: [{ n: 'project-index', w: '인덱스 페이지 자동 생성' }] },
    { s: '긴 문서 한 장으로', call: [{ n: 'tab-deck-design', sk: 1, w: '섹션 8개↑' }, { n: 'list-deck-design', sk: 1, w: '수치 리포트' }] }
  ]
};
