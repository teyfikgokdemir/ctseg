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

  const initFallback = () => {
    const items = document.querySelectorAll('.trade-funnel-card,.platform-sector-grid article,.trade-paths-grid article,.corridor-list>div,.card,.content-block,.operational-trust-panel,.trust-facts>div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(42px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 850, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    items.forEach((item) => observer.observe(item));
  };

  const splitWords = (element) => {
    if (!element || element.dataset.premiumSplit === 'true') return [];
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
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return initFallback();
    gsap.registerPlugin(ScrollTrigger);

    document.documentElement.classList.add('premium-motion-ready');

    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
      const heroWords = splitWords(heroTitle);
      gsap.fromTo(heroWords,
        { yPercent: 125, rotate: 2, opacity: 0 },
        { yPercent: 0, rotate: 0, opacity: 1, duration: 1.05, stagger: .065, ease: 'back.out(1.4)', delay: .08 }
      );
    }
    gsap.fromTo('.hero-copy .eyebrow,.hero-copy .lead,.hero-copy .actions',
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, duration: .85, stagger: .1, ease: 'power3.out', delay: .34 }
    );
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      gsap.fromTo(heroVisual,{ clipPath:'inset(0 0 100% 0 round 22px)' },{ clipPath:'inset(0 0 0% 0 round 22px)',duration:1.2,ease:'power4.inOut',delay:.16 });
      const image = heroVisual.querySelector('img');
      if (image) gsap.fromTo(image,{ scale:1.16 },{ scale:1,duration:1.55,ease:'power3.out',delay:.18 });
    }

    const headingSelector = '.section-head h2,.markets-editorial h2,.company-trust-heading h2,.cta-statement h2,.page-hero h1';
    document.querySelectorAll(headingSelector).forEach((heading) => {
      const words = splitWords(heading);
      gsap.fromTo(words,
        { yPercent: 112, opacity: 0, rotate: 1 },
        {
          yPercent: 0, opacity: 1, rotate: 0, duration: .85, stagger: .045, ease: 'back.out(1.25)',
          scrollTrigger: { trigger: heading, start: 'top 88%', once: true }
        }
      );
    });

    const revealGroups = [
      ['.trade-funnel-card', 62, .12],
      ['.trade-paths-grid article', 70, .14],
      ['.platform-sector-grid article', 80, .1],
      ['.corridor-list>div', 42, .065],
      ['.market-line>div', 42, .065],
      ['.card', 55, .075],
      ['.content-block', 50, .06],
      ['.trust-facts>div', 40, .09],
      ['.operational-trust-panel', 55, .1]
    ];
    revealGroups.forEach(([selector, y, stagger]) => {
      const nodes = gsap.utils.toArray(selector);
      if (!nodes.length) return;
      nodes.forEach((node, index) => {
        gsap.fromTo(node,
          { y, opacity: 0 },
          {
            y: 0, opacity: 1, duration: .9, ease: 'power3.out', delay: Math.min(index * stagger, .3),
            scrollTrigger: { trigger: node, start: 'top 90%', once: true }
          }
        );
      });
    });

    document.querySelectorAll('.platform-sector-grid article').forEach((card) => {
      const image = card.querySelector('img');
      if (!image) return;
      gsap.fromTo(image,{ yPercent:-6, scale:1.1 },{
        yPercent:6, scale:1.02, ease:'none',
        scrollTrigger:{ trigger:card,start:'top bottom',end:'bottom top',scrub:1.1 }
      });
    });

    document.querySelectorAll('.trade-funnel-card').forEach((card, index) => {
      gsap.to(card,{
        y: index % 2 === 0 ? -22 : 18,
        ease:'none',
        scrollTrigger:{ trigger:card,start:'top bottom',end:'bottom top',scrub:1.2 }
      });
    });

    const corridors = document.querySelector('.corridor-list');
    if (corridors) {
      gsap.fromTo(corridors,{ xPercent:2 },{
        xPercent:-2,ease:'none',scrollTrigger:{trigger:corridors,start:'top bottom',end:'bottom top',scrub:1.3}
      });
    }

    initCursor(gsap);

    let lastY = window.scrollY;
    const header = document.querySelector('.site-header');
    if (header) {
      ScrollTrigger.create({
        start: 100,
        end: 'max',
        onUpdate: (self) => {
          const y = self.scroll();
          const down = y > lastY && y > 180;
          gsap.to(header,{ yPercent: down ? -105 : 0,duration:.42,ease:'power3.out',overwrite:true });
          lastY = y;
        }
      });
    }
  };

  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js'),
    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js')
  ]).then(init).catch(initFallback);
})();
