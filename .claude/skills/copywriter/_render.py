#!/usr/bin/env python3
# search.sh 전용 렌더러 — JSONL 라인을 사람이 읽기 좋게 출력한다.
import sys, json

for line in sys.stdin:
    line = line.strip()
    if not line:
        continue
    try:
        o = json.loads(line)
    except Exception:
        continue
    print("• " + o.get("copy", ""))
    meta = [x for x in (o.get("tone"), o.get("structure")) if x]
    if meta:
        print("    [" + " / ".join(meta) + "]")
    if o.get("why"):
        print("    ↳ " + o["why"])
    print()
