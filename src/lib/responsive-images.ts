import manifest from '../../public/images/generated/manifest.json';

export const PRODUCT_IMAGE_WIDTHS = [360,540,720,768,960] as const;
export const FEATURE_IMAGE_WIDTHS = [640,768,960,1280,1536] as const;
export const HERO_IMAGE = '/images/ctseg-global-trade-hero-premium.webp';
export const PORTFOLIO_IMAGE = '/images/2.webp';
export const LOGO_IMAGE = '/images/ctseg-logo-transparent.png';

export const generatedImageSrc = (src:string, width:number) => {
  const sourceName = src.split('/').at(-1) ?? '';
  const filename = sourceName.replace(/\.(webp|png)$/i,'');
  const signature = (manifest as Record<string,string>)[`${sourceName}:${width}`]?.split(':')[0]?.slice(0,12);
  return `/images/generated/${filename}-${width}.webp${signature ? `?v=${signature}` : ''}`;
};

export const generatedImageSrcset = (src:string, widths:readonly number[]) =>
  widths.map((width) => `${generatedImageSrc(src,width)} ${width}w`).join(', ');
