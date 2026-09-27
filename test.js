function t(s, ...v) { return ''; }
const b = false;
b && t`hello ${(() => { throw new Error('evaluated!') })()}`;
console.log('success');
