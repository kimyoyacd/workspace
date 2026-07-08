# Claude 통합 지시문

아래 캐릭터 바이블은 **Little Habit Club / 작은 습관 클럽**의 고정 캐릭터 설정이다.

앞으로 에피소드 기획, Higgsfield 영상 프롬프트, 썸네일 기획, 성우 대본, 자막, 유튜브 업로드 패키지를 만들 때 이 설정을 절대 변경하지 않는다.

캐릭터의 얼굴, 머리, 의상, 색감, 나이대, 성격 역할은 고정이다.  
새로운 에피소드가 필요해도 캐릭터의 본질은 바꾸지 않는다.

이미지는 기준 캐릭터 이미지와 캐릭터 시트를 함께 참고하되, **Higgsfield 영상 생성용으로는 단일 기준 캐릭터 이미지를 우선 사용한다.**  
캐릭터 시트는 전체 성격과 포즈를 이해하기 위한 참고 자료로 사용한다.

## Claude에게 추가로 넣을 운영 원칙

- 타겟 시청층은 8–12세다.
- 콘텐츠는 30초 Shorts 기준으로 기획한다.
- Higgsfield에는 30초 전체가 아니라 **4–6초 컷 단위**로 프롬프트를 작성한다.
- 각 컷은 하나의 행동만 담는다.
- 화면 안에 읽을 수 있는 글자, 로고, 자막을 생성하지 않는다.
- 자막, 성우, 효과음은 후편집에서 넣는다.
- 교육을 직접 설명하지 않고 행동으로 보여준다.
- 첫 2–3초 안에 문제가 바로 보이는 후킹 구조를 우선한다.

## 비주얼 톤 업데이트 반영 규칙

앞으로 모든 에피소드, 썸네일, Higgsfield 프롬프트에는 `06_Visual_Tone_Bible.mdv`의 **Clean Surreal Fashion Playground** 무드를 반영한다.

핵심 방향:

- 배경은 단순하고 깨끗하게 유지한다.
- 생활 습관 문제를 상징하는 오브제는 크게, 감각적으로 배치한다.
- 오브제는 니트, 퍼, 펠트, 패브릭, 매트 클레이처럼 촉각적인 질감을 사용한다.
- 컬러는 따뜻한 빈티지 베이스에 코발트 블루, 토마토 레드, 코랄, 버터 옐로우, 그라스 그린 같은 포인트 컬러를 사용한다.
- 스트라이프, 체크, 컬러 블록, 하운드투스 같은 그래픽 패턴을 후킹 장치로 활용한다.
- 교실처럼 설명적인 배경보다, 패션 에디토리얼 세트처럼 감각적인 미니멀 공간을 우선한다.
- 단, 캐릭터의 얼굴, 의상, 성격, 나이대는 절대 바꾸지 않는다.

Higgsfield 스타일 문장에는 필요 시 아래 문장을 추가한다.

```text
Clean surreal kids fashion editorial mood, simple pastel studio background, bold tactile objects, oversized knitted or fuzzy props, vivid but tasteful color accents, playful graphic patterns, soft matte 3D storybook character style, warm gentle lighting, minimal composition, not cluttered, not realistic, not glossy plastic.
```

## 출력 시 기본 요청 형식 예시

1. 에피소드 제목  
2. 썸네일 후킹 문구 5개  
3. 30초 컷 구성표  
4. 컷별 Higgsfield 프롬프트 6개  
5. 한국어/영어 내레이션  
6. 한국어/영어 자막  
7. 업로드 제목/설명/해시태그  
8. QC 체크리스트  
