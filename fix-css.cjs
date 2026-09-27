const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');
t = t.replace(
  '<ul class="check-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">',
  '<style>.trade-paths-section .check-list li { color: #d9d9d3 !important; } .trade-paths-section .company-badge { color: #c4f000 !important; border: 1px solid #c4f000 !important; background: transparent !important; }</style><ul class="check-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">'
);
fs.writeFileSync('src/components/PageContent.astro', t);
console.log('Fixed CSS');
