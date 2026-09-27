const fs = require('fs');
let t = fs.readFileSync('src/lib/routes.ts', 'utf8');

// Add fallback after "const copy = pageCopy[lang];" and "const t = ui[lang];"
t = t.replace(
  'const copy = pageCopy[lang];\n  const t = ui[lang];',
  "const copy = pageCopy[lang] || pageCopy['en'];\n  const t = ui[lang] || ui['en'];"
);
t = t.replace(
  "const copy = pageCopy[lang];\n  const t = ui[lang];",
  "const copy = pageCopy[lang] || pageCopy['en'];\n  const t = ui[lang] || ui['en'];"
);

fs.writeFileSync('src/lib/routes.ts', t);
console.log('Fixed getMeta fallbacks in routes.ts');
