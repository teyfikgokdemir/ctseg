export const PRODUCT_IMAGE_WIDTHS = [360,540,720,768,960] as const;
export const FEATURE_IMAGE_WIDTHS = [640,768,960,1280,1536] as const;
export const HERO_IMAGE = '/images/ctseg-global-trade-hero-premium.webp';
export const PORTFOLIO_IMAGE = '/images/2.webp';

export const generatedImageSrc = (src:string, width:number) => {
  const filename = src.split('/').at(-1)?.replace(/\.webp$/i,'') ?? '';
  return `/images/generated/${filename}-${width}.webp`;
};

export const generatedImageSrcset = (src:string, widths:readonly number[]) =>
  widths.map((width) => `${generatedImageSrc(src,width)} ${width}w`).join(', ');
