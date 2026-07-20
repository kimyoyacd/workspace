# 팀 클로드로 옮겨 쓰기 — 카피라이터 스킬 배포 가이드

이 스킬은 **Claude Code용 구성**(스킬 + grep 기반 RAG 코퍼스 + CLAUDE.md 라우팅)이다.
"팀용 클로드"가 무엇이냐에 따라 옮기는 방법이 다르다. 아래에서 팀 환경에 맞는 경로를 고른다.

---

## 경로 A — 같은 저장소 공유 (가장 쉬움 · 추천)

팀이 **Claude Code**(웹 `claude.ai/code`, CLI, VS Code/JetBrains 확장, 데스크톱 앱)를 쓸 때.

1. **PR #42를 main에 머지**한다.
2. 팀원에게 이 저장소(`kimyoyacd/workspace`) **GitHub 접근 권한**을 준다.
3. 팀원은 Claude Code에서 이 저장소를 연다.
   - 웹: `claude.ai/code` → 이 저장소 선택
   - CLI/IDE: 저장소를 클론한 폴더에서 실행
4. 끝. `.claude/skills/copywriter/`, 코퍼스, CLAUDE.md 라우팅이 **자동 로드**된다. `search.sh`까지 그대로 작동한다.

> 장점: 설치 0. 팀이 **하나의 코퍼스를 같이 키운다**(누가 추가하면 커밋·푸시로 전원 공유).

---

## 경로 B — 플러그인 배포 (다른 저장소·개인 PC에서도)

팀이 Claude Code를 쓰지만 **이 저장소 밖**(클라이언트 프로젝트, 개인 머신)에서도 카피 스킬을 부르고 싶을 때.

1. 저장소 루트에서 자체 포함 플러그인을 만든다:
   ```bash
   bash .claude/skills/copywriter/plugin/bundle.sh ./dist/copywriter-plugin
   ```
   → 광고 카피 + UI 카피 코퍼스가 스킬 안에 통째로 묶인다.
2. `dist/copywriter-plugin`을 팀 공용 git 저장소(플러그인 마켓플레이스)에 올린다.
3. 팀원은 Claude Code에서:
   ```
   /plugin marketplace add <조직>/<플러그인-저장소>
   /plugin install copywriter
   ```
4. 이후 어느 프로젝트에서든 `카피 써줘` / `/copywriter` 호출.

상세: `plugin/README.md`

---

## 경로 C — claude.ai 일반 채팅(Projects)으로 옮길 때

팀이 Claude Code가 아니라 **claude.ai 일반 채팅**(Team/Enterprise의 Projects)을 쓸 때.

⚠️ **중요**: claude.ai 일반 채팅에는 셸·파일시스템이 없어 **`search.sh`의 grep RAG가 그대로 돌지 않는다.** 코퍼스를 "지식"으로 올려 Claude가 직접 읽게 하는 방식으로 대체한다.

1. 팀 워크스페이스에 새 **Project**를 만든다 (예: "카피라이터").
2. **커스텀 인스트럭션**에 `SKILL.md`의 프로세스를 붙여넣되, 검색 부분을 "첨부된 코퍼스에서 관련 기출을 찾아 패턴을 분석하고 그 위에서 쓴다"로 바꾼다.
3. **Project 지식**으로 코퍼스 JSONL을 업로드한다:
   - 광고: `.claude/library/copy-corpus/*.jsonl`
   - UI: `.claude/library/ui-copy-corpus/*.jsonl`
4. 사용: Project 안에서 "인터넷 요금제 배너 카피 써줘"처럼 요청.

한계와 대안:
- grep이 아니라 Claude가 지식을 통째로 읽어 참조 → **코퍼스가 크면 정밀도·용량 제한**이 생긴다. 업종이 많으면 자주 쓰는 업종만 골라 올리거나 Project를 업종별로 나눈다.
- 정밀한 키워드 RAG·팀 공동 축적이 중요하면 **경로 A(Claude Code)를 권장**한다.
- claude.ai의 Agent Skills(스킬 업로드) 기능을 팀 플랜에서 쓸 수 있으면, 스킬 폴더를 그대로 올리는 방법도 검토한다(단, 스크립트 실행 환경 제약은 확인 필요).

---

## 어떤 경로를 고를까

- 팀이 **Claude Code를 쓰고, 이 저장소로 함께 일한다** → **경로 A**
- 팀이 **Claude Code를 쓰지만 여러 저장소에 흩어져 있다** → **경로 B**
- 팀이 **claude.ai 일반 채팅만 쓴다** → **경로 C** (정밀도 타협 감수)

셋 다 코퍼스는 이 저장소를 **단일 원본**으로 두고 관리하는 게 좋다(중복 사본은 관리 포인트만 늘린다).
