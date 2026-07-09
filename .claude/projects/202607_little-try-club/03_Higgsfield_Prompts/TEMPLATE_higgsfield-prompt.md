# Higgsfield 프롬프트 템플릿 (Little Try Club)

> **사용법**: 이 템플릿을 복사해서 각 컷의 프롬프트를 작성합니다.
> - 컷 시간: 4-6초
> - 해상도: 1080x1920 (9:16 Shorts)
> - 핵심: 스타일 문장 필수, 캐릭터 외형 반복 명시, 네거티브 프롬프트 추가

---

## 컷 1 — [행동 요약] (4-6초)

### 메타데이터

**에피소드**: [에피소드명]  
**컷번호**: 1 / 6  
**캐릭터명**: [Juni / Doni / Teo / Tei]  
**의상**: [기준 이미지 기반 정확한 설명]  

### 장면 구성

**배경**: [단일 컬러 또는 단순 배경]  
**오브제**: [1-3개, 생활습관 문제 상징하는 것]  
**조명**: 따뜻한 스튜디오 조명  
**분위기**: [시정/조용함/창피함 등]

### 캐릭터 행동

**상황**: [생활 습관 문제 구체적 설명]  
**행동**: [4-6초 동안의 구체적 행동 시퀀스]  
**표정**: [표정 및 감정 상태]  
**카메라**: [고정 / 천천히 줌인 / 부드러운 패닝 등]

---

## Higgsfield 프롬프트

### 스타일 (공통)

Clean surreal kids fashion editorial mood, bold saturated solid-color studio wall (not washed-out pastel), a flat graphic art backdrop panel behind the character like a photo studio set piece, a patterned or colorful floor (confetti print, checkered rug, or color-block flooring — never a plain unpatterned carpet), bold tactile objects, oversized knitted or fuzzy props, vivid but tasteful color accents, playful graphic patterns, soft matte 3D storybook character style, warm gentle lighting, minimal but visually rich composition, not cluttered, not realistic, not glossy plastic, not flat/empty/static-looking.

### 캐릭터 (반드시 기준 이미지 기반)

[캐릭터 이름] is a [연령대] Korean child character with:
- Face shape: [정확한 얼굴형]
- Hair: [머리 스타일/색상]
- Eyes: [눈의 형태/색상]
- Clothing: [의상 색상/패턴/질감]
- Overall proportions: [신체 비율]
- Facial expression: [표정]

**Base reference**: [캐릭터 이름]_reference_01.png (maintain EXACT appearance, DO NOT modify facial features, hair, clothing colors, or proportions)

**오브제(소품)에 반복 등장하는 상징물이 있다면(예: 블록) 캐릭터 기준 이미지와 함께 소품 기준 이미지도 항상 병행 참조할 것** — `01_Character_Bible/props/` 폴더 참고. 소품 기준 이미지가 없으면 컷마다 텍스트 설명만으로 생성되어 모양/비율이 미세하게 달라지는 문제가 생긴다 (EP001에서 실제로 발생, 2026.07.09).

### 배경 및 공간

**REQUIRED — 벽과 바닥을 분리해서 명시할 것** (둘 다 무지 파스텔이면 재작업 대상):
- 벽: 채도 높은 쨍한 단색 [예: bold butter yellow / cobalt blue / sage green — NOT washed-out pastel]
- (권장) 캐릭터 뒤에 flat graphic art backdrop panel (추상 색면/식물 모티프, 스튜디오 세트처럼 인공적으로) — 오브제 컬러와 연결되는 팔레트
- 바닥: [컨페티 패턴 / 체크 러그 / 컬러 블록 바닥] 중 하나 필수 — 무지 카펫만 쓰지 않기
- 넓은 여백은 유지하되 "밋밋함"과는 다름 — 여백이 있어도 벽/바닥의 색·패턴은 강할 것

### 오브제 (Clean Surreal 무드)

[오브제 1]: [크기, 위치, 질감, 색상]  
[오브제 2]: [크기, 위치, 질감, 색상] (선택적)  
[오브제 3]: [크기, 위치, 질감, 색상] (선택적)

Tactile textures: chunky knitted fabric, soft felt, fuzzy textile, corduroy, soft wool — matte, never shiny, never painted wood/hard clay  
Object scale: **REQUIRED — object(s) must be equal to or larger than the character**, e.g. "roughly two-thirds of [캐릭터명]'s height" or "taller than [캐릭터명]." This surreal scale-contrast is the single most important visual signature of the show (see `00_Brand_Bible/visual-tone-bible.md` §2/§7). Do NOT default to toy-scale or hand-sized objects — that reads as flat/static/generic pastel, not "Clean Surreal Fashion Playground."

### 카메라 및 프레이밍

[카메라 타입]: [고정 / 천천히 줌인 5% / 부드러운 패닝 등]  
캐릭터 배치: 화면 중심 또는 3분할 지점  
프레이밍: 깨끗하고 단순한 구성, 강력한 시각적 임팩트

### 질감 및 느낌

- Matte finish on all surfaces
- Soft, touchable quality (not plastic, not glossy)
- Warm, gentle lighting with soft shadows
- Handmade storybook aesthetic
- Inviting and cozy atmosphere

---

## 네거티브 프롬프트

