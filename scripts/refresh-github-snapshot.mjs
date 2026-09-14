// Refresh the GitHub activity snapshot (contributions + recent repos).
// Used by the deploy CI before build; can be run manually: node scripts/refresh-github-snapshot.mjs
//
// Source 1 (primary): github.com official contribution calendar fragment (data-level per day)
// Source 2 (fallback): github-contributions-api.jogruber.de
// Source 3 (final fallback): existing snapshot file
import { writeFileSync, readFileSync } from 'node:fs';

const USER = 'CamiJi';

async function fetchText(url, timeoutMs = 10000) {
  const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function fetchJson(url, timeoutMs = 10000) {
  return JSON.parse(await fetchText(url, timeoutMs));
}

async function fetchOfficialCalendar() {
  const html = await fetchText(`https://github.com/users/${USER}/contributions?_=${Date.now()}`);
  const contributions = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g)]
    .map((m) => ({ date: m[1], count: -1, level: Number(m[2]) }));
  if (contributions.length < 300) throw new Error(`calendar too short (${contributions.length} days)`);
  const total = Number(html.match(/>\s*(\d+)\s*\n?\s*<\/h2>|(\d+)\s*contributions\s*in the last year/)?.[1] ?? 0);
  return { contributions, total };
}

async function fetchJogruber() {
  const data = await fetchJson(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`);
  return { contributions: data.contributions ?? [], total: data.total?.lastYear ?? 0 };
}

async function fetchRepos() {
  const repos = await fetchJson(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=3`);
  return repos.map((r) => ({
    name: r.name,
    url: r.html_url,
    description: r.description ?? '',
    pushedAt: r.pushed_at,
  }));
}

try {
  const [calendar, repos] = await Promise.all([
    fetchOfficialCalendar().catch(() => fetchJogruber()),
    fetchRepos().catch(() => null),
  ]);

  let previous = {};
  try {
    previous = JSON.parse(readFileSync(new URL('../src/data/github-snapshot.json', import.meta.url), 'utf8'));
  } catch { /* first run */ }
  const prevByDate = new Map((previous.contributions ?? []).map((c) => [c.date, c]));

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    totalContributions: calendar.total || previous.totalContributions || 0,
    contributions: calendar.contributions.map((c) => ({
      date: c.date,
      count: c.count >= 0 ? c.count : (prevByDate.get(c.date)?.count ?? 0),
      level: c.level,
    })),
    repos: repos ?? previous.repos ?? [],
  };

  writeFileSync(
    new URL('../src/data/github-snapshot.json', import.meta.url),
    JSON.stringify(snapshot, null, 2) + '\n',
  );
  console.log(`snapshot refreshed: ${snapshot.totalContributions} contributions (${calendar.contributions.length} days), repos: ${snapshot.repos.length}`);
} catch (e) {
  console.error('snapshot refresh failed (keeping existing snapshot):', e.message);
  process.exit(0); // non-blocking: fallback snapshot stays
}
