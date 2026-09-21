import { getCollection } from 'astro:content';
import { site } from '../data/site';
import profile from '../data/profile.json';
import about from '../data/about.json';
import career from '../data/career.json';
import projects from '../data/projects.json';
import tech from '../data/tech.json';
import now from '../data/now.json';

/**
 * llms-full.txt — contenu complet du site en markdown, pour LLMs.
 * Généré depuis les data files + la collection `writing` : rebuild = regénération.
 */
export async function GET() {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const fmtDate = (d: Date) => d.toISOString().split('T')[0];
  const skills = tech.categories.flatMap((c: { title: string; skills: { name: string }[] }) =>
    c.skills.map((s) => s.name),
  );

  const blocks: string[] = [];
  for (const p of posts) {
    blocks.push(
      [
        `## ${p.data.title}`,
        '',
        `- Source: ${site.url}/writing/${p.id}/`,
        `- Lang: ${p.data.lang ?? 'en'} · Published: ${fmtDate(p.data.date)} · Modified: ${fmtDate(p.data.dateModified ?? p.data.date)}`,
        `- Excerpt: ${p.data.excerpt}`,
        ...(p.data.linkedinUrl ? [`- LinkedIn: ${p.data.linkedinUrl}`] : []),
        '',
        p.body ?? '',
      ].join('\n'),
    );
  }

  const out = [
    `# ${site.name} — camilleaubert.com (full content)`,
    '',
    `> ${profile.tagline}`,
    '',
    '## About',
    '',
    ...(about.paragraphs as string[]),
    '',
    '## Career',
    '',
    ...career.flatMap((c: { company: string; role: string; period: string; description: string; highlights: string[] }) => [
      `### ${c.role} — ${c.company} (${c.period})`,
      '',
      c.description,
      '',
      ...c.highlights.map((h) => `- ${h}`),
      '',
    ]),
    '## Expertise',
    '',
    skills.join(', '),
    '',
    '',
    '## Projects',
    '',
    ...projects.flatMap(
      (p: { title: string; status: string; description: string; tech: string[]; link: string }) => [
        `### ${p.title} [${p.status}]`,
        '',
        p.description,
        `- Stack: ${p.tech.join(', ')}`,
        ...(p.link ? [`- Link: ${p.link}`] : []),
        '',
      ],
    ),
    '## Now',
    '',
    ...(now.bullets as string[]).map((b) => `- ${b}`),
    '',
    '## Writing',
    '',
    ...blocks,
    '',
    '## Contact',
    '',
    `- Form: ${site.url}/contact/`,
    `- Email: ${profile.socials.find((s) => s.name === 'Email')?.url.replace('mailto:', '')}`,
    `- GitHub: ${profile.socials.find((s) => s.name === 'GitHub')?.url}`,
    `- LinkedIn: ${profile.socials.find((s) => s.name === 'LinkedIn')?.url}`,
    `- Identity: ${site.url}/persona.json`,
    '',
  ].join('\n');

  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