```
## 절대 금지 사항 (MUST NOT):

❌ Character appearance:
- Modify character's facial features (face shape, eyes, nose, mouth proportions)
- Change hair style or color from reference image
- Alter clothing colors, patterns, or silhouette
- Make character look younger or older than [연령대]
- Glossy plastic-like texture on character
- Hyper-realistic skin texture

❌ Clothing & Details:
- Change [캐릭터명]'s outfit colors or patterns
- Add new accessories not in reference image
- Modern sportswear or fashion runway look
- Over-decorated costume

❌ Background & Environment:
- Complex, detailed, realistic backgrounds
- Classroom-like educational setting
- Cluttered environments with many objects
- Photo-realistic natural landscapes
- Busy city, forest, or detailed landscapes
- Toys scattered everywhere like a nursery

❌ Visual Style:
- Glossy or shiny plastic quality
- Metallic or reflective surfaces
- Hyper-realistic rendering
- Hard toy figure look
- Anime or cartoon style
- Glass-like reflective eyes
- Fluorescent neon colors

❌ Other:
- Readable text, letters, numbers, logos, branding in image
- YouTube title cards or captions
- Subtitles or speech bubbles
- Background music or sound (image only)
- Similar to famous existing characters

## 권장 유지사항 (MUST KEEP):
✅ Soft matte 3D storybook aesthetic
✅ Clean, minimal composition
✅ Warm, gentle lighting
✅ Tactile, touchable quality (fabric, felt, clay)
✅ Playful but not childish mood for 8-12 year-olds
✅ Character's exact appearance from reference image
```

---

## 생성 후 QC 체크

- [ ] 캐릭터 외형이 기준 이미지와 정확히 일치하는가?
- [ ] 의상 색상/패턴이 유지되었는가?
- [ ] 배경이 단순하고 깨끗한가?
- [ ] 오브제가 1-3개만 사용되었는가?
- [ ] 글자나 로고가 없는가?
- [ ] 조명이 따뜻하고 부드러운가?
- [ ] 4-6초 분량이 적절한가?

---

## 팁 (Claude 작성 시 참고)

1. **캐릭터 일관성**: 같은 캐릭터가 다른 에피소드에 나올 때 절대 외형 변경 금지
2. **오브제 활용**: 생활습관 문제를 직접 설명하지 말고, 상징하는 오브제로 보여주기
3. **배경의 역할**: 배경은 캐릭터를 돋보이게 하기 위한 스테이지 (주인공이 아님)
4. **색 대비**: 포인트 컬러 2-3개로 제한 (배경 60%, 캐릭터 25%, 패턴 10%, 악센트 5%)
5. **카메라**: 빠른 움직임보다 느린 줌인이나 부드러운 패닝이 스토리북 무드를 살림
6. **오브제 스케일 = 생명선**: "child-hand-sized", "small block" 같은 표현을 쓰면 결과물이 정적이고 밋밋한 파스텔 사진처럼 나온다. 오브제는 항상 캐릭터와 비슷하거나 더 크게(예: "two-thirds of [캐릭터]'s height", "taller than [캐릭터]") 명시할 것 — 이게 "Clean Surreal Fashion Playground"를 실제로 보이게 만드는 핵심 장치다.
7. **질감 지정 필수**: "matte clay/wood texture"만 쓰면 장난감처럼 밋밋해진다. 오브제에는 항상 "chunky knitted fabric", "soft felt", "visible yarn stitching" 같은 촉각적 질감 키워드를 넣을 것.
8. **"static"이라는 단어를 프롬프트에 쓰지 말 것**: 카메라가 고정이어도 "static shot"이라 쓰면 결과물이 정말 정적으로 나온다. "fixed camera, energetic/alive composition" 식으로 표현할 것.
9. **여백 관리**: 배경 여백은 좋지만, 오브제가 작으면 여백이 "텅 빈 느낌"으로 읽힌다. 오브제를 크게 키우면 자연스럽게 해결됨 (팁 6 참고).
10. **영상 모션 프롬프트에 "soft/subtle/gentle motion"만 쓰지 말 것 (2026.07 컷1에서 실제로 발생한 실수)**: image-to-video 단계에서 "soft natural motion, subtle breathing/idle movement" 식으로만 쓰면 모델이 슬로우모션처럼 느리게 움직인다. 반드시 **"at a normal, natural real-time pace, NOT slow motion"**을 명시하고, 행동이 클립 길이(4-6초) 안에 자연스럽게 끝나도록 구체적 타이밍을 함께 적을 것 (예: "completes the motion within about 2 seconds, at everyday walking-pace speed").
11. **반복 소품(블록 등)도 캐릭터처럼 기준 이미지를 만들어 항상 참조할 것 (2026.07 EP001에서 실제로 발생한 실수)**: 소품을 텍스트 설명("cobalt blue knitted block")만으로 매 컷 새로 생성하면 큐브 비율/크기가 컷마다 미세하게 달라진다. 캐릭터 기준 이미지 1장을 만들듯 소품도 `01_Character_Bible/props/[소품명]_reference_01.png`로 한 번 고정 생성해두고, 이후 모든 컷의 스틸 생성 시 캐릭터 기준 이미지와 함께 medias 배열에 같이 넣을 것. 비용은 소품당 최초 1회(2크레딧)뿐이고 이후 추가 비용 없음.
