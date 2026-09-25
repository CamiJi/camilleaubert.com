---
title: "Copilot is the new WordPress"
date: 2026-09-23
dateModified: 2026-09-24
excerpt: "Mathieu, a sound designer friend who had never used git or built a website, wanted to ditch his Wordpress.com. For zero euros: an Astro.js + Tailwind + Pages setup — with Copilot as the CMS. He talks to the site, the site changes."
lang: en
translationOf: 2026-09-23-copilot-est-le-nouveau-wordpress
draft: false
---

![Cartoon cover: a cheerful robot pushing the dusty old WordPress logo away](/writing/copilot-is-the-new-wordpress/cover-cartoon.jpg)

Mathieu is an old friend from kindergarten — I've known him forever. I wanted to do him this favour, and it let me experiment with a new architecture for shipping personal-portfolio sites insanely fast, for free. He's a talented sound designer with a great career behind him: lifelike video games at cutting-edge Paris studios, sound design worthy of films. Technical profile, but he had never used git and never built a website. His ambition: replace his old site hosted on Wordpress.com.

From day one, he published his first update himself, with Copilot's help. That moment is the whole point of this article.

I wrote about the deployment loop behind this very site in [This website deploys itself](/writing/2026-09-12-this-website-deploys-itself/). This is the sequel, with a real case to prove it works outside my own setup.

![The GitHub Copilot app: ask anything, agent mode, linked to the repo](/writing/copilot-is-the-new-wordpress/copilot.png)

That's the whole interface he needs: no dashboard, no menus to learn. A conversation box connected to the site. He describes what he wants in his own words, Copilot changes the site from the inside. Even from a phone. And with the connected GitHub app, he'll soon edit the site right from the application — incredibly handy.

## The idea: a seriously clean site for zero euros

The idea was to see how, with AI at zero cost, an <a href="https://astro.build" target="_blank" rel="noopener">Astro.js</a> + <a href="https://tailwindcss.com" target="_blank" rel="noopener">Tailwind CSS</a> + GitHub Actions + GitHub Pages + <a href="https://formspree.io" target="_blank" rel="noopener">Formspree</a> stack could lay the foundations of a seriously clean website. One he could then interact with through the Copilot window, adding or removing content.

The deal has three parts:

- **It's free.** No hosting bill, no paid plan, no license. Zero euros — and the old WordPress CMS is gone.
- **There's nothing to learn.** No admin panel, no training. He changes the site from the inside, by talking to it: "add this game", "change that picture", "proofread my bio". Copilot edits, the site updates itself minutes later.
- **There's nothing to maintain.** No updates, no security patches, no backups to babysit. Static pages can't be broken into the way a CMS can.

And one honest clarification about roles: **I lay the foundations once** — design, structure, automatic publishing. A few hours of work: I'm an AI architect specialised in building AI-boosted automated processes. After that, no developer, no training, no maintenance contract. His whole job: fill in a ready-made card, send it online.

## Why this stack

Astro.js is static JS: no database needed. And that's the real strength of the setup — you just push small `.md` files that act as the database. One `my-project.md` holds every piece of information and lands straight on the site. Easy to do.

No roles to manage either — it's static. Add Tailwind CSS, which makes all the styling solid, with flawless responsive from the start. LLMs are particularly good at Tailwind, so it looks great right away.

The figures on Mathieu's site today: 17 projects in two languages, English and French. Featherweight pages that show up instantly, on phone and desktop alike — excellent Core Web Vitals scores. No cookies, no trackers. Contact form included thanks to Formspree, which makes forms dead easy — free plan at fifty sends a month — address hidden from bots. The free GitHub plan is plenty for the everyday prompts that change the content.

Every update leaves a public trace: a history of green checkmarks, one per publication — several started by Mathieu himself.

![Publication history: green checkmarks, one per site update, about a minute each](/writing/copilot-is-the-new-wordpress/actions-vert.png)

And this is what it produces:

![The finished site: earlyreflect.com homepage with hero, client logos and work credits](/writing/copilot-is-the-new-wordpress/site-fini-hero.png)

See it live: [earlyreflect.com](https://earlyreflect.com)

## The spec is his

First prompt with your chatbot — a ChatGPT, a Claude, a DeepSeek, a Mistral: ask it to write your website's spec. That's genuinely the client part. Mathieu had his inspiration, he wanted a website that looked like him — his to express in his own words: his tastes, his inspirations, his visual universe, his font.

I had nothing to do with it: he wrote his spec alone with his chatbot. Once the infrastructure was in place, all it took was feeding the spec to Copilot and the magic of the LLM turned it into code — V1 was immediately decent.

Then he could check it right away on my GitHub Pages URL, to see if it suited him.

## Feedback, same treatment

He tells me:
"Got some feedback."
I tell him:
"Listen, take your chatbot and do your feedback with it — rewrite me a spec out loud, about what you like, about what you see."
I gave him advice, but my core job was building the architecture: one that ships solid websites in five minutes, with an AI interface for making changes directly.

## What we're getting rid of

Above all, we're removing this WordPress CMS that has aged a little, with its old interface. It disappoints a lot of people: a bit austere, a bit hard to pick up. It can stay essential if you run a bigger site, a news section to fill regularly. But for a simple portfolio, a small free AI interface like the one GitHub Copilot offers lets you easily manage your website's content.

Last small hurdle: the domain. Fifteen to twenty euros a year, which he kept — plugged straight into GitHub Pages. Result: a free-hosted site where we open pull requests galore with chatbot-written specs.

Two honest limits. First roles: not really possible. Simplest is shared GitHub access on the repository — everyone makes a GitHub account and becomes a contributor. Then assets: keep them light, web format, no heavy videos (host those elsewhere). For a personal portfolio, that's plenty.

And the launch-day gremlins — certificate stuck on a leftover entry, images broken by double slashes, cobbled-together redirects for the 11 old addresses — all fixed within a few updates. Worth mentioning, because that's real launch life too.

## Conclusion

The Copilot AI interface, with repository access, has become the new CMS — voice-driven, at zero cost. I lay the foundations once — a few hours — and after that it's dead basic for him: fill in a card, send it online. And now that I know this architecture, I can rebuild it endlessly for any portfolio that wants one — basically a free Lovable: a free alternative to Lovable.

If you want to see the result, it's right here on <a href="https://earlyreflect.com" target="_blank" rel="noopener">earlyreflect.com</a> — go look, it turned out great. And if you want to check how it's built, the Git repo is public — go dig around: <a href="https://github.com/CamiJi/earlyreflect" target="_blank" rel="noopener">github.com/CamiJi/earlyreflect</a>.
