(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const loadScript = (src) => new Promise((resolve, reject) => {
    const existing = [...document.scripts].find((script) => script.src === src);
    if (existing) {
      if (existing.dataset.loaded === 'true') resolve();
      else existing.addEventListener('load', resolve, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = () => { script.dataset.loaded = 'true'; resolve(); };
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const initMarquee = () => {
    const tradePaths = document.querySelector('.trade-paths-section');
    if (!tradePaths || document.querySelector('.premium-trade-marquee')) return;

    const locale = document.documentElement.dataset.locale || document.documentElement.lang || 'en';
    const copy = {
      tr:'KÜRESEL TİCARET · STRATEJİK TEDARİK · PAZARA GİRİŞ · DOĞRULANMIŞ ÜRETİCİLER · ',
      en:'GLOBAL TRADE · STRATEGIC SOURCING · MARKET ENTRY · VERIFIED PRODUCERS · ',
      de:'GLOBALER HANDEL · STRATEGISCHE BESCHAFFUNG · MARKTEINTRITT · GEPRÜFTE HERSTELLER · ',
      it:'COMMERCIO GLOBALE · SOURCING STRATEGICO · INGRESSO NEI MERCATI · PRODUTTORI VERIFICATI · ',
      fa:'تجارت جهانی · تأمین استراتژیک · ورود به بازار · تولیدکنندگان تأییدشده · ',
      ru:'ГЛОБАЛЬНАЯ ТОРГОВЛЯ · СТРАТЕГИЧЕСКИЙ СОРСИНГ · ВЫХОД НА РЫНОК · ПРОВЕРЕННЫЕ ПРОИЗВОДИТЕЛИ · ',
      zh:'全球贸易 · 战略采购 · 市场进入 · 已验证制造商 · ',
      vi:'THƯƠNG MẠI TOÀN CẦU · SOURCING CHIẾN LƯỢC · THÂM NHẬP THỊ TRƯỜNG · NHÀ SẢN XUẤT ĐÃ XÁC MINH · '
    };
    const text = copy[locale] || copy.en;

    if (!document.getElementById('premium-marquee-styles')) {
      const style = document.createElement('style');
      style.id = 'premium-marquee-styles';
      style.textContent = `
        .premium-trade-marquee{overflow:hidden;background:#c4f000;color:#0a0a0a;border-top:1px solid rgba(10,10,10,.16);border-bottom:1px solid rgba(10,10,10,.16);padding:18px 0;position:relative;z-index:2}
        .premium-trade-marquee__track{display:flex;width:max-content;will-change:transform;animation:ctseg-premium-marquee 24s linear infinite}
        .premium-trade-marquee__text{flex:none;padding-right:.55em;font-size:clamp(34px,5.2vw,86px);line-height:.92;font-weight:700;letter-spacing:-.055em;white-space:nowrap}
        html[dir="rtl"] .premium-trade-marquee__track{direction:rtl;animation-direction:reverse}
        @keyframes ctseg-premium-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
        @media(max-width:760px){.premium-trade-marquee{padding:13px 0}.premium-trade-marquee__text{font-size:clamp(30px,10vw,46px)}}
      `;
      document.head.appendChild(style);
    }

    const band = document.createElement('div');
    band.className = 'premium-trade-marquee';
    band.setAttribute('aria-hidden','true');
    const track = document.createElement('div');
    track.className = 'premium-trade-marquee__track';
    [0,1].forEach(() => {
      const item = document.createElement('span');
      item.className = 'premium-trade-marquee__text';
      item.textContent = `${text}${text}`;
      track.appendChild(item);
    });
    band.appendChild(track);
    tradePaths.parentNode.insertBefore(band, tradePaths);
  };

  const initFallback = () => {
    initMarquee();
    const items = document.querySelectorAll('.trade-funnel-card,.platform-sector-grid article,.trade-paths-grid article,.corridor-list>div,.card,.content-block,.operational-trust-panel,.trust-facts>div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 700, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    items.forEach((item) => observer.observe(item));
  };

  const splitWords = (element) => {
    if (!element || element.dataset.premiumSplit === 'true' || window.innerWidth <= 860) return [];
    const text = element.textContent.trim();
    if (!text) return [];
    const words = text.split(/\s+/);
    element.textContent = '';
    words.forEach((word, index) => {
      const mask = document.createElement('span');
      mask.className = 'premium-word-mask';
      const inner = document.createElement('span');
      inner.className = 'premium-word';
      inner.textContent = word;
      mask.appendChild(inner);
      element.appendChild(mask);
      if (index < words.length - 1) element.appendChild(document.createTextNode(' '));
    });
    element.dataset.premiumSplit = 'true';
    return [...element.querySelectorAll('.premium-word')];
  };

  const initCursor = (gsap) => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const cursor = document.createElement('div');
    cursor.className = 'premium-cursor';
    document.body.appendChild(cursor);
    document.body.classList.add('premium-cursor-ready');
    const xTo = gsap.quickTo(cursor, 'x', { duration: .24, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: .24, ease: 'power3' });
    window.addEventListener('mousemove', (event) => {
      cursor.style.opacity = '1';
      xTo(event.clientX);
      yTo(event.clientY);
    }, { passive: true });
    document.querySelectorAll('a,button,.trade-funnel-card,.platform-sector-grid article').forEach((item) => {
      item.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
      item.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });
  };

  const init = () => {
    initMarquee();
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return initFallback();
    gsap.registerPlugin(ScrollTrigger);

    document.documentElement.classList.add('premium-motion-ready');
    const desktopMotion = window.matchMedia('(min-width: 1101px)').matches;

    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
      const heroWords = splitWords(heroTitle);
      if (heroWords.length) {
        gsap.set(heroTitle,{ perspective:900, transformStyle:'preserve-3d' });
        gsap.fromTo(heroWords,
          { y:50, yPercent:70, rotateX:-80, transformOrigin:'50% 100%', opacity:0 },
          { y:0, yPercent:0, rotateX:0, opacity:1, duration:1.8, stagger:.055, ease:'back.out(1.55)', delay:.08 }
        );
      }
    }
    gsap.fromTo('.hero-copy .eyebrow,.hero-copy .lead,.hero-copy .actions',
      { y:18, opacity:0 },
      { y:0, opacity:1, duration:.8, stagger:.1, ease:'power3.out', delay:.25 }
    );

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      gsap.fromTo(heroVisual,
        { clipPath:'inset(0 100% 0 0)' },
        { clipPath:'inset(0 0% 0 0)',duration:1.25,ease:'power3.inOut',delay:.14 }
      );
      const image = heroVisual.querySelector('img');
      if (image) gsap.fromTo(image,{ xPercent:5, scale:1.08 },{ xPercent:0, scale:1, duration:1.25, ease:'power3.inOut', delay:.14 });
    }

    const headingSelector = '.section-head h2,.markets-editorial h2,.company-trust-heading h2,.cta-statement h2,.page-hero h1';
    document.querySelectorAll(headingSelector).forEach((heading) => {
      const words = splitWords(heading);
      if (!words.length) return;
      gsap.set(heading,{ perspective:900, transformStyle:'preserve-3d' });
      gsap.fromTo(words,
        { yPercent:100, rotateX:-80, transformOrigin:'50% 100%', opacity:0 },
        {
          yPercent:0, rotateX:0, opacity:1, duration:1, stagger:.07, ease:'back.out(1.3)',
          scrollTrigger:{ trigger:heading, start:'top 88%', once:true }
        }
      );
    });

    const revealGroups = [
      ['.trade-funnel-card', 18, .08],
      ['.trade-paths-grid article', 18, .09],
      ['.platform-sector-grid article', 20, .08],
      ['.corridor-list>div', 16, .05],
      ['.market-line>div', 16, .05],
      ['.card', 18, .05],
      ['.content-block', 18, .05],
      ['.trust-facts>div', 16, .06],
      ['.operational-trust-panel', 18, .06]
    ];
    revealGroups.forEach(([selector, y, stagger]) => {
      const nodes = gsap.utils.toArray(selector);
      if (!nodes.length) return;
      nodes.forEach((node, index) => {
        gsap.fromTo(node,
          { y, opacity:0 },
          {
            y:0, opacity:1, duration:.75, ease:'power3.out', delay:Math.min(index * stagger,.2),
            scrollTrigger:{ trigger:node, start:'top 90%', once:true }
          }
        );
      });
    });

    if (desktopMotion) {
      document.querySelectorAll('.platform-sector-grid article').forEach((card, index) => {
        const image = card.querySelector('img');
        if (!image) return;
        gsap.fromTo(card,
          { clipPath:index % 2 === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' },
          {
            clipPath:'inset(0 0% 0 0)', duration:1.1, ease:'power3.inOut',
            scrollTrigger:{ trigger:card, start:'top 88%', once:true }
          }
        );
        gsap.fromTo(image,
          { xPercent:index % 2 === 0 ? 4 : -4, yPercent:-2, scale:1.08 },
          {
            xPercent:0, yPercent:2, scale:1.02, ease:'none',
            scrollTrigger:{ trigger:card, start:'top bottom', end:'bottom top', scrub:1.05 }
          }
        );
      });

      const corridors = document.querySelector('.corridor-list');
      if (corridors) {
        gsap.fromTo(corridors,{ xPercent:1.2 },{
          xPercent:-1.2,ease:'none',scrollTrigger:{trigger:corridors,start:'top bottom',end:'bottom top',scrub:1.2}
        });
      }

      const paths = document.querySelector('.trade-paths-grid');
      if (paths) {
        const pathCards = [...paths.querySelectorAll('article')];
        pathCards.forEach((card, index) => {
          gsap.fromTo(card,
            { yPercent:index % 2 === 0 ? 8 : -4 },
            { yPercent:index % 2 === 0 ? -6 : 7, ease:'none', scrollTrigger:{ trigger:paths, start:'top bottom', end:'bottom top', scrub:1.25 } }
          );
        });
      }
    }

    /* Sticky navigation remains available at every scroll position. */
    const header = document.querySelector('.site-header');
    if (header) gsap.set(header,{ yPercent:0, clearProps:'transform' });
  };

  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js'),
    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js')
  ]).then(init).catch(initFallback);
})();
