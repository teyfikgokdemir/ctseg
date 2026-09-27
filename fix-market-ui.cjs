const fs = require('fs');
let c = fs.readFileSync('src/data/trade-markets.ts', 'utf8');

c = c.replace(/\r\n/g, '\n');

if (!c.includes('uk: { contact:')) {
  c = c.replace(/  vi: \{ contact: 'Yêu cầu đánh giá', home: 'Trang chủ', related: 'Thị trường khác', allMarkets: 'Tất cả thị trường' \},\n/,
    `  vi: { contact: 'Yêu cầu đánh giá', home: 'Trang chủ', related: 'Thị trường khác', allMarkets: 'Tất cả thị trường' },\n  uk: { contact: 'Запит', home: 'Головна', related: 'Інші ринки', allMarkets: 'Всі ринки' },\n`);
  fs.writeFileSync('src/data/trade-markets.ts', c, 'utf8');
}
console.log('done fixing marketUi');
