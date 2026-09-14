import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

const W = 1200, H = 630;

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Wrap a title into <=3 visual lines of ~38 chars, ending with ellipsis if longer. */
function wrapTitle(title: string, maxLines = 3): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > 38 && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1) {
        lines.push(words.slice(words.indexOf(word)).join(' '));
        break;
      }
    } else {
      line = candidate;
    }
  }
  if (lines.length < maxLines && line && !lines.includes(line)) lines.push(line);
  const trimmed = lines.slice(0, maxLines);
  const last = trimmed[trimmed.length - 1];
  if (lines.length >= maxLines && words.join(' ').length > trimmed.join(' ').length) {
    trimmed[trimmed.length - 1] = last.endsWith('.') ? last.slice(0, -1) + '…' : last + '…';
  }
  return trimmed;
}

export async function getStaticPaths() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props;

  const titleLines = wrapTitle(post.data.title);
  const titleSvg = titleLines
    .map((line, i) => `<text x='110' y='${330 + i * 76}' font-family='Satoshi Variable' font-weight='700' font-size='62' fill='#ededf2' letter-spacing='-1.5'>${escapeXml(line)}</text>`)
    .join('');

  const svg = `<svg width='${W}' height='${H}' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <radialGradient id='glow' cx='15%' cy='15%' r='70%'>
      <stop offset='0%' stop-color='#8d8af0' stop-opacity='0.16'/>
      <stop offset='100%' stop-color='#0b0b10' stop-opacity='0'/>
    </radialGradient>
    <linearGradient id='rule' x1='0' y1='0' x2='1' y2='0'>
      <stop offset='0%' stop-color='#8d8af0' stop-opacity='0.9'/>
      <stop offset='100%' stop-color='#8d8af0' stop-opacity='0.1'/>
    </linearGradient>
  </defs>
  <rect width='${W}' height='${H}' fill='#0b0b10'/>
  <rect width='${W}' height='${H}' fill='url(#glow)'/>

  <g stroke='#8d8af0' stroke-opacity='0.16' stroke-width='1.4' fill='none'>
    <path d='M1040 130 L940 80'/><path d='M1040 130 L1130 90'/>
    <path d='M1040 130 L950 210'/><path d='M1040 130 L1130 220'/>
  </g>
  <g fill='#0b0b10' stroke='#8d8af0' stroke-opacity='0.3' stroke-width='1.6'>
    <circle cx='940' cy='80' r='10'/><circle cx='1130' cy='90' r='10'/>
    <circle cx='950' cy='210' r='10'/><circle cx='1130' cy='220' r='10'/>
  </g>
  <circle cx='1040' cy='130' r='17' fill='#8d8af0' fill-opacity='0.12' stroke='#8d8af0' stroke-opacity='0.5' stroke-width='2'/>

  <text x='110' y='160' font-family='Satoshi Variable' font-weight='500' font-size='26' fill='#8d8af0' letter-spacing='3'>WRITING · CAMILLEAUBERT.COM</text>

  ${titleSvg}

  <rect x='110' y='${330 + titleLines.length * 76 - 40}' width='170' height='4' fill='url(#rule)'/>

  <text x='110' y='${H - 90}' font-family='Satoshi Variable' font-weight='500' font-size='26' fill='#9a9aa8'>${escapeXml(post.data.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))}</text>
  <text x='110' y='${H - 46}' font-family='Satoshi Variable' font-weight='400' font-size='22' fill='#9a9aa8' fill-opacity='0.7'>Camille Aubert · Lead Developer &amp; AI Solutions Architect</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
