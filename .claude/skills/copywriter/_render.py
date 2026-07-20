#!/usr/bin/env python3
# search.sh 전용 렌더러 — JSONL 라인을 사람이 읽기 좋게 출력한다.
# 광고 카피(tone·structure)와 UI 카피(component·context·principle) 스키마를 모두 지원.
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
    # UI 카피면 component/context를, 광고 카피면 tone/structure를 우선 표기
    if o.get("component") or o.get("context"):
        head = [x for x in (o.get("component"), o.get("platform")) if x]
        if head:
            print("    [" + " / ".join(head) + "]")
        if o.get("context"):
            print("    · 상황: " + o["context"])
        if o.get("principle"):
            print("    · 원칙: " + o["principle"])
    else:
        meta = [x for x in (o.get("tone"), o.get("structure")) if x]
        if meta:
            print("    [" + " / ".join(meta) + "]")
    if o.get("why"):
        print("    ↳ " + o["why"])
    print()
