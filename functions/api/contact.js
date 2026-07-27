const memoryRateLimit = new Map();
const allowedOrigins = [
  /^https:\/\/(?:www\.)?ctseg\.com\.tr$/,
  /^https:\/\/[a-z0-9-]+\.ctseg\.pages\.dev$/,
  /^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?$/
];
const limits = {
  locale:5,name:120,company:160,email:254,phone:80,country:100,requestType:120,
  product:240,quantity:120,delivery:180,targetDate:40,message:2000,website:80,startedAt:30,privacy:20
};
const required = ['name','company','email','country','requestType','product','delivery','privacy'];

const json = (body,status=200) => new Response(JSON.stringify(body),{
  status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}
});
const clean = (value,max) => String(value ?? '').replace(/\u0000/g,'').trim().slice(0,max);
const hash = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(digest)].map((byte)=>byte.toString(16).padStart(2,'0')).join('');
};
const rateLimited = async (context) => {
  const ip=context.request.headers.get('cf-connecting-ip')||'unknown';
  const key=`contact:${await hash(ip)}`;
  const now=Date.now();
  if(context.env.CONTACT_RATE_LIMIT?.get){
    const current=Number(await context.env.CONTACT_RATE_LIMIT.get(key)||0);
    if(current>=8)return true;
    await context.env.CONTACT_RATE_LIMIT.put(key,String(current+1),{expirationTtl:3600});
    return false;
  }
  const current=memoryRateLimit.get(key)||{count:0,expires:now+3600000};
  if(current.expires<now){current.count=0;current.expires=now+3600000}
  current.count+=1;memoryRateLimit.set(key,current);
  return current.count>8;
};

export async function onRequestPost(context){
  const origin=context.request.headers.get('origin')||'';
  if(!allowedOrigins.some((rule)=>rule.test(origin)))return json({code:'origin_rejected'},403);
  if(await rateLimited(context))return json({code:'rate_limited'},429);
  let raw;
  try{raw=await context.request.json()}catch{return json({code:'invalid_json'},400)}
  const data=Object.fromEntries(Object.entries(limits).map(([key,max])=>[key,clean(raw[key],max)]));
  if(data.website)return json({ok:true});
  if(required.some((key)=>!data[key]))return json({code:'missing_required_fields'},400);
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))return json({code:'invalid_email'},400);
  const startedAt=Number(data.startedAt);
  if(!Number.isFinite(startedAt)||Date.now()-startedAt<3500||Date.now()-startedAt>86400000)return json({code:'invalid_timing'},400);
  if(data.privacy!=='accepted')return json({code:'privacy_required'},400);
  const apiKey=context.env.RESEND_API_KEY;
  const to=context.env.CONTACT_TO_EMAIL||'info@ctseg.com.tr';
  const from=context.env.CONTACT_FROM_EMAIL;
  if(!apiKey||!from)return json({code:'email_unavailable'},503);
  const lines=[
    'CTSEG commercial assessment request',
    `Locale: ${data.locale}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone||'-'}`,
    `Country: ${data.country}`,
    `Request type: ${data.requestType}`,
    `Product or service: ${data.product}`,
    `Estimated quantity: ${data.quantity||'-'}`,
    `Delivery: ${data.delivery}`,
    `Target date: ${data.targetDate||'-'}`,
    `Additional details: ${data.message||'-'}`
  ];
  const response=await fetch('https://api.resend.com/emails',{
    method:'POST',
    headers:{authorization:`Bearer ${apiKey}`,'content-type':'application/json'},
    body:JSON.stringify({
      from,to:[to],reply_to:data.email,
      subject:`CTSEG commercial request - ${data.company}`,
      text:lines.join('\n')
    })
  });
  if(!response.ok)return json({code:'email_provider_error'},502);
  return json({ok:true});
}

export function onRequest(){
  return json({code:'method_not_allowed'},405);
}
