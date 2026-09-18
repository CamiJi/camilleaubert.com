/**
 * Build the 1200x630 social card (og-image) with the new CA monogram.
 *
 *  Run: node scripts/generate-og-image.mjs
 *  Requires: Satoshi visible to fontconfig (system has it), sharp.
 *
 *  Layout: text left (proven sizes), logo as a rounded badge right —
 *  echoes the favicon tile (rounded rect + iris hairline).
 */
import sharp from 'sharp';

const W = 1200;
const H = 630;
const TILE = 260;
const TILE_X = 870;
const TILE_Y = 185;

const card = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="22%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#8d8af0" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="#8d8af0" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#8d8af0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0b0b10"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g font-family="Satoshi, sans-serif">
    <text x="90" y="200" font-size="26" font-weight="700" letter-spacing="3" fill="#8d8af0">LEAD DEVELOPER &amp; AI SOLUTIONS ARCHITECT</text>
    <text x="86" y="310" font-size="90" font-weight="700" fill="#ededf2">Camille Aubert</text>
    <rect x="92" y="348" width="200" height="4" fill="#8d8af0" opacity="0.8"/>
    <text x="90" y="420" font-size="31" font-weight="500" fill="#9a9aa8">Enterprise RAG &#183; Agents &#183; AI-assisted delivery</text>
    <text x="90" y="540" font-size="28" font-weight="500" fill="#6a6a78">camilleaubert.com</text>
  </g>
</svg>`);

// Rounded badge from the medium crop (keeps the brand air around the mark)
const mask = Buffer.from(
  `<svg width="${TILE}" height="${TILE}"><rect width="${TILE}" height="${TILE}" rx="40" fill="#fff"/></svg>`
);
const badge = await sharp('public/brand/logo-ca-monogram.png')
  .extract({ left: 90, top: 90, width: 844, height: 844 })
  .resize(TILE, TILE)
  .composite([{ input: mask, blend: 'dest-in' }])
  .toBuffer();

const border = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect x="${TILE_X}" y="${TILE_Y}" width="${TILE}" height="${TILE}" rx="40"
    fill="none" stroke="#8d8af0" stroke-opacity="0.35" stroke-width="2"/>
</svg>`);

await sharp(card)
  .composite([
    { input: badge, left: TILE_X, top: TILE_Y },
    { input: border, left: 0, top: 0 },
  ])
  .webp({ quality: 88 })
  .toFile('public/og-image.webp');

console.log('ok  public/og-image.webp (1200x630)');
