"""
Little Try Club — 월간 유튜브 트렌드 스캔 스크립트

사용법:
  pip install yt-dlp
  python3 yt_trend_scan.py

기능:
  1. 유튜브 자체 필터(업로드일: 이번 달)로 니치 키워드 검색
  2. Shorts 길이(<=90초)로 필터링
  3. 조회수 기준 정렬
  4. 상위 후보는 구독자 수까지 조회해 "조회수/구독자 비율" 계산
     (비율이 높을수록 = 채널 규모 대비 알고리즘이 밀어준 정도 = 시청 완주율의 공개 대리지표)

주의: 평균 시청 지속시간/구독전환율/재방문 시청자는 YouTube Studio 비공개
      데이터라 어떤 외부 툴로도 가져올 수 없음. 이 스크립트는 공개 데이터
      (조회수, 구독자수)만으로 최선의 대리 신호를 제공한다.
"""
import subprocess, json, sys, urllib.parse

# 니치에 맞게 매월 조정 가능 — Little Try Club 패턴: 캐릭터 기반 3D/클레이 애니메이션,
# 습관·감정·다시시도 미니 스토리, Shorts 포맷
QUERIES = [
    "kids habit shorts animation character",
    "3D animated kids shorts story try again",
    "claymation kids shorts story",
    "kids tidy room shorts animation",
    "kids growth mindset shorts animation",
    "cute 3D character kids shorts problem solving",
    "kids storybook animation shorts no dialogue",
    "kids emotional story shorts animation soft",
    "shorts habitos buenos ninos animacion 3D",     # 스페인어
    "shorts criancas habitos animacao 3D",            # 포르투갈어
    "아이들 습관 애니메이션 쇼츠",                       # 한국어
    "anak kebiasaan animasi shorts",                  # 인도네시아어
    "kids shorts animation 3D character cozy",
]

SP_THIS_MONTH = "EgQIBBAB"  # 유튜브 검색 필터: 업로드일 = 이번 달
MAX_DURATION_SEC = 90       # Shorts 길이 상한
TOP_N_TO_ENRICH = 30        # 구독자수까지 조회할 상위 후보 수


def search_this_month(queries):
    all_videos = {}
    for q in queries:
        url = f"https://www.youtube.com/results?search_query={urllib.parse.quote(q)}&sp={SP_THIS_MONTH}"
        try:
            out = subprocess.run(
                ["yt-dlp", url, "--flat-playlist", "--dump-json", "--no-warnings", "--playlist-end", "40"],
                capture_output=True, text=True, timeout=90,
            )
            for line in out.stdout.strip().split("\n"):
                if not line.strip():
                    continue
                try:
                    d = json.loads(line)
                except Exception:
                    continue
                vid = d.get("id")
                if vid and vid not in all_videos:
                    all_videos[vid] = {
                        "id": vid, "title": d.get("title"), "channel": d.get("channel"),
                        "channel_id": d.get("channel_id"), "view_count": d.get("view_count"),
                        "duration": d.get("duration"),
                    }
            print(f"[{q}] done, total unique: {len(all_videos)}", file=sys.stderr)
        except Exception as e:
            print(f"ERROR [{q}]: {e}", file=sys.stderr)
    return all_videos


def enrich_with_subs(video_ids):
    import yt_dlp
    ydl_opts = {"quiet": True, "skip_download": True, "no_warnings": True}
    enriched = []
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        for vid in video_ids:
            try:
                info = ydl.extract_info(f"https://www.youtube.com/watch?v={vid}", download=False)
                enriched.append({
                    "id": vid, "title": info.get("title"), "channel": info.get("channel"),
                    "channel_follower_count": info.get("channel_follower_count"),
                    "view_count": info.get("view_count"), "like_count": info.get("like_count"),
                    "duration": info.get("duration"), "upload_date": info.get("upload_date"),
                })
            except Exception as e:
                print(f"skip {vid}: {e}", file=sys.stderr)
    return enriched


def main():
    videos = search_this_month(QUERIES)
    shorts = [v for v in videos.values() if v.get("duration") and v.get("view_count") and v["duration"] <= MAX_DURATION_SEC]
    shorts.sort(key=lambda x: x["view_count"], reverse=True)

    top_ids = [v["id"] for v in shorts[:TOP_N_TO_ENRICH]]
    enriched = enrich_with_subs(top_ids)

    print("\n=== TOP CANDIDATES (조회수 순) ===")
    for e in sorted(enriched, key=lambda x: x["view_count"] or 0, reverse=True):
        subs = e.get("channel_follower_count")
        ratio = round(e["view_count"] / subs, 2) if subs else None
        print(f"{e['view_count']:>8} views | {e['duration']:>3}s | subs:{subs} | ratio:{ratio} | {e['channel']} | {e['title'][:60]}")

    with open("trend_scan_result.json", "w") as f:
        json.dump(enriched, f, ensure_ascii=False, indent=2)
    print("\nSaved: trend_scan_result.json")


if __name__ == "__main__":
    main()
