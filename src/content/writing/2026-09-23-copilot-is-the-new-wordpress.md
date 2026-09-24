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

## WordPress 2005, Copilot 2026

WordPress won by democratizing a layer. Before it, publishing on the web meant knowing HTML, FTP, and a server. After it, anyone could publish — at the price of maintaining a CMS: updates, plugins, backups, security holes, hosting bills.

Copilot and coding agents are democratizing a different layer: the modern static web. Same promise, new stack:

- **The repo is the CMS.** Content lives in Markdown files, versioned, diffable, reviewable.
- **The agent is the editor.** The client describes what he wants in plain language; the agent edits the files.
- **The push is the publication.** Every push to `main` rebuilds and redeploys the site in under two minutes.

The end client gets the same autonomy WordPress gave him — without the thing WordPress made him maintain.

## The concrete case

The client is Mathieu Fiorentini, senior sound designer. His credits include Heavy Rain, Detroit: Become Human, Watch Dogs: Legion, Tell Me Why and Banishers, for studios like Quantic Dream, Ubisoft, Don't Nod and Focus Entertainment. His old site ran on WordPress.com — free plan, domain connected.

Here is what replaced it:

- **Stack:** Astro 6 + Tailwind 4, 100% static, served by GitHub Pages, HTTPS via Let's Encrypt. Hosting cost: zero per month.
- **Content:** 17 projects, bilingual EN/FR — each project is two Markdown cards, one per language. English at the root, French under `/fr/`.
- **Weight:** 62 HTML pages (51 content pages + 11 redirect stubs), ~10 KB of HTML per page on average, 37 KB of CSS total, 86 KB of self-hosted fonts, **zero JavaScript files shipped**, zero cookies, zero trackers.
- **Publishing workflow:** duplicate a card, fill it in, push. The site rebuilds and goes live in one to two minutes. He ships roughly one game every six months — each release is about ten minutes of his time.
- **Contact form:** Formspree on its free tier, spam filtering on, email address obfuscated and never displayed in plain text.

That loop is visible to anyone: the Actions tab is a wall of green runs, about a minute each — several of them pushed by the client himself.

![Deploy runs on the earlyreflect repo: green GitHub Actions runs, about a minute each](/writing/copilot-is-the-new-wordpress/actions-vert.png)

And this is what those runs produce:

![The finished site: earlyreflect.com homepage with hero, client logos and work credits](/writing/copilot-is-the-new-wordpress/site-fini-hero.png)

And here is the honest part of the timeline: the initial plan was a WordPress port. The first round of feedback even said so explicitly — the Astro site was supposed to be a design reference, and I had estimated the port at five to seven days of work. Then the client started using the static workflow, merged his own PR on day one, and the port became unnecessary. The maquette became the site. That was never in the plan, and it is the strongest signal in this whole story.

## What WordPress still does better

Intellectual honesty first. For a portfolio updated twice a year, static plus agent wins. But WordPress still wins on:

- **Instant visual editing.** In WordPress, you see the change as you make it. Here, the client edits text and waits a minute to see the result. The local preview exists (`npm run dev`), but it is one more step.
- **The plugin ecosystem.** Need a booking calendar, a shop, member accounts? Someone already wrote the plugin. In the static world, every one of those is a small project.
- **Non-technical onboarding.** WordPress's admin is ugly but familiar. A repo, even with a guide, is unfamiliar the first time. My client needed one guided day; a WordPress user needs none.

If your site needs dynamic features or five editors with roles, stop reading and keep WordPress. This article is about the other 90%: the showcase sites, portfolios and landing pages that use a CMS as an expensive text file.

## The hidden price of WordPress nobody quotes

Nobody chooses WordPress for the maintenance. It comes with the bundle, and the bundle is:

- **Updates, forever.** Core, theme, plugins — each with its own schedule and its own way of breaking the site.
- **Security as a background worry.** The most deployed CMS on earth is the most scanned. A static site has no login page, no database, no PHP to exploit. There is nothing to hack except the GitHub account, which has two-factor auth.
- **Backups you actually have to test.** With a repo, every version of every page is in history. `git log` is the backup, and it restores with one command.
- **The plan ladder.** The free WordPress.com plan allows neither custom themes nor plugins. A custom design like this one requires the Business plan — roughly 25 to 35 euros a month. The static equivalent costs nothing to host.

For two content updates a year, that is a lot of standing cost for very little publishing.

## The traps, told honestly

This is the section that makes the rest believable. Everything below really happened, most of it on the day of the domain switch:

1. **The free-plan wall.** As said above: no custom theme, no plugin on WordPress.com free. That constraint is what killed the port option economically before the workflow killed it practically.
2. **The wildcard CNAME.** After pointing the domain at GitHub Pages, the HTTPS certificate stayed stuck on "Certificate Requested" for hours, serving a `*.github.io` certificate instead. Cause: a leftover wildcard `CNAME *` record in the DNS zone, silently breaking Let's Encrypt validation. Fix: delete the wildcard, reset the custom domain in settings. Issuance took minutes after that.
3. **The double slash.** Switching the site base from a project subpath to the domain root produced `//images/` URLs and broken redirect destinations. Fixed with a small asset helper and normalized redirect paths — two commits, caught by the static audit script before anyone noticed.
4. **Fake redirects.** GitHub Pages is static hosting: there are no server-side 301s. The 11 legacy URLs (old portfolio paths plus eight slugs still indexed from the WordPress sitemap) redirect through stub pages with meta-refresh. It works for visitors and search engines, but it is not a real 301, and I will not pretend otherwise.

Remaining: updating Search Console to the new domain, the French CV (currently a placeholder), and key art for a few projects pending rights clearance. That todo list is now the client's, written in plain language, in his own repo. That is the point.

## The repo is the new CMS

WordPress's historic achievement was letting non-developers publish without coding. That achievement stands. But the price — a dynamic CMS to feed, patch and pay for, just to serve pages that change twice a year — no longer makes sense for showcase sites.

The new division of labour is simpler: the client owns Markdown cards and plain-language requests, the agent owns the files, the pipeline owns the deployment. One prompt plus one push, and the site is live in five minutes. One filled-in card plus one push, and the new project is online in two.

My client's first merged PR is dated yesterday. He has never been more autonomous, and there is no admin panel left to maintain.
