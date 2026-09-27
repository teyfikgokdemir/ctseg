const fs = require('fs');

let c = fs.readFileSync('src/components/PageContent.astro', 'utf8');

const ukTrending = `    vi: { title: 'Nfng lc thu mua ton cu', lead: 'Cǭc nfng lc cng nghip n i bt v nhu cu ng
nh trong cǭc hnh lang thng mЭi m chng ti quМn lǫ.', tags: ['SМn xuоt Cng nghip & Nguyn l
iu -', 'Hng tiu dng nhanh (FMCG) -', 'Dt may & VМi k thut -', 'Cng nghip ph tr " 
t -', 'Vt liu Xǽy dng & KiШn trc -', 'Bao bǪ & Polymer -', 'Cng ngh Nng nghip -', 'T
hiШt b< Y tШ & Chfm sc sc kh?e -'] },
    uk: { title: 'Глобальні закупівельні потужності', lead: 'Провідні промислові потужності та галузеві потреби у торгових коридорах, якими ми активно керуємо.', tags: ['Промислове виробництво та сировина ↗', 'Товари швидкого попиту (FMCG) ↗', 'Текстиль та технічні тканини ↗', 'Автомобільні компоненти ↗', 'Будівельні та архітектурні матеріали ↗', 'Пакування та полімери ↗', 'Агротехнології ↗', 'Медичне та оздоровче обладнання ↗'] }`;

// We'll replace the `vi: { ... }` with `vi: { ... }, uk: { ... }`
// The `vi` object string might be tricky to match perfectly.
// Let's do a more robust replacement using `lastIndexOf('}[lang];')`

const index = c.indexOf('const trendingSectorsData = {');
const endIndex = c.indexOf('}[lang];', index);

if (index !== -1 && endIndex !== -1) {
    const ukCopy = `,
    uk: { title: 'Глобальні закупівельні потужності', lead: 'Провідні промислові потужності та галузеві потреби у торгових коридорах, якими ми активно керуємо.', tags: ['Промислове виробництво та сировина ↗', 'Товари швидкого попиту (FMCG) ↗', 'Текстиль та технічні тканини ↗', 'Автомобільні компоненти ↗', 'Будівельні та архітектурні матеріали ↗', 'Пакування та полімери ↗', 'Агротехнології ↗', 'Медичне та оздоровче обладнання ↗'] }
  `;
    c = c.substring(0, endIndex) + ukCopy + c.substring(endIndex);
    fs.writeFileSync('src/components/PageContent.astro', c, 'utf8');
    console.log('Successfully replaced trendingSectorsData uk');
} else {
    console.log('Not found trendingSectorsData');
}
