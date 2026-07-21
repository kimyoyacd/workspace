# Brand Strategy Deck — report-data.json 스키마

marketer 파이프라인의 outputs/ 원본(01~12)을 통합한 최종 데이터 구조.
HTML 덱은 이 JSON에서 데이터를 읽어 렌더링한다. **HTML 안에만 데이터가 존재해서는 안 된다.**

## 전체 구조

```json
{
  "research_mode": "deep",

  "meta": {
    "date": "2026-07",
    "version": "1.0",
    "accent1": "#7E9A6E",
    "accent2": "#DD9B45"
  },

  "project": {
    "client": "",
    "project_name": "",
    "project_type": "",
    "background": "",
    "stated_request": "",
    "reframed_goal": "",
    "real_problem": "",
    "decision_to_make": "",
    "success_criteria": []
  },

  "brand_factbook": {
    "brand_name": "",
    "purpose": "",
    "products_services": [],
    "targets": [
      {
        "label": "Primary|Secondary|Buyer|User",
        "description": "",
        "behaviors": "",
        "motivations": "",
        "barriers": ""
      }
    ],
    "brand_assets": [
      { "asset": "", "status": "FACT|CLIENT CLAIM|INFERENCE", "note": "" }
    ],
    "brand_gaps": [],
    "identity": {
      "vision": "", "mission": "", "values": [], "positioning": "",
      "tone": "", "visual_assets": "", "must_keep": [], "must_improve": []
    },
    "name_story": { "meaning": "", "origin": "", "philosophy": "" },
    "unknowns": []
  },

  "problem_definition": {
    "brand_says": "",
    "brand_does": "",
    "customer_sees": "",
    "market_compares": "",
    "current_state": "",
    "desired_state": "",
    "research_questions": []
  },

  "competitive_research": {
    "required_count": 30,
    "actual_count": 0,
    "market_definition": { "category": "", "scope": "", "time_frame": "" },
    "competitors": [
      {
        "name": "",
        "competition_type": "직접|간접|대체재|인접",
        "country": "",
        "price_range": "",
        "target": "",
        "buyer_vs_user": "",
        "core_value": "",
        "positioning_message": "",
        "features": "",
        "customer_experience": "",
        "visual_comm": "",
        "strengths": "",
        "weaknesses": "",
        "relevance_to_project": "",
        "x": 0, "y": 0,
        "x_rationale": "",
        "y_rationale": "",
        "evidence_id": "E-001",
        "source_url": "",
        "source_tier": "T1|T2|T3|T4",
        "confidence": "high|medium|low"
      }
    ],
    "categories": [
      {
        "id": "A",
        "label": "",
        "definition": "",
        "brands": [],
        "common_target": "",
        "common_value": "",
        "common_message": "",
        "common_design_language": "",
        "purchase_reason": "",
        "market_strength": "",
        "structural_limit": "",
        "oversupplied_value": "",
        "undersupplied_value": "",
        "borrow_principle": "",
        "do_not_copy": "",
        "representative_source": "",
        "source_count": 0,
        "confidence": ""
      }
    ],
    "axis_candidates": [
      {
        "id": 1,
        "x_axis": "", "y_axis": "",
        "customer_felt": true,
        "differentiates": true,
        "strategic": true,
        "evidence_available": true,
        "not_self_serving": true,
        "verdict": "selected|rejected",
        "reason": ""
      }
    ],
    "selected_axes": {
      "x": { "left": "", "right": "", "label": "" },
      "y": { "bottom": "", "top": "", "label": "" },
      "selection_reason": "",
      "rejected_candidates": [ { "axes": "", "reason": "" } ]
    },
    "positioning_points": [
      {
        "name": "", "x": 0, "y": 0,
        "x_rationale": "", "y_rationale": "",
        "evidence_id": "", "confidence": "",
        "excluded": false, "exclusion_reason": ""
      }
    ],
    "quadrants": [
      { "position": "좌상|우상|좌하|우하", "label": "", "brands": [], "characteristics": "" }
    ],
    "whitespaces": [
      {
        "name": "",
        "quadrant": "",
        "type": "TRUE OPPORTUNITY|EMERGING SPACE|FALSE WHITE SPACE|CAPABILITY GAP",
        "why_empty": "",
        "market_gap": "",
        "customer_demand": "",
        "brand_right": "",
        "capability_fit": "",
        "demand_signals": [],
        "asset_connection": "",
        "feasibility": "",
        "opportunity_score": 0,
        "risks": [],
        "validation_needed": [],
        "sources": []
      }
    ]
  },

  "cross_industry_research": {
    "required_count": 30,
    "actual_count": 0,
    "cases": [
      {
        "name": "",
        "industry": "",
        "country": "",
        "problem_solved": "",
        "method": "",
        "why_it_worked": "",
        "customer_value": "",
        "resonance_with_project": "",
        "borrowable_principle": "",
        "do_not_copy": "",
        "evidence_id": "",
        "source_url": "",
        "source_tier": "",
        "confidence": ""
      }
    ],
    "categories": [
      {
        "id": "X-A",
        "label": "",
        "common_problem": "",
        "common_principle": "",
        "cases": [],
        "why_it_works": "",
        "applicable_principle": "",
        "must_transform": "",
        "must_not_copy": "",
        "representative_source": ""
      }
    ],
    "what_to_borrow": [],
    "what_to_translate": [],
    "what_to_avoid": []
  },

  "insights": [
    {
      "id": "I-01",
      "observation": "",
      "evidence_ids": [],
      "why": "",
      "tension": "",
      "unmet_need": "",
      "opportunity": "",
      "strategic_meaning": "",
      "confidence": ""
    }
  ],

  "strategy_options": [
    {
      "id": "S-A",
      "name": "",
      "one_liner": "",
      "problem_solved": "",
      "target": "",
      "value": "",
      "differentiation_logic": "",
      "brand_assets_used": [],
      "market_opportunity": "",
      "borrowed_principles": [],
      "execution": "",
      "expected_impact": "",
      "risks": [],
      "requirements": [],
      "tradeoffs": "",
      "evidence_ids": [],
      "scores": {
        "customer_value": 0, "brand_fit": 0, "differentiation": 0,
        "feasibility": 0, "sustainability": 0, "scalability": 0, "evidence_strength": 0
      }
    }
  ],

  "recommended_strategy": {
    "option_id": "",
    "recommendation_reason": "",
    "rejected_options": [ { "id": "", "reason": "" } ],
    "core_principles": [],
    "execution_priorities": [],
    "risks": [ { "risk": "", "severity": "high|medium|low", "mitigation": "" } ],
    "validation_plan": [],
    "success_criteria": []
  },

  "sources": [
    { "id": "E-001", "title": "", "url": "", "tier": "T1|T2|T3|T4", "accessed": "" }
  ],

  "limitations": [],
  "omitted_sections": [ { "section": "", "reason": "" } ]
}
```

