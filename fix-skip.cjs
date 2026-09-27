const fs = require('fs');

let c = fs.readFileSync('src/pages/[lang]/sourcing/[sector].astro', 'utf8');
c = c.replace(/\r\n/g, '\n');

if (!c.includes('uk: { skip:')) {
  c = c.replace(/  vi: \{ skip: 'Chuyển đến nội dung chính', language: 'Chọn ngôn ngữ', menu: 'Mở menu ngôn ngữ', close: 'Đóng menu ngôn ngữ' \}\n/g,
    `  vi: { skip: 'Chuyển đến nội dung chính', language: 'Chọn ngôn ngữ', menu: 'Mở menu ngôn ngữ', close: 'Đóng menu ngôn ngữ' },\n  uk: { skip: 'Перейти до основного контенту', language: 'Вибір мови', menu: 'Відкрити мовне меню', close: 'Закрити мовне меню' }\n`);
  fs.writeFileSync('src/pages/[lang]/sourcing/[sector].astro', c, 'utf8');
}

let c2 = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
c2 = c2.replace(/\r\n/g, '\n');
if (c2.includes("lang === 'ru' ? 'Перейти к содержанию'")) {
  c2 = c2.replace("lang === 'ru' ? 'Перейти к содержанию'", "lang === 'ru' ? 'Перейти к содержанию' : lang === 'uk' ? 'Перейти до основного контенту'");
  fs.writeFileSync('src/layouts/BaseLayout.astro', c2, 'utf8');
}

console.log('done fixing skip');
