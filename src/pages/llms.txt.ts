import { getCollection } from 'astro:content';
import { site } from '../data/site';

/**
 * llms.txt — index pour LLMs (convention llmstxt.org).
 * Généré depuis la collection `writing` : toujours à jour avec le contenu.
 */
export async function GET() {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const fmtDate = (d: Date) => d.toISOString().split('T')[0];

  const lines = [
    `# ${site.name} — camilleaubert.com`,
    '',
    `> ${site.name} — Lead Developer & AI Solutions Architect at Cegos Group. Enterprise RAG platforms, multi-agent orchestration, AI-assisted delivery. Writing (REX, FR/EN) and open-source side projects. Fontenay-le-Fleury, France.`,
    '',
    '## Pages',
    '',
    `- [Home](${site.url}/): one-pager — about, career, projects, tech stack, now, contact`,
    `- [About](${site.url}/about/): bio, career timeline, profile`,
    `- [Projects](${site.url}/projects/): applied AI systems and side projects`,
    `- [Writing](${site.url}/writing/): long-form REX, French and English`,
    `- [Contact](${site.url}/contact/): contact form, email, socials`,
    '',
    '## Writing',
    '',
    ...posts.map((p) => {
      const lang = p.data.lang ?? 'en';
      return `- [${p.data.title}](${site.url}/writing/${p.id}/): ${p.data.excerpt} [${lang}, ${fmtDate(p.data.date)}]`;
    }),
    '',
    '## Machine-readable identity',
    '',
    `- [persona.json](${site.url}/persona.json): structured identity, career, expertise, projects, contact`,
    `- [llms-full.txt](${site.url}/llms-full.txt): full site content in markdown`,
    '',
  ].join('\n');

  return new Response(lines, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
