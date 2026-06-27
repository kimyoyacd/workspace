# 패키지/제품 비주얼 프롬프트 템플릿 (1차)

> 출처: kyeongahko×Manus 1차 협업 / 합성 프롬프트 출처 Instagram @sequence_ai.
> `visual-generator`(Higgsfield)에서 이 프레임워크로 제품 비주얼을 생성·연출한다.

## 프롬프트 ① 유리병(제품) + 라벨 합성 — 4블록 프레임워크
입력 2장('제품/용기 이미지' + '라벨 이미지')을 정확히 합성할 때.

```
'[제품 이미지]'의 제품 배치(Layout)와 크기 비례를 정확히 따르고,
입력된 '[라벨 이미지]'의 색열과 재질 특성을 분석해 완벽하게 합성하라.

1. [Layout & Geometry] 배치·크기 고정
   - 제품의 위치·각도·크기 비율을 '가이드'로 사용해 정확히 배치
   - 레이아웃·구도를 그대로 유지

2. [Environment Analysis & Lighting] 배경/조명 일관화
   - Light Match: 배경 주광원(Main Light) 방향·그림자 각도를 감지해
     제품에도 동일한 방향의 빛·그림자 적용
   - Color Bleeding: 배경의 전체 색감(Ambient Color)이 제품 가장자리·
     반사광에 은은히 묻어나도록

3. [Physics & Organic Blending] 자연스러운 합성
   - Surface Interaction: 제품이 바닥면(Ground Surface)에 닿는 면적을 분석해
     접촉 그림자(Contact Shadow / Ambient Occlusion) 생성
   - Shadow Fall-off: 그림자 강도(Soft/Hard)를 조절, 배경에 자연스럽게 흐르게
```

## 프롬프트 ② 미니멀 럭셔리 연출 (라벨 교체·배경/조명 변경)
```
A high-end minimalist product photography of a low-profile circular glass jar
of [제품] with a brushed champagne-gold metallic lid. The jar is placed on a
smooth surface in a muted lime-green and pale olive monochromatic setting.
The lighting is extremely soft and diffused, creating a warm, hazy ambient glow
that blurs the line between the floor and the background. Soft-focus aesthetic
with delicate, barely-there shadows. The overall atmosphere is sensory, calm,
and sophisticated, mirroring a luxury fragrance brand's visual style.
8k resolution, professional studio quality, clean and elegant composition.
```

## 프롬프트 ③ 초현실(달리식 그림자) 연출
```
Surrealist product photography. The low-profile jar sits on a reflective surface.
Behind the jar, elongated and distorted silhouettes of [모티프, 예: cilantro leaves]
are projected onto a softly lit violet-grey background, reminiscent of Dalí's shadows.
The jar itself is captured in near-silhouette, with only a glimmer of champagne-gold
light on the metallic lid's edge. Hazy, atmospheric, and artistic.
Strong film grain and analog noise for a sensory texture.
Professional studio lighting with a focus on silhouette aesthetics.
```

## 프롬프트 ④ 톤 매칭 합성 (이전 결과물과 톤 통일)
```
A professional product photography merging the subject of the first image with
the background color and ambient lighting of the second image. The overall lighting
is soft and diffused, resulting in very weak and subtle shadows for the main object.
Specifically, the shadows cast by [모티프] are rendered with high blur and low opacity,
creating an ethereal and clean aesthetic. High resolution, 8k, studio lighting.
```

## 사용 팁
- 모델 선택이 모호하면 Higgsfield `models_explore(action:'recommend')` 먼저.
- 로컬 이미지 입력은 `media_upload_widget` 먼저 호출.
- 컨셉당 2~4 베리에이션 생성 → 사용자 셀렉 → upscale.
- 톤은 brand-tone SoT(`design-sot/brand-tone.md`)와 정합 확인.
