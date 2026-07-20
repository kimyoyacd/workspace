#!/usr/bin/env bash
# copywriter 스킬 + 코퍼스를 자체 포함 플러그인으로 묶는다.
# 사용법: bash .claude/skills/copywriter/plugin/bundle.sh [출력경로]
#   기본 출력경로: ./dist/copywriter-plugin
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"                 # .claude/skills/copywriter
CORPUS_SRC="$(cd "$SKILL_DIR/../../library/copy-corpus" && pwd)"       # 광고 카피
UI_CORPUS_SRC="$(cd "$SKILL_DIR/../../library/ui-copy-corpus" && pwd)" # UI 카피
OUT="${1:-./dist/copywriter-plugin}"

echo "▶ 플러그인 번들 생성: $OUT"
rm -rf "$OUT"
mkdir -p "$OUT/.claude-plugin" "$OUT/skills/copywriter/corpus" "$OUT/skills/copywriter/ui-corpus"

# 1) 스킬 본체 복사 (plugin 하위 폴더는 제외)
cp "$SKILL_DIR/SKILL.md" "$OUT/skills/copywriter/"
cp "$SKILL_DIR/search.sh" "$OUT/skills/copywriter/"
cp "$SKILL_DIR/_render.py" "$OUT/skills/copywriter/"
chmod +x "$OUT/skills/copywriter/search.sh"

# 2) 코퍼스 복사 (스킬 안에 자체 포함) — 광고(corpus/) + UI(ui-corpus/)
cp "$CORPUS_SRC"/*.jsonl "$OUT/skills/copywriter/corpus/"
cp "$CORPUS_SRC/README.md" "$OUT/skills/copywriter/corpus/"
cp "$UI_CORPUS_SRC"/*.jsonl "$OUT/skills/copywriter/ui-corpus/"
cp "$UI_CORPUS_SRC/README.md" "$OUT/skills/copywriter/ui-corpus/"

# 3) 플러그인 매니페스트
cat > "$OUT/.claude-plugin/plugin.json" <<'JSON'
{
  "name": "copywriter",
  "version": "0.1.0",
  "description": "기출문제(RAG) 기반 카피라이팅 스킬. 카피 코퍼스를 검색해 '누르고 싶은 문구' 패턴 위에서 광고 카피를 쓴다. 배너·앱푸시·헤드라인·슬로건·사전예약·프로모션.",
  "keywords": ["copywriting", "카피", "advertising", "rag", "korean"]
}
JSON

COUNT=$(cat "$OUT"/skills/copywriter/corpus/*.jsonl | grep -c . || true)
UI_COUNT=$(cat "$OUT"/skills/copywriter/ui-corpus/*.jsonl | grep -c . || true)
echo "✔ 완료 — 광고 카피 $COUNT건 + UI 카피 $UI_COUNT건 포함"
echo "  설치: /plugin marketplace add <조직>/<저장소>  →  /plugin install copywriter"
echo "  간이: cp -r $OUT/skills/copywriter ~/.claude/skills/copywriter"
