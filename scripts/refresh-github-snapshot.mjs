// Refresh the GitHub activity snapshot (contributions + recent repos).
// Used by the deploy CI before build; can be run manually: node scripts/refresh-github-snapshot.mjs
import { writeFileSync } from 'node:fs';

const USER = 'CamiJi';

async function fetchJson(url, timeoutMs = 8000) {
  const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

try {
  const [contributions, repos] = await Promise.all([
    fetchJson(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`),
    fetchJson(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=3`),
  ]);

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    totalContributions: contributions.total?.lastYear ?? contributions.total?.last365Days ?? 0,
    contributions: contributions.contributions ?? [],
    repos: repos.map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description ?? '',
      pushedAt: r.pushed_at,
    })),
  };

  writeFileSync(
    new URL('../src/data/github-snapshot.json', import.meta.url),
    JSON.stringify(snapshot, null, 2) + '\n',
  );
  console.log(`snapshot refreshed: ${snapshot.totalContributions} contributions, ${snapshot.repos.length} repos`);
} catch (e) {
  console.error('snapshot refresh failed (keeping existing snapshot):', e.message);
  process.exit(0); // non-blocking: fallback snapshot stays
}
