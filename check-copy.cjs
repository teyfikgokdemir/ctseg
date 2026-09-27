const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');
// Find where copy.productUses is called (render side)
let idx = t.indexOf("copy.productUses.map");
console.log(t.substring(Math.max(0,idx-400), idx+50));
