import { readFileSync } from 'fs';
import * as ts from 'typescript';

const code = readFileSync('src/components/PageContent.astro', 'utf8');
const scriptMatch = code.match(/---([\s\S]*?)---/);
if (!scriptMatch) {
  console.log('No frontmatter script found');
  process.exit(1);
}

// We need to just inject console.log for all mapped variables
// Let's do it manually with a small snippet
const script = scriptMatch[1];
console.log(script.substring(0, 500));
