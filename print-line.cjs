const fs = require('fs');
const dir = 'dist/.prerender/chunks';
const file = fs.readdirSync(dir).filter(f => f.startsWith('routes_'))[0];
const lines = fs.readFileSync(dir + '/' + file, 'utf8').split('\n');

const line = lines[11709];
console.log(line);