## 출처 등급 정의

| 등급 | 정의 |
|---|---|
| `T1` | 공식 홈페이지, 공시, 공식 인터뷰, 정부·기관 자료 |
| `T2` | 신뢰도 높은 언론, 산업 리포트, 전문 매체 |
| `T3` | 유통 사이트, 리뷰, 커뮤니티, 2차 큐레이션 |
| `T4` | 추정, 미검증 정보, 탐색 가설 — 사실 근거로 사용 금지 |

## Evidence ID 규칙

- 출처는 `sources[]`에 `E-001` 형식 ID로 등록
- 경쟁사·사례·인사이트·전략은 `evidence_id(s)`로 출처를 참조
- 핵심 주장(인사이트·추천 전략)에는 Evidence ID 연결 필수

## 검증 규칙 (brand-strategy-deck 실행 시)

1. `research_mode`가 deep이면 `actual_count >= 30` (경쟁·이종업계 각각)
2. 모든 competitor/case에 `source_url` 존재
3. `positioning_points`의 excluded=false 항목은 x/y_rationale 필수
4. `whitespaces[].type` 필수
5. `strategy_options` 2개 이상, `recommended_strategy.rejected_options` 비어있지 않을 것
6. 위반 시 HTML 생성을 중단하고 미달 항목 보고
