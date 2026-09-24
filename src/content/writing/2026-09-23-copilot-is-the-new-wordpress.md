---
title: "Copilot is the new WordPress"
date: 2026-09-23
dateModified: 2026-09-23
excerpt: "Yesterday my non-developer client merged his first pull request. His portfolio — 17 projects, two languages, free hosting — publishes with a git push. WordPress democratized publishing; agents democratize the rest."
lang: en
translationOf: 2026-09-23-copilot-est-le-nouveau-wordpress
draft: false
---

![Cartoon cover: a cheerful robot pushing the dusty old WordPress logo away](/writing/copilot-is-the-new-wordpress/cover-cartoon.jpg)

Yesterday, my client merged his first pull request. He is not a developer. He is a sound designer.

He created a GitHub account, opened a PR that wired up his contact form, and merged it himself — with Copilot's help, on his first day of autonomy. The commit message is in the repo history, co-authored by Copilot, merged by his own hand. That moment is the whole point of this article.

I wrote about the deployment loop behind this very site in [This website deploys itself](/writing/2026-09-12-this-website-deploys-itself/). This is the sequel, with a real client to prove it works outside my own setup.

![The GitHub Copilot app: ask anything, agent mode, linked to the repo](/writing/copilot-is-the-new-wordpress/copilot.png)

That's the whole interface he needs: no dashboard, no menus to learn. A conversation box connected to the site. He describes what he wants in his own words, Copilot changes the site from the inside. Even from a phone.

## WordPress 2005, Copilot 2026

WordPress won by democratizing a layer. Before it, publishing on the web meant knowing HTML, FTP, and a server. After it, anyone could publish — at the price of maintaining a CMS: updates, plugins, backups, security holes, hosting bills.

Copilot and coding agents are democratizing a different layer: the modern static web. Same promise, better deal:

- **It's free.** No hosting bill, no paid plan, no plugin license. Zero per month, indefinitely.
- **There's nothing to learn.** No admin panel, no menus, no training. The client changes the site from the inside, by talking to it: "add this game", "change that picture", "proofread my bio". Copilot edits, the site updates itself minutes later. Even from a phone.
- **There's nothing to maintain.** No updates, no security patches, no backups to babysit. Static pages can't be broken into the way a CMS can.

And one honest clarification about roles: **a developer lays the foundations once** — design, structure, automatic publishing. That's a few days of work. After that, the client needs no developer, no training, no maintenance contract. His whole job: fill in a ready-made card, send it online.

The client gets the same autonomy WordPress promised him — without the machine WordPress made him feed.

## The concrete case

The client is Mathieu Fiorentini, senior sound designer. His credits include Heavy Rain, Detroit: Become Human, Watch Dogs: Legion, Tell Me Why and Banishers, for studios like Quantic Dream, Ubisoft, Don't Nod and Focus Entertainment. His old site ran on WordPress.com — free plan, domain connected.

Here is what replaced it:

- **Hosting:** free, secure connection included. Monthly cost: zero — indefinitely.
- **Content:** 17 projects in two languages, English and French. Each project is a simple text card: title, studio, years, picture.
- **Speed and privacy:** pages are featherweight and load instantly. No cookies, no trackers, nothing to maintain.
- **Publishing:** to add a game, he fills in a ready-made card and sends it online. Live two minutes later. He releases roughly one game every six months — about ten minutes of his time each.
- **Contact form included,** spam filter on, email address hidden from spambots.

Every update leaves a public trace: a history of green checkmarks, one per publication — several started by the client himself.

![Publication history: green checkmarks, one per site update, about a minute each](/writing/copilot-is-the-new-wordpress/actions-vert.png)

And this is what those runs produce:

![The finished site: earlyreflect.com homepage with hero, client logos and work credits](/writing/copilot-is-the-new-wordpress/site-fini-hero.png)

See it live: [earlyreflect.com](https://earlyreflect.com)

And here is the honest part: the initial plan was a WordPress port — five to seven days of work estimated. Then the client started using this workflow, published his own update on day one, and the port became unnecessary. The draft became the site. That was never the plan, and it is the strongest signal in this whole story.

## What WordPress still does better

Intellectual honesty first. For a portfolio updated twice a year, static plus agent wins. But WordPress still wins on:

- **Instant visual editing.** In WordPress, you see the change as you make it. Here, the client writes his text and sees the result a minute later. A live preview exists on his computer, but it's one more step.
- **The plugin ecosystem.** Need a booking calendar, a shop, member accounts? Someone already wrote the plugin. In the static world, each of those is a small project.
- **Non-technical onboarding.** WordPress's admin is ugly but familiar. This workflow was unfamiliar the first time. My client needed one guided day; a WordPress user needs none.

If your site needs dynamic features or five editors with roles, stop reading and keep WordPress. This article is about the other 90%: the showcase sites, portfolios and landing pages that use a CMS as an expensive text file.

## The hidden price of WordPress nobody quotes

Nobody chooses WordPress for the maintenance. It comes with the bundle, and the bundle is:

- **Updates, forever.** The system, the theme, the plugins — each with its own schedule and its own way of breaking the site.
- **Security as a background worry.** The most deployed CMS on earth is the most scanned. A static site has no login page, no database, nothing to exploit. There is nothing to hack except the account itself, guarded by a second login check.
- **Backups you actually have to test.** With this setup, every version of every page is kept automatically — restoring an old version takes seconds.
- **The plan ladder.** The free WordPress.com plan allows neither custom themes nor plugins. A custom design like this one requires the Business plan — roughly 25 to 35 euros a month. The static equivalent costs nothing to host.

For two content updates a year, that is a lot of standing cost for very little publishing.

## The traps, told honestly

This is the section that makes the rest believable. Everything below really happened, most of it on the day of the domain switch:

1. **The free-plan wall.** As said above: no custom theme, no plugin on the free plan. That constraint killed the port option on price before the workflow killed it in practice.
2. **The stuck certificate.** After pointing the domain to the new hosting, the security certificate stayed stuck for hours. Cause: a leftover wildcard entry in the domain settings, silently blocking validation. Fix: delete the entry, reset the domain setting. Certificate issued within minutes.
3. **The broken images.** Moving to the final domain broke image addresses (stray double slashes). Caught automatically before anyone noticed, fixed in two updates.
4. **The fake redirects.** Free hosting can't do proper permanent redirects. The 11 old addresses forward through simple relay pages. It works for visitors and search engines, but it's not the real thing, and I won't pretend otherwise.

Remaining: telling Google about the new address, the French CV (a placeholder for now), and artwork for a few projects pending rights clearance. That todo list is now the client's, written in plain language. That is the point.

## The repo is the new CMS

WordPress's historic achievement was letting non-developers publish without coding. That achievement stands. But for a showcase site, the new deal is unbeatable, and it has three parts: **it's free**, **you change the site from the inside by talking to it**, and **a developer is only needed once**, to lay the foundations.

After that: no admin to learn, no updates to run, no bills to pay. Fill in a card, send it online — the client's whole job, about ten minutes twice a year.

My client's first published update is dated yesterday. He has never been more autonomous, and there is nothing left to maintain.
