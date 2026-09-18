/**
 * Derive every brand icon from the GPT-generated master.
 *
 *  Master : public/brand/logo-ca-monogram.png (1024x1024, dark bg baked in)
 *  Run    : node scripts/generate-brand-icons.mjs
 *
 *  Two sources:
 *   - public/favicon.svg (classic "CA" letters): tab favicons 16/32/48,
 *     where letterforms beat the pictorial mark at tiny sizes.
 *   - MASTER (GPT monogram): touch icons / app icons / maskable base.
 *
 *  Two crops of the master:
 *   - TIGHT  : mark only (kept for reference / future use)
 *   - MEDIUM : mark + brand air, for touch icons / app icons / maskable base
 */
import sharp from 'sharp';

const MASTER = 'public/brand/logo-ca-monogram.png';
const TIGHT = { left: 140, top: 140, width: 744, height: 744 };
const MEDIUM = { left: 90, top: 90, width: 844, height: 844 };

const jobs = [
  // Touch + app icons — medium crop keeps the brand air
  { crop: MEDIUM, size: 180, out: 'public/apple-touch-icon.png' },
  { crop: MEDIUM, size: 192, out: 'public/icon-192.png' },
  { crop: MEDIUM, size: 512, out: 'public/icon-512.png' },
];

for (const { crop, size, out } of jobs) {
  await sharp(MASTER)
    .extract(crop)
    .resize(size, size, { fit: 'fill' })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`ok  ${out} (${size}x${size})`);
}

// Tab favicons — rendered from the classic "CA" favicon.svg
// (letterforms stay legible where the pictorial mark turns to mush).
for (const size of [16, 32, 48]) {
  await sharp('public/favicon.svg')
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(`public/favicon-${size}.png`);
  console.log(`ok  public/favicon-${size}.png (${size}x${size}, from svg)`);
}

await sharp('public/favicon.svg')
  .resize(48, 48)
  .png({ compressionLevel: 9 })
  .toFile('public/favicon.png'); // Legacy path (same content, fresh pixels)
console.log('ok  public/favicon.png (48x48, from svg)');

// Maskable 512: mark at 80% centered on a full-bleed background
// (maskable safe zone = centered circle ~80% of the icon).
const mark = await sharp(MASTER)
  .extract(MEDIUM)
  .resize(410, 410, { fit: 'fill' })
  .toBuffer();

await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 0x0b, g: 0x0b, b: 0x10, alpha: 1 },
  },
})
  .composite([{ input: mark, left: 51, top: 51 }])
  .png({ compressionLevel: 9 })
  .toFile('public/icon-maskable-512.png');
console.log('ok  public/icon-maskable-512.png (maskable)');
