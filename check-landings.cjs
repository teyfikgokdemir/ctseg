const fs = require('fs');
const t = fs.readFileSync('src/data/search-landings.ts','utf8');
const lines = t.split('\n');
const matches = [];
for(let i=0;i<lines.length;i++){
  if(lines[i].match(/"(en|tr|de|it|ru|fa|zh|vi|uk)":\s*\{/)) {
    matches.push(i + ': ' + lines[i].substring(0,60));
  }
}
console.log(matches.slice(0,40).join('\n'));
