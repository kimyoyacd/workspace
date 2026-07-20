# MAX 포인트 컬러 팔레트 (표준)

> MAX실 디자인 관련 덱·대시보드·HTML 산출물은 모두 이 팔레트를 사용한다.
> 출처: MAX실 OS v8 워크플로우 맵 (maxos-workflow.html)

## 포인트 컬러 6종

| 이름 | HEX | CSS 변수 | 용도 (에이전트 매핑) |
|---|---|---|---|
| Naranja (주황) | `#ff6e23` | `--naranja` | Marketer · 강조 CTA |
| Azul (파랑) | `#2f53f9` | `--azul` | Strategist · 링크·정보 |
| Rosa (핑크) | `#ff86f6` | `--rosa` | Designer · 크리에이티브 |
| Verde (딥그린) | `#01524d` | `--verde` | Director · 검증·신뢰 |
| Neon (연두) | `#c5ff79` | `--neon` | Operator · 하이라이트 배경 |
| Gate Red | `#e0004d` | `--gate-red` | FINAL 게이트 · 경고·마감 |

## 사용 규칙
- 기본 바탕: 흰색(#fff) + 잉크 계열 텍스트(#111 / #666 / #9CA3AF)
- 포인트 컬러는 도트·태그·보더·헤더 등 소면적 강조에 사용 (대면적 배경 금지, Neon 제외)
- Neon(#c5ff79)만 하이라이트 배경으로 대면적 허용
- HR·Legal 등 중립 역할은 블랙(#000) 사용

## CSS 스니펫
```css
:root {
  --rosa:    #ff86f6;
  --azul:    #2f53f9;
  --naranja: #ff6e23;
  --neon:    #c5ff79;
  --verde:   #01524d;
  --gate-red:#e0004d;
}
```

## 타이포 (워크플로우 맵 기준)
- 본문: Geist (+ Apple SD Gothic Neo / Malgun Gothic)
- 모노(라벨·코드): Geist Mono
- 세리프(제목 이탤릭): Instrument Serif
