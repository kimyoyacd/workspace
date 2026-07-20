# copywriter 스킬을 플러그인으로 배포하기

**기본은 저장소 공유다.** 팀 전원이 이 `kimyoyacd/workspace` 저장소를 Claude Code에서 쓰면 스킬·코퍼스가 자동 로드되고, 하나의 코퍼스를 같이 키울 수 있다. 아래는 **이 저장소 밖**(다른 클라이언트 프로젝트 저장소, 팀원 개인 PC 등)에서도 카피라이터를 쓰고 싶을 때만 필요하다.

## 언제 플러그인으로 만드나
- 클라이언트 저장소 등 이 워크스페이스가 아닌 곳에서 카피 스킬을 부르고 싶을 때
- 팀원이 개인 `~/.claude/`에 설치해 모든 프로젝트에서 쓰고 싶을 때

주의: 플러그인으로 복제하면 코퍼스가 **두 벌**이 된다(원본=이 저장소, 사본=플러그인). 팀 공용 기출은 이 저장소를 단일 소스로 유지하고, 플러그인은 주기적으로 다시 묶어 배포하는 걸 권장한다.

## 한 번에 묶기

저장소 루트에서 실행하면 자체 포함(self-contained) 플러그인 폴더가 생성된다:

```bash
bash .claude/skills/copywriter/plugin/bundle.sh ./dist/copywriter-plugin
```

생성 결과:
```
dist/copywriter-plugin/
├── .claude-plugin/plugin.json
├── skills/copywriter/SKILL.md
├── skills/copywriter/search.sh
├── skills/copywriter/_render.py
├── skills/copywriter/corpus/*.jsonl       # 광고 카피 코퍼스 (스킬 안에 포함)
└── skills/copywriter/ui-corpus/*.jsonl    # UI 카피 코퍼스 (스킬 안에 포함)
```

## 팀원이 설치하는 법

1. 위 `dist/copywriter-plugin`을 팀 공용 git 저장소(플러그인 마켓플레이스)에 올린다.
2. 팀원은 Claude Code에서:
   ```
   /plugin marketplace add <조직>/<플러그인-저장소>
   /plugin install copywriter
   ```
3. 이후 어느 프로젝트에서든 `카피 써줘` / `/copywriter` 로 호출.

개인용 간이 설치(마켓플레이스 없이):
```bash
cp -r dist/copywriter-plugin/skills/copywriter ~/.claude/skills/copywriter
```

## 자체 포함 스킬의 코퍼스 경로

`search.sh`는 모드별로 다음 순서로 코퍼스를 자동 탐색하므로 저장소·플러그인 양쪽에서 동작한다:
- 광고 카피(기본): `$SCRIPT_DIR/corpus` (번들) → `$SCRIPT_DIR/../../library/copy-corpus` (저장소)
- UI 카피(`--ui`): `$SCRIPT_DIR/ui-corpus` (번들) → `$SCRIPT_DIR/../../library/ui-copy-corpus` (저장소)
