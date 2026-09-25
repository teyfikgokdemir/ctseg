const memoryRateLimit = new Map();
const rateLimitQueues = new Map();
const allowedOrigins = [
  /^https:\/\/(?:www\.)?ctseg\.com\.tr$/,
  /^https:\/\/[a-z0-9-]+\.ctseg\.pages\.dev$/,
  /^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?$/
];
const limits = {
  locale:5,intent:40,supportNeed:60,tradeDirection:40,productFamily:40,name:120,company:160,emailOrPhone:254,email:254,phone:80,originMarket:100,destinationMarket:100,
  product:240,quantity:120,packaging:160,incoterm:30,delivery:180,targetDate:40,requirements:500,message:2000,website:80,startedAt:30,privacy:20,
  pagePath:200,landingPath:200,referrerHost:160,utmSource:100,utmMedium:100,utmCampaign:120,utmContent:120,utmTerm:120,clickId:160
};
const required = ['intent','supportNeed','tradeDirection','productFamily','name','company','emailOrPhone','message','privacy'];
const supportNeeds = ['supplier_sourcing','rfq_comparison','private_label','market_entry','document_assessment','external_trade_desk','other'];
const tradeDirections = ['export_from_turkiye','import_to_turkiye','cross_border_sourcing','market_entry','other'];
const productFamilies = ['vegetable_oils','nuts_dried_fruit','architectural_glass','biofuel_feedstock','other'];

const json = (body,status=200) => new Response(JSON.stringify(body),{
  status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}
});
const clean = (value,max) => value.replace(/\u0000/g,'').trim().slice(0,max);
const isPlainObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
const withRateLimitQueue = async (key,task) => {
  const previous=rateLimitQueues.get(key)||Promise.resolve();
  let release;
  const gate=new Promise((resolve)=>{release=resolve});
  const tail=previous.then(()=>gate);
  rateLimitQueues.set(key,tail);
  await previous;
  try{return await task()}finally{release();if(rateLimitQueues.get(key)===tail)rateLimitQueues.delete(key)}
};
const hash = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(digest)].map((byte)=>byte.toString(16).padStart(2,'0')).join('');
};
const rateLimited = async (context) => {
  const ip=context.request.headers.get('cf-connecting-ip')||'unknown';
  const key=`contact:${await hash(ip)}`;
  if(context.env.CONTACT_RATE_LIMITER?.limit){
    const decision=await context.env.CONTACT_RATE_LIMITER.limit({key});
    return !decision?.success;
  }
  return withRateLimitQueue(key,async()=>{
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
  });
};

export async function onRequestPost(context){
  const origin=context.request.headers.get('origin')||'';
  if(!allowedOrigins.some((rule)=>rule.test(origin)))return json({code:'origin_rejected'},403);
  if(await rateLimited(context))return json({code:'rate_limited'},429);
  let raw;
  try{raw=await context.request.json()}catch{return json({code:'invalid_json'},400)}
  if(!isPlainObject(raw))return json({code:'invalid_payload'},400);
  for(const key of Object.keys(limits)){
    if(raw[key]!==undefined&&raw[key]!==null&&typeof raw[key]!=='string')return json({code:'invalid_field_type',field:key},400);
  }
  const data=Object.fromEntries(Object.entries(limits).map(([key,max])=>[key,clean(raw[key]??'',max)]));
  if(data.website)return json({ok:true});
  if(required.some((key)=>!data[key]))return json({code:'missing_required_fields'},400);
  if(!['buyer_request','supplier_market_entry','external_trade_desk'].includes(data.intent))return json({code:'invalid_intent'},400);
  if(!supportNeeds.includes(data.supportNeed))return json({code:'invalid_support_need'},400);
  if(!tradeDirections.includes(data.tradeDirection))return json({code:'invalid_trade_direction'},400);
  if(!productFamilies.includes(data.productFamily))return json({code:'invalid_product_family'},400);
  const contact=data.emailOrPhone;
  const email=contact.includes('@')?contact:data.email;
  const phone=contact.includes('@')?data.phone:contact;
  if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return json({code:'invalid_email'},400);
  if(!email&&!phone)return json({code:'missing_contact'},400);
  if(!email&&phone.replace(/\D/g,'').length<7)return json({code:'invalid_phone'},400);
  const startedAt=Number(data.startedAt);
  if(!Number.isFinite(startedAt)||Date.now()-startedAt<3500||Date.now()-startedAt>86400000)return json({code:'invalid_timing'},400);
  if(data.privacy!=='accepted')return json({code:'privacy_required'},400);
  const apiKey=context.env.RESEND_API_KEY;
  const to=context.env.CONTACT_TO_EMAIL||'info@ctseg.com.tr';
  const from=context.env.CONTACT_FROM_EMAIL;
  if(!apiKey||!from)return json({code:'email_unavailable'},503);
  const lines=[
    'CTSEG commercial assessment request',
    `Intent: ${data.intent}`,
    `Requested support: ${data.supportNeed}`,
    `Trade direction: ${data.tradeDirection}`,
    `Product family: ${data.productFamily}`,
    `Locale: ${data.locale}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${email||'-'}`,
    `Phone: ${phone||'-'}`,
    `Origin or dispatch market: ${data.originMarket||'-'}`,
    `Target market: ${data.destinationMarket||'-'}`,
    `Product or service: ${data.product||'-'}`,
    `Estimated quantity: ${data.quantity||'-'}`,
    `Packaging or presentation: ${data.packaging||'-'}`,
    `Preferred Incoterm: ${data.incoterm||'-'}`,
    `Delivery: ${data.delivery||'-'}`,
    `Target date: ${data.targetDate||'-'}`,
    `Quality or document requirements: ${data.requirements||'-'}`,
    `Message: ${data.message}`,
    '',
    'Attribution (first touch)',
    `Submission page: ${data.pagePath||'-'}`,
    `Landing page: ${data.landingPath||'-'}`,
    `Referrer host: ${data.referrerHost||'-'}`,
    `UTM source / medium: ${data.utmSource||'-'} / ${data.utmMedium||'-'}`,
    `UTM campaign: ${data.utmCampaign||'-'}`,
    `UTM content / term: ${data.utmContent||'-'} / ${data.utmTerm||'-'}`,
    `Ad click ID: ${data.clickId||'-'}`
  ];
  const response=await fetch('https://api.resend.com/emails',{
    method:'POST',
    headers:{authorization:`Bearer ${apiKey}`,'content-type':'application/json'},
    body:JSON.stringify({
      from,to:[to],...(email?{reply_to:email}:{}),
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
