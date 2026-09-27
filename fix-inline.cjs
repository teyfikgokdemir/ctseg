const fs = require('fs');
let c = fs.readFileSync('src/components/PageContent.astro', 'utf8');
c = c.replace(/\r\n/g, '\n');

function addUk(regexStr, ukStr) {
    const regex = new RegExp(regexStr);
    c = c.replace(regex, (match, p1) => {
        return p1 + ", uk:" + ukStr + "}[lang]";
    });
}

// 1. marketNames
addUk(
    /((?:vi|zh):\[[^\]]+\])\s*\}\[lang\];/,
    "['Туреччина','Європа','Міжнародні']"
);

// 2. legalLabel
addUk(
    /((?:vi|zh):'[^']+')\}\[lang\];/,
    "'Юридичні'"
);

// 3. updatedDate
// 27 thǭng 7, 2026'}[lang];
addUk(
    /(vi:'27 thǭng 7, 2026')\}\[lang\];/,
    "'27 липня 2026'"
);

// 4. catalogueGroups titles
// 'pistachio'
addUk(
    /(vi:'C[^\']*i')\}\[lang\]/,
    "'Сорти фісташок'"
);
// 'dates'
addUk(
    /(vi:'Ch[^\']*l[^\']*')\}\[lang\]/,
    "'Фініки та продукти з фініків'"
);
// 'nuts'
addUk(
    /(vi:'C[^\']*h[^\']*t')\}\[lang\]/,
    "'Горіхи'"
);
// 'dried-fruit'
addUk(
    /(vi:'Tr[^\']*kh[^\']*')\}\[lang\]/,
    "'Сухофрукти'"
);
// 'seeds'
addUk(
    /(vi:'C[^\']*u')\}\[lang\]/,
    "'Насіння'"
);
// 'specialities'
addUk(
    /(vi:'Saffron \&[^\']*n')\}\[lang\]/,
    "'Шафран та спеціалітети'"
);

// 5. Fallbacks for insight labels
// || 'Categories'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Categories'/,
    "'Категорії'"
);
// || 'Featured Analysis'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Featured Analysis'/,
    "'Вибраний аналіз'"
);
// || 'Read Article'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Read Article'/,
    "'Читати статтю'"
);
// || 'Executive Summary'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Executive Summary'/,
    "'Короткий зміст'"
);
// || 'CTSEG Trade Desk'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'CTSEG Trade Desk'/,
    "'CTSEG Trade Desk'"
);
// || 'Related Service'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Related Service'/,
    "'Пов\\'язані послуги'"
);
// || 'Related Intelligence'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Related Intelligence'/,
    "'Схожі матеріали'"
);
// || 'Commercial Assessment'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Commercial Assessment'/,
    "'Комерційна оцінка'"
);
// || 'Need to verify your supply chain?'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Need to verify your supply chain\?'/,
    "'Потрібно перевірити ланцюг постачання?'"
);
// || 'Submit your commercial inquiry.'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Submit your commercial inquiry\.'/,
    "'Надішліть свій комерційний запит.'"
);
// || 'Submit Request'
addUk(
    /(vi: '[^']+')\n\s*\}\[lang\] \|\| 'Submit Request'/,
    "'Надіслати запит'"
);

// 6. processLabels
// vi:{boundary:...answers:...answerLead:...}
addUk(
    /(vi:\{boundary:'[^']+',answers:'[^']+',answerLead:'[^']+'\})\n\s*\}\[lang\];/,
    "{boundary:'Межі ролі та відповідальності',answers:'Прямі відповіді',answerLead:'Ключові запитання щодо закупівель та координації торгівлі.'}"
);

// 7. scenarioKicker
addUk(
    /(vi:'K[^']+n')\}\[lang\];/,
    "'Репрезентативний сценарій'"
);

// 8. productCommercialLabels
// vi:['X...','...']
addUk(
    /(vi:\[[^\]]+\])\n\s*\}\[lang\];/,
    "['Походження','Сорт / різновид','Життєздатне пакування','Мінімальна партія (MOQ)','Документи щодо якості','Зразки','Власна торгова марка (OEM)','Доставка та Incoterms','Час виконання','Зберігання','Цільове призначення','Необхідна інформація для ціноутворення']"
);

// 9. verificationLabels
// vi:['...','...']
addUk(
    /(vi:\[[^\]]+\])\n\s*\}\[lang\];/,
    "['Перевірено на основі виробника та структури замовлення','Затверджено на етапі котирування','Перевіряється для кожної партії','Оцінюється за запитом','Оцінюється на основі виробника та цільового ринку']"
);

fs.writeFileSync('src/components/PageContent.astro', c, 'utf8');
console.log('Fixed inline uk arrays!');
