const fs = require('fs');
let t = fs.readFileSync('src/components/PageContent.astro', 'utf8');

if (!t.includes('import { tradeCorridors }')) {
  t = t.replace(
    "import { guides, processPages, completionHome } from '../data/completion';",
    "import { guides, processPages, completionHome } from '../data/completion';\nimport { tradeCorridors } from '../data/trade-corridors';"
  );
}

const corridorTemplate = `
{key === 'trade-corridor' && record.id && (() => {
  const corridor = tradeCorridors.find(c => c.id === record.id);
  if (!corridor) return null;
  return (
    <>
      <PageHero lang={lang} eyebrow={\`Global Trade \${lang.toUpperCase()}\`} title={corridor.seoMeta.title} lead={corridor.seoMeta.description} />
      <section class="section">
        <div class="container content-grid">
          <div class="prose">
            <div class="content-block">
              <h2>Sourcing from Turkey to {corridor.targetCountry}</h2>
              <p>Turkey offers unparalleled manufacturing quality and strategic logistics to {corridor.targetCountry}. We bridge the gap by providing direct access to verified manufacturers, reducing supply chain risks, and ensuring full compliance.</p>
            </div>
            
            <div class="content-block">
              <h2>Key Export Industries</h2>
              <ul class="check-list">
                {corridor.keyIndustries.map(ind => <li>{ind}</li>)}
              </ul>
            </div>
          </div>
          
          <aside class="side-panel">
            <div class="company-card" style="margin-bottom: 20px;">
              <span class="company-badge">Logistics & Transit</span>
              <div class="company-card-header">
                <h3>{corridor.logistics.mode}</h3>
              </div>
              <p style="font-size: 0.9rem; margin-top: 10px;">{corridor.logistics.description}</p>
              <dl class="company-meta-dl" style="margin-top: 14px;">
                <div><dt>Average Transit Time</dt><dd><strong>{corridor.logistics.transitTime}</strong></dd></div>
              </dl>
            </div>
            
            <div class="company-card">
              <span class="company-badge">Trade Compliance</span>
              <p style="font-size: 0.9rem; line-height: 1.5; margin: 10px 0 0;">{corridor.compliance}</p>
            </div>
          </aside>
        </div>
      </section>
      
      <section class="section answer-section">
        <div class="container">
          <div class="section-head">
            <h2>Ready to source for {corridor.targetCountry}?</h2>
            <p>{corridor.customCta}</p>
          </div>
          <div class="actions">
            <a class="button" href={sectionHref('contact')}>Contact our Trade Desk</a>
          </div>
        </div>
      </section>
    </>
  );
})()}
`;

// Insert it right before the `{key === 'markets' &&` block, or any known block
t = t.replace("{key === 'markets' && (", corridorTemplate + "\n  {key === 'markets' && (");

fs.writeFileSync('src/components/PageContent.astro', t);
console.log('done PageContent patch');
