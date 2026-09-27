const fs = require('fs');

let c = fs.readFileSync('src/data/trade-sectors.ts', 'utf8');
c = c.replace(/\r\n/g, '\n');

if (!c.includes('uk:{name:')) {
  c = c.replace(/  vi:\{name:'Tiếng Việt'.*\}/,
    `  vi:{name:'Tiếng Việt',home:'Trang chủ CTSEG',contact:'Gửi yêu cầu thương mại',related:'Lĩnh vực thu mua liên quan',assurance:'Kiểm soát hỗ trợ quyết định mua hàng',process:'Quy trình thu mua được kiểm soát',checks:['Nhu cầu, ứng dụng và thông số kỹ thuật','Xác minh nhà sản xuất, công suất và uy tín','So sánh mẫu thử, chất liệu, chất lượng và báo giá','Đóng gói, bảo hiểm, logistics và điều phối giao hàng']},
  uk:{name:'Українська',home:'CTSEG Головна',contact:'Надіслати запит',related:'Схожі сфери',assurance:'Гарантія якості',process:'Процес закупівлі',checks:['Крок 1','Крок 2','Крок 3','Крок 4']}`);
  fs.writeFileSync('src/data/trade-sectors.ts', c, 'utf8');
}
console.log('done fixing tradeUi proper');
