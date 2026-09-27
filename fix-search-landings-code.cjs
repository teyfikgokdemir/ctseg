const fs = require('fs');
let c = fs.readFileSync('src/data/search-landings.ts', 'utf8');

c = c.replace(/\r\n/g, '\n');

// Fix searchLandingPath
c = c.replace(/return searchLandings\[id\]\.paths\[lang\];/, `return searchLandings[id].paths[lang] || searchLandings[id].paths['en'].replace('/en/', '/' + lang + '/');`);

// Fix searchLandingAlternates
c = c.replace(/const landing=searchLandings\[id as SearchLandingId\];\n    return Object\.fromEntries\(Object\.entries\(landing\.paths\)\.map\(\(\[lang,path\]\)=>\[lang,`https:\/\/ctseg\.com\.tr\$\{path\}`\]\)\) as Record<Locale,string>;/,
`const landing=searchLandings[id as SearchLandingId];
    const paths = { ...landing.paths };
    if (!paths.uk) paths.uk = paths.en.replace('/en/', '/uk/');
    return Object.fromEntries(Object.entries(paths).map(([lang,path])=>[lang,\`https://ctseg.com.tr\${path}\`])) as Record<Locale,string>;`);

fs.writeFileSync('src/data/search-landings.ts', c, 'utf8');
console.log('done fixing search landings code');
