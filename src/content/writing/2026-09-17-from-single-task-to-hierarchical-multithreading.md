---
title: "From single-task to hierarchical multithreading with AI"
date: 2026-09-17
dateModified: 2026-09-17
excerpt: "When an AI agent works 30 minutes on its own, waiting achieves nothing. I organize my attention into three ranked threads: prod logic, a light POC, and writing. A simple method for everyday work."
lang: en
translationOf: 2026-09-17-dev-multithreading-hierarchise
draft: false
---

I used to work single-task. One task at a time. One file. One focus.

With AI agents, my everyday work has changed. I often run several agents on different topics. I had to learn to organize my attention differently.

Here is how I do it, simply.

![One developer and three ranked agents: prod, POC and writing](/writing/dev-multithreading-hierarchise/dev-3-agents-cartoon.png)

## The 30 minutes of waiting

An agent can work 30 minutes on its own. On a well-scoped topic. With context and tests.

During that time, watching it work adds nothing. It does not go faster.

So I learned to use that time. I stay productive, but on simpler tasks. With lower stakes.

This is not distraction. It is a way to avoid dead time.

## Three threads, ranked by importance

In practice, I work with three threads in parallel. They are ranked. They do not carry the same weight.

Thread 1: the heavy logic, the one going to production. This is where most of my attention goes.

Thread 2: a lighter POC. An innovative, exploratory part, with no immediate risk.

Thread 3: the narrative. An article, a note, knowledge sharing. Writing helps me check that I really understood.

The rule I follow is simple. When thread 1 stops and waits for me, it takes full priority back. I give it my full reflection and concentration.

When I restart it, I go back to the second thread. Then to the third. Always in order of importance.

Segment, yes. But above all, rank.

![Using agent waiting time to move forward on simpler tasks](/writing/dev-multithreading-hierarchise/30-minutes-b.png)

## A structure to learn, with limits

This way of working takes a mental structure. You need to know where each thread stands. You need to accept pausing and resuming.

Day to day, it works well. On normal-sized topics, hierarchical multithreading is possible.

On very large topics, I go back to full focus. 100% on a single thread. Depth sometimes needs full attention.

And one topic never runs in parallel: the production release. For us, it is a separate moment. Once a week. In a dedicated space. To avoid mistakes.

During the release, no second thread. No background POC. Just prod.

## Worktree or chaos

The real difficulty is technical. With several agents on the same codebase, things can quickly turn chaotic.

Separating topics upfront is essential. Before launching the agents.

I use Git worktrees. One folder per thread. One branch per intent. Each topic stays isolated.

Thread 1: the prod branch. Thread 2: the POC branch. Thread 3: the article branch. No shared state.

Without this separation, parallelism creates mess. With it, it stays calm.

![Three isolated worktrees, production sealed at the center](/writing/dev-multithreading-hierarchise/worktree-ou-chaos.png)

## An evolving role

With AI, my work has changed. I still code. But I also orchestrate.

I decide where my attention goes. With what level of care. The prod thread needs careful review, tests, evidence. The POC needs speed and openness. Writing needs clarity.

Code. Explore. Tell. Three threads in parallel, ranked by importance.

This is what I am experimenting with right now. Simply. Without chasing performance at all costs. Just to stay focused on what matters, while leaving room for innovation and sharing.
