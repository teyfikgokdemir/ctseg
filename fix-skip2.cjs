const fs = require('fs');

let c = fs.readFileSync('src/pages/[lang]/sourcing/[sector].astro', 'utf8');
c = c.replace(/\r\n/g, '\n');

if (!c.includes('uk: { skip:')) {
  // Try to find vi: { skip: ... }
  c = c.replace(/vi:\s*\{\s*skip:.*\}\s*\n/, (match) => match.trimEnd() + ",\n  uk: { skip: 'Перейти до основного контенту', language: 'Вибір мови', menu: 'Відкрити мовне меню', close: 'Закрити мовне меню' }\n");
  fs.writeFileSync('src/pages/[lang]/sourcing/[sector].astro', c, 'utf8');
}

let c2 = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
c2 = c2.replace(/\r\n/g, '\n');
c2 = c2.replace(/lang === 'ru' \? '([^']+)'/, "lang === 'ru' ? '$1' : lang === 'uk' ? 'Перейти до основного контенту'");
fs.writeFileSync('src/layouts/BaseLayout.astro', c2, 'utf8');

console.log('done fixing skip');
