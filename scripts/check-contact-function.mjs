import { onRequest, onRequestPost } from '../functions/api/contact.js';

const makeContext = (body, origin='https://preview.ctseg.pages.dev', env={}, ip='203.0.113.10') => ({
  request:new Request('https://preview.ctseg.pages.dev/api/contact',{
    method:'POST',
    headers:{ origin,'content-type':'application/json','cf-connecting-ip':ip },
    body:JSON.stringify(body)
  }),
  env
});
const valid = {
  locale:'en',intent:'buyer_request',name:'Test Buyer',company:'Example Trade Ltd',email:'buyer@example.test',
  country:'Türkiye',requestType:'Product sourcing',product:'Pistachios',
  delivery:'Istanbul',privacy:'accepted',startedAt:String(Date.now()-5000),website:''
};
const expectStatus = async (response,status,label) => {
  if(response.status!==status)throw new Error(`${label}: expected ${status}, received ${response.status}`);
};

await expectStatus(onRequest(),405,'unsupported method');
await expectStatus(await onRequestPost(makeContext(valid,'https://evil.example',{},'203.0.113.11')),403,'origin validation');
await expectStatus(await onRequestPost(makeContext({...valid,email:'invalid'},undefined,{},'203.0.113.12')),400,'email validation');
await expectStatus(await onRequestPost(makeContext({...valid,intent:'unknown'},undefined,{},'203.0.113.16')),400,'intent validation');
await expectStatus(await onRequestPost(makeContext(valid,undefined,{},'203.0.113.13')),503,'missing email configuration');
await expectStatus(await onRequestPost(makeContext({...valid,website:'bot.example'},undefined,{},'203.0.113.14')),200,'honeypot');

const originalFetch=globalThis.fetch;
let outbound;
globalThis.fetch=async (url,options) => {
  outbound={url,options,body:JSON.parse(options.body)};
  return new Response(JSON.stringify({id:'test'}),{status:200});
};
try{
  await expectStatus(await onRequestPost(makeContext(valid,undefined,{
    RESEND_API_KEY:'test-key',CONTACT_FROM_EMAIL:'CTSEG <forms@example.test>',CONTACT_TO_EMAIL:'info@example.test'
  },'203.0.113.15')),200,'configured email delivery');
}finally{
  globalThis.fetch=originalFetch;
}
if(outbound?.url!=='https://api.resend.com/emails')throw new Error('email provider endpoint mismatch');
if(!outbound?.body?.text||outbound.body.html)throw new Error('email payload must be plain text');
if(outbound.body.reply_to!==valid.email)throw new Error('reply-to field mismatch');
if(!outbound.body.text.includes('Intent: buyer_request'))throw new Error('stable intent missing from email payload');

console.log('Contact function check passed: method, origin, validation, honeypot, configuration fallback and Resend delivery.');
