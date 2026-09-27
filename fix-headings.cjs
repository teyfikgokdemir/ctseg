const fs = require('fs');

function fixFile(file, replacements) {
    let c = fs.readFileSync(file, 'utf8');
    c = c.replace(/\r\n/g, '\n');
    let original = c;
    for (const [search, replace] of replacements) {
        c = c.replace(search, replace);
    }
    if (c !== original) {
        fs.writeFileSync(file, c, 'utf8');
        console.log(`Updated ${file}`);
    }
}

// 1. TradeVideo.astro
fixFile('src/components/TradeVideo.astro', [
    [/max-width:11ch;/g, 'max-width:15ch;'],
    [/font-size:clamp\(46px,4\.7vw,78px\);/g, 'font-size:clamp(38px,4.3vw,70px);'],
    [/max-width:14ch/g, 'max-width:18ch'] // media query max-width
]);

// 2. TradeHouseStatement.astro
fixFile('src/components/TradeHouseStatement.astro', [
    [/max-width:11ch;/g, 'max-width:15ch;'],
    [/font-size:clamp\(48px,5\.25vw,86px\);/g, 'font-size:clamp(40px,4.8vw,78px);'],
    [/max-width:14ch/g, 'max-width:18ch']
]);

// 3. site.css
fixFile('src/styles/site.css', [
    [/\.hero h1\{max-width:14ch;/g, '.hero h1{max-width:18ch;'],
    [/max-width:15ch;/g, 'max-width:18ch;'],
    [/\.product-page-hero h1\{font-size:clamp\(3rem,4\.6vw,5\.7rem\);max-width:13ch\}/g, '.product-page-hero h1{font-size:clamp(2.7rem,4.2vw,5.2rem);max-width:16ch}'],
    [/\.card h2,\.card h3\{max-width:18ch;/g, '.card h2,.card h3{max-width:22ch;'],
    [/\.trade-funnel-title\{margin:0;max-width:12ch;/g, '.trade-funnel-title{margin:0;max-width:16ch;']
]);

console.log('done fixing headings');
