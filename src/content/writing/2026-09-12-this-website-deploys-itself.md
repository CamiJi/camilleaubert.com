---
title: This website deploys itself
date: 2026-09-12
excerpt: Every push to main goes live in production within minutes — no manual step. Here is the agent-driven workflow behind this portfolio, and why I think this is how every personal site should be run.
---

I rebuilt this portfolio in four phases. The design is sober, the stack is minimal, and the whole thing is a static build served by Nginx on a small AWS instance. But the part I'm most happy with is invisible: **the deployment loop**.

Every commit pushed to `main` triggers a pipeline that validates, builds, syncs to the server and rebuilds the container. No manual step, no ceremony. When I update content, the change is live within minutes.

## Why it matters

A portfolio is only as good as it is current. Most personal sites rot — not because their owner stops doing interesting things, but because publishing takes effort. Every friction point between "I did something" and "it's on the site" is a reason the site stays stale.

So the friction is now zero:

- content lives in markdown files, editable from a phone on github.com,
- an agent workflow handles ticket-driven work across repositories,
- pushing to `main` ships to production automatically.

## What's next

The "Now" section on the home page shows what I'm currently shipping. The writing pages you're reading will grow as I publish — field notes on RAG architectures, AI-assisted engineering, and running an enterprise platform at scale.

The next article is already drafted: how we replaced an enterprise search engine with a RAG platform. It went live in production this week — the write-up follows shortly.
