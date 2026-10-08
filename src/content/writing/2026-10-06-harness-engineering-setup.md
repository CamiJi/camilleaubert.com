---
title: "Harness Engineering: How I Wired My Coding Setup in October 2026"
date: 2026-10-06
excerpt: "My coding-agent setup on October 6, 2026: AGENTS.md, Docker, worktrees, MCP, OpenCode — and the harness holding it together. Result: 10x code throughput, without speeding up all dev work."
lang: en
translationOf: 2026-10-06-harness-engineering
draft: false
---

![A small sturdy go-kart channeling a huge rocket engine — the harness keeps the power on track](/writing/harness-engineering/cover-cartoon.jpg)

*Status as of October 6, 2026: every month brings new models and cost shifts. Here is my current setup, and the harness that makes it usable.*

## In 2026, every month changes the game

Since the start of the year, I keep switching coding tools. Not on a whim: models, prices and capabilities move too fast to freeze anything in place.

So this article is not a universal guide. It is a snapshot: my setup as it runs in October 2026, and the discipline that makes it usable day to day — Harness Engineering.

## What is a harness?

First, the term. These are not my words, but they are the definition I work from:

> *1. The harness — everything around the model that turns it into an agent able to act: its context, its tools, its runtime environment and its checks.*
>
> *2. A coding agent's harness — the concrete setup framing its work on a project: rules, Docker, worktrees, MCP, tests, review.*
>
> *3. Harness Engineering — designing, observing and improving that setup so the agent does better work and its mistakes get caught earlier.*

In my own words: **the harness channels the agent's power in the right direction. It is the chassis, brakes and airbag around an overpowered engine.**

Agents have become more and more autonomous: they loop, they retest themselves. My job now is to put them on the right track. Given the right path and the right target, they carry the work through almost to the end. When the harness is properly in place, the agent loops on its own until the task succeeds — tests green, errors spotted then fixed.

## Why it works now

Two things tipped over in 2026.

First, agents sustain long, complex tasks: they loop, rerun tests, check the rendering. Second, on my side, token costs clearly turned downward over the summer of 2026.

On Pareto charts, the picture is clear: very capable and very expensive models, but also very cheap ones, slightly less capable, perfectly viable for complex coding tasks.

![Pareto frontier of code agent models — snapshot, October 6, 2026](/writing/harness-engineering/pareto-2026-10-06.png)

*Snapshot: <a href="https://arena.ai/leaderboard/agent/code/pareto" target="_blank" rel="noopener">arena.ai — code Pareto</a>, viewed October 6, 2026. Top left, the most capable and most expensive models; bottom right, the cheapest ones — including the ones I use every day.*

The result, at the coding stage: **roughly ten times more output in the same time. 10x on code throughput — not on all dev work.** Project management, advocacy, documentation and code review still have their own bottlenecks.

## My harness, concretely

### `AGENTS.md` files

Written and modified by us. They know our process, our infrastructure, our team size, our stack, our business needs. This is the already slightly domain-specific part of the harness: the agent does not improvise, it inherits our exact conventions.

### Docker everywhere

Everything is containerized, on my machine and on servers. Same image, same services — preprod, prod, localhost: I ship the same app fast to localhost, preprod and prod, and the agent always works under prod-identical conditions.

### Worktrees: hierarchical multithreading

One worktree per task, one agent per worktree, in parallel. The move from single-task to multi-threaded — see [my article on the subject](/writing/2026-09-17-from-single-task-to-hierarchical-multithreading/).

### MCP: the agent plugged into my world

MCP servers plug the agent into my codebase and external services: Jira and Bitbucket first, then Chrome DevTools and Playwright for testing the rendering. The agent sees what it codes rendered, and loops until it can confirm no error remains, neither in the UI nor in the code.

### OpenCode on pay-as-you-go + the reference board

I use <a href="https://opencode.ai" target="_blank" rel="noopener">OpenCode</a> — an open-source, model-agnostic agent, billed per call. That means picking the cheapest models of the moment, even free ones, and switching with a one-line config edit.

I keep a reference board I check almost daily to arbitrate cost vs. quality: DeepSeek early this year, GLM 5.3 this summer, GPT-6 Luna today. I compare new models almost daily and assume a provisional, best-value choice.

## Framing the agent: TDD, tests, builds, review, docs

No good harness without TDD: putting tests first works very well with an agent. You state the conditions to meet, it loops until they are met.

On our side: Dusk tests in our architecture, lints and builds to catch gross mistakes — though with today's agent performance, those get rarer.

Human review stays mandatory: our name is on the commit, we are responsible for the code we ship. That is our final sign-off.

And so the next agent has everything at hand, documentation is mandatory everywhere. New models advertise million-token context windows — documenting our processes heavily speeds up future development.

## The limits — the ones that remain

The bottleneck moved. We are very fast on code and on the app as such, but spec writing, business-need definition, aesthetic choices and art direction do not always keep up. Product and product innovation become the limiting factor.

On the mental-load side: what feels like "AI fatigue". Long days, five or six topics in parallel — like slots, feeding another coin to push the agent a little further. AI multiplied my execution capacity, not my understanding and decision capacity.

## Conclusion

This setup is neither an autonomous agent nor a mere code assistant. It is a working environment designed for powerful agents: Docker and worktrees to frame execution, `AGENTS.md` for context, OpenCode for model freedom, MCP to touch the real world, TDD and review to validate.

The tally, dated October 6, 2026:

- **10x on code throughput**, not on all dev work;
- models that keep changing — DeepSeek, then GLM 5.3, then GPT-6 Luna — arbitrated daily for the best value;
- **2 structural limits**: product / business need that does not always keep up, and my mental load — the only thing that does not scale.

Next? Another article, on this new multi-threaded way of working: how to supervise several agents without losing the thread — or your evenings.

---

*Camille Aubert — October 2026*
