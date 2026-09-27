const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');
let idx = t.indexOf("key === 'products'");
console.log(t.substring(Math.max(0,idx-50), idx+500));
