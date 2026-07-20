#!/usr/bin/env bash
# 카피 코퍼스 RAG 검색 — 팀 공용 헬퍼
# 팀원 누구나 같은 방식으로 기출을 꺼내도록 검색을 통일한다.
#
# 사용법:
#   ./search.sh "인터넷 요금제 속도"          # 키워드(공백 구분)로 검색
#   ./search.sh "야식 배달" 30                 # 최대 30건
#   ./search.sh --tone 위트                    # 특정 톤만
#   ./search.sh "무제한" --category 통신        # 카테고리 좁혀서
#
# 출력: 카피 · 톤 · 구조 · 왜 눌리는가(why)

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 코퍼스 자동 탐색: 플러그인 번들(corpus/) → 이 저장소(library/copy-corpus/)
if [ -d "$SCRIPT_DIR/corpus" ]; then
  CORPUS_DIR="$SCRIPT_DIR/corpus"
elif [ -d "$SCRIPT_DIR/../../library/copy-corpus" ]; then
  CORPUS_DIR="$SCRIPT_DIR/../../library/copy-corpus"
else
  echo "코퍼스 폴더를 찾을 수 없습니다 (corpus/ 또는 library/copy-corpus/)" >&2
  exit 1
fi

LIMIT=25
TONE=""
CATEGORY=""
TERMS=()

while [ $# -gt 0 ]; do
  case "$1" in
    --tone) TONE="$2"; shift 2 ;;
    --category) CATEGORY="$2"; shift 2 ;;
    --limit) LIMIT="$2"; shift 2 ;;
    -h|--help) grep '^#' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *)
      # 숫자만 오면 limit으로 해석
      if [[ "$1" =~ ^[0-9]+$ ]]; then LIMIT="$1"; else TERMS+=("$1"); fi
      shift ;;
  esac
done

# 키워드를 공백/쉼표로 쪼개 정규식 alternation 구성
PATTERN=""
for t in "${TERMS[@]:-}"; do
  for w in $(echo "$t" | tr ',' ' '); do
    [ -z "$w" ] && continue
    PATTERN+="${PATTERN:+|}$w"
  done
done

FILES=("$CORPUS_DIR"/*.jsonl)
if [ -n "$CATEGORY" ]; then
  # 카테고리 힌트로 파일명 필터 (부분 일치)
  mapfile -t MATCHED < <(ls "$CORPUS_DIR"/*.jsonl | grep -i "$CATEGORY" || true)
  [ ${#MATCHED[@]} -gt 0 ] && FILES=("${MATCHED[@]}")
fi

# 1차: 키워드 매칭 (없으면 전체)
if [ -n "$PATTERN" ]; then
  RAW=$(grep -h -iE "$PATTERN" "${FILES[@]}" || true)
else
  RAW=$(cat "${FILES[@]}")
fi

# 2차: 톤 필터
if [ -n "$TONE" ]; then
  RAW=$(echo "$RAW" | grep "\"tone\":\"$TONE\"" || true)
fi

COUNT=$(echo "$RAW" | grep -c . || true)
echo "── 검색어: ${TERMS[*]:-(전체)}  ${TONE:+· 톤=$TONE}  ${CATEGORY:+· 카테고리=$CATEGORY}"
echo "── 매칭 $COUNT건 중 상위 $LIMIT건"
echo ""

echo "$RAW" | head -n "$LIMIT" | python3 "$SCRIPT_DIR/_render.py"
