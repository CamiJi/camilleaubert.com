---
title: "We replaced our SaaS search engine with a homegrown RAG (and AI multiplied us)"
date: 2026-09-14
dateModified: 2026-09-14
excerpt: "For years, search on our e-commerce platform ran on an external SaaS engine — opaque, rigid, impossible to evolve. In late 2025, I proposed a homegrown RAG engine on our existing stack. Live since late summer: roughly 47 tickets, a team of four, and a way of working that AI has profoundly changed. Here is the debrief, unfiltered."
lang: en
translationOf: 2026-09-14-rag-rex
---

For years, search on our vocational-training e-commerce platform ran on an external SaaS engine. The most telling example of our frustration: a visitor typed "Excel", and the engine served up a blog article with strictly nothing to do with it. In late 2025, I proposed replacing all of it with a homegrown RAG engine. It has been in production since late summer: roughly 47 tickets, a team of four, and a way of working that AI has profoundly changed. Here is the debrief, unfiltered.

## Why leave

The symptoms were old. On short content, results were sometimes incomprehensible: "Excel" returned ancient articles, for reasons nobody could explain. As soon as a query exceeded three words, everything drowned — you had to type exactly the right semantic field to get anything relevant. And above all, ranking was opaque: impossible to justify why one result came out ahead of another. Every evolution — a weight on a promotion, a temporary rule — went through the vendor.

The annual bill stayed reasonable (under €10k, indexed on our traffic). So this was never a cost story, but a control story: we were responsible for a tool we could neither explain nor evolve.

## A stack that was already there

The trigger wasn't a tool, it was context. AI had multiplied our development productivity by an order of magnitude, and our building blocks were already in place:

- **Valkey** had replaced Memcached as our cache server. Valkey Search adds a vector mode with the RediSearch API (`FT.CREATE` / `FT.SEARCH`, HNSW, COSINE distance) — the reference in the field, on a machine we already operated.
- **OpenAI** was already wired up: `text-embedding-3-small` (1536 dimensions), a few milliseconds per query, marginal cost.
- **LLPhant**, a PHP RAG orchestration library, integrated with Laravel 12 without friction — with documentation that got us up to speed fast.

We didn't seriously evaluate alternatives: the puzzle assembled itself. The remaining risk was the young product (Valkey Search 1.0). One proof of concept was enough to convince us: results were immediately excellent. PoC, acceptance, production. Our training notices are fairly short, and vectorize without elaborate chunking anyway.

<a id="pipeline"></a>

## The pipeline, five steps

Every search goes through five steps, visible on our internal debug page:

```
Query (+ business facets: catalogue year, domain, city, certifying…)
      │
      ▼
[1] Embedding   query → 1536-dim vector                       ~4 ms
      ▼
[2] Meaning     kNN HNSW over the country index (COSINE)
      │         similarity threshold ≥ 0.3, dedup by code
      ▼
[3] Final       exact pins (product code, near-exact title)
      │         then sort by vector distance
      │         micro-tiebreak for best-sellers if gap < 0.005
      ▼
[4] Pages       vectorized WordPress pages (lexical re-sort in PHP)
      ▼
[5] Context     context assembly for the LLM (chatbot)
```

The final ranking comes down to little: if the user types an exact product code or a near-exact title, that training course is pinned at the top. Otherwise, vector distance decides. On a near-tie (distance gap under 0.005), the best-seller goes first. Facets — catalogue year, domain, city, certifying or not — predate the engine and filter before the search.

Two pitfalls are worth the detour. First, Valkey Search 1.0 doesn't index text without a vector: no fulltext possible, so we went 100% vector (the code keeps a hybrid mode with RRF fusion, ready for the day Valkey allows it). Second, multi-site: the same training product sells on cegos.fr and on our partner's site ib-formation.fr, with a redirect opening in a new tab. With both vector bases in-house, this cross-offer juggling — already painful with the old engine, where we retrieved rankings to re-personalize and stop-word lists to maintain — is now handled directly. Same for the dual 2026/2027 catalogue: dedup by code, price per year.

<a id="the-lesson"></a>

## The lesson: we rebuilt the complexity first

Our first version reproduced the old world: a "Weights" page in our back office let us tune editorial weights to influence ranking. Result: unpredictable rankings we still couldn't justify, and accumulating configuration debt. We deleted all of it.

What remains fits on a corner of the table: pins, a distance, a micro-tiebreak. Light weights may come back one day — a promotion, sessions to fill — but in small doses and because we'll be in control. The deciding criterion: when the business asks "why doesn't my article show up?", we must be able to answer. A simple engine can be explained; a weight configuration cannot.

To evaluate all this, our SEO specialist built a golden dataset of about 150 real queries with the business. Success criteria: top 1 when typing an exact title or reference; otherwise, at least two or three expected courses in the top five results, and the rest consistent with the request.

## What AI changed in how we work

This may be the most important point of this debrief. We work in TDD, with what we call *harness engineering*: constrain the AI, give it a precise objective, let it iterate until it reaches it — fenced in by tests. On the search engine alone, that's roughly 254 unit-test methods, 14 browser-test scenarios (Dusk) and "source contract" tests locking in code invariants. Much of these tests were written by the AI, reviewed by us. The golden dataset is replayed on every change to compare rankings.

The team: Damien (technical direction), Vladimir (SEO, creator of the dataset), Marie (UX/UI, redoing the engine's front end — live end of year) and myself. A small team, a sizeable project.

## Operations, day to day

A nightly scheduled task re-vectorizes modified trainings and pages (content-hash detection, ~1 minute for 500 documents); a WordPress webhook handles additions and deletions in near real time. Better Stack receives indexing summaries and alerts. Internally, a "Vector Store" dashboard lets us check the bases and relaunch a vectorization, and the "RAG Query" page walks through a query's five steps to debug without hammering the public front end.

The numbers: about 10,000 indexed documents (4,000 trainings, 6,000 articles), ~47 ms per search including ~4 ms of embedding. No notable production incident since the switch.

## The limits, honestly

We don't have usage figures yet: "search → training page" tracking was just put in place, results will come in the next few months. OpenAI API cost is modest but precise tracking remains to be refined. Hybrid mode awaits a Valkey Search version that indexes text. Observability is an open project. And we have no quantified baseline on the old engine: our before/after comparisons are qualitative, by eye.

<a id="do-over"></a>

## If we did it over?

The same: the golden dataset with the business from day one, internal tooling from V1, starting from the existing stack, and a deliberately simple engine — from simple toward complex, never the reverse. Otherwise: the Weights page would never have been born, and we would have measured a quantified baseline on the old engine before switching. To a team hesitating between SaaS and a homegrown engine, I'd say: run a PoC on a golden dataset, and look at the results.

AI won us a factor of ten. But precisely because it produces fast, you must master what you build: simple, explainable, tested tools.
