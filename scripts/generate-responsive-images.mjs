import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import sharp from 'sharp';

const sourceDir = resolve('public/images');
const outputDir = join(sourceDir,'generated');
const manifestPath = join(outputDir,'manifest.json');
const quality = 80;
const productWidths = [360,540,720,768,960];
const featureWidths = [640,768,960,1280,1536];
const productSources = [
  'ctseg-iranian-pistachios-premium.webp',
  'ctseg-green-peeled-pistachio-kernels-premium.webp',
  'ctseg-pistachio-kernel-crumb-premium.webp',
  'ctseg-mazafati-dates-authentic-premium.webp',
  'ctseg-date-paste-premium.webp',
  'ctseg-date-syrup-premium.webp',
  'ctseg-iranian-golden-raisins-premium.webp',
  'ctseg-iranian-almonds-premium.webp',
  'ctseg-iranian-walnuts-premium.webp',
  'ctseg-dried-apricots-premium.webp',
  'ctseg-apricot-kernels-premium.webp',
  'ctseg-pumpkin-seeds-premium.webp',
  'ctseg-sunflower-seeds-premium.webp',
  'ctseg-persian-red-gold-saffron-premium.webp',
  'ctseg-iranian-dried-mulberries-premium.webp',
  'ctseg-zereshk-dried-barberries-premium.webp',
  'ctseg-mixed-nuts-premium.webp'
];
const jobs = [
  ...productSources.map((source) => ({ source, widths:productWidths, quality })),
  { source:'ctseg-global-trade-hero-premium.webp', widths:featureWidths, quality },
  { source:'ctseg-vegetable-oils-food-editorial.webp', widths:featureWidths, quality },
  { source:'ctseg-mixed-nuts-premium.webp', widths:featureWidths, quality },
  { source:'ctseg-iranian-carpets-editorial.webp', widths:featureWidths, quality },
  { source:'ctseg-wholesale-textiles-editorial.webp', widths:featureWidths, quality },
  { source:'2.webp', widths:featureWidths, quality }
];

mkdirSync(outputDir,{recursive:true});
const previous = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath,'utf8')) : {};
const next = {};
let created = 0;
let skipped = 0;

for (const job of jobs) {
  const sourcePath = join(sourceDir,job.source);
  if (!existsSync(sourcePath)) throw new Error(`Missing responsive image source: ${job.source}`);
  const sourceHash = createHash('sha256').update(readFileSync(sourcePath)).digest('hex');
  const stem = basename(job.source,'.webp');
  for (const width of job.widths) {
    const filename = `${stem}-${width}.webp`;
    const outputPath = join(outputDir,filename);
    const key = `${job.source}:${width}`;
    const signature = `${sourceHash}:${width}:${job.quality}:webp-v1`;
    if (previous[key] === signature && existsSync(outputPath)) {
      skipped++;
    } else {
      await sharp(sourcePath)
        .resize({width,withoutEnlargement:true})
        .webp({quality:job.quality,effort:5,smartSubsample:true})
        .toFile(outputPath);
      created++;
    }
    next[key] = signature;
  }
}

const logoSource = 'ctseg-logo-transparent.png';
const logoPath = join(sourceDir,logoSource);
const logoHash = createHash('sha256').update(readFileSync(logoPath)).digest('hex');
const logoOutput = join(outputDir,'ctseg-logo-transparent-320.webp');
const logoKey = `${logoSource}:320`;
const logoSignature = `${logoHash}:320:lossless-webp-v1`;
if (previous[logoKey] === logoSignature && existsSync(logoOutput)) {
  skipped++;
} else {
  await sharp(logoPath).resize({width:320,withoutEnlargement:true}).webp({lossless:true,effort:6}).toFile(logoOutput);
  created++;
}
next[logoKey] = logoSignature;

const nextManifest = `${JSON.stringify(next,null,2)}\n`;
const currentManifest = existsSync(manifestPath) ? readFileSync(manifestPath,'utf8') : '';
if (currentManifest !== nextManifest) writeFileSync(manifestPath,nextManifest);
console.log(`Responsive image generation complete: ${created} created, ${skipped} unchanged, ${Object.keys(next).length} total.`);
