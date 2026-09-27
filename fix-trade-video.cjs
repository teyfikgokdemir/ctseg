const fs = require('fs');
let c = fs.readFileSync('src/components/TradeVideo.astro', 'utf8');

const ukCopy = `    ,uk:{eyebrow:'CTSEG – Торгові операції',title:'Торгівля вимагає дисциплінованої координації, а не лише гарної інформації.',text:'Ми об\\'єднуємо дослідження продуктів, оцінку виробників, запити (RFQ), зразки, документацію та ринкову аналітику в єдиний комерційний потік.',label:'CTSEG процес комерційного дослідження та координації',tag:'Польова робота – Дані – Перевірка',stages:['Дослідження','Перевірка','RFQ','Зразки','Координація']}
  }[lang];`;

// Find `}[lang];`
const index = c.lastIndexOf('}[lang];');
if (index !== -1) {
    c = c.substring(0, index) + ukCopy + c.substring(index + '}[lang];'.length);
    fs.writeFileSync('src/components/TradeVideo.astro', c, 'utf8');
    console.log('Successfully replaced!');
} else {
    console.log('Not found');
}
