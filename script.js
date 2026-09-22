(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const year = $('#yearValue');
  if (year) year.textContent = new Date().getFullYear();

  const ui = document.createElement('style');
  ui.textContent = `
    .hero-visual,.hero-image{position:relative}
    .reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:none}
    .hero-image.banner-clickable{cursor:pointer}
    .hero-image.banner-clickable:after{content:'';position:absolute;inset:0;border:1px solid transparent;border-radius:inherit;transition:.25s;pointer-events:none}
    .hero-image.banner-clickable:hover:after{border-color:#6bdcffaa;box-shadow:0 0 35px #169dff33}
    .banner-detail-trigger{position:absolute;right:18px;bottom:18px;z-index:4;display:flex;align-items:center;gap:8px;border:1px solid #8bdcff99;border-radius:999px;padding:11px 16px;background:#071b38e8;color:#fff;cursor:pointer;font-weight:700;box-shadow:0 8px 30px #0008;transition:.25s}
    .banner-detail-trigger:hover{transform:translateY(-3px);background:#123568}
    .roadmap-section{padding:100px 0;background:linear-gradient(180deg,#07142a,#040b1a)}
    .roadmap-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:38px}
    .roadmap-card{padding:24px;border:1px solid #5380ca38;border-radius:20px;background:#0b1c36cc;box-shadow:0 18px 55px #0005}
    .roadmap-card span{color:#5ee7ff;font-size:.78rem;font-weight:800;letter-spacing:.12em}
    .roadmap-card h3{margin:12px 0 8px}.roadmap-card p{color:#8494ab;line-height:1.6;margin:0}
    @media(max-width:850px){.roadmap-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:600px){.roadmap-grid{grid-template-columns:1fr}.banner-detail-trigger{right:10px;bottom:10px}.banner-detail-trigger span{display:none}}
  `;
  document.head.appendChild(ui);

  const space = document.createElement('div');
  space.className = 'cinematic-space';
  space.setAttribute('aria-hidden', 'true');
  const earth = document.createElement('div');
  earth.className = 'earth-globe';
  earth.setAttribute('aria-hidden', 'true');
  document.body.prepend(space, earth);

  const header = $('.site-header');
  if (header && !$('.broadcast-bar', header)) {
    const bar = document.createElement('div');
    bar.className = 'broadcast-bar';
    bar.innerHTML = '<span>◉ <strong>LIVE</strong> &nbsp; India-focused web, app & API studio // Ranchi HQ</span><span><a href="tel:+917061899614">☎ +91 7061899614</a></span>';
    header.prepend(bar);
  }

  const layers = [
    ['01','Discovery','Goals, audience, competitors and success metrics aligned before production.'],
    ['02','Brand Strategy','A clear visual direction, voice and memorable positioning for your market.'],
    ['03','UX Architecture','User journeys, sitemap and information architecture that remove friction.'],
    ['04','Interface Design','Responsive, accessible screens with a premium visual system.'],
    ['05','Frontend Engineering','Fast, polished and maintainable web experiences for every device.'],
    ['06','Backend Systems','Secure APIs, databases and business logic that scale with demand.'],
    ['07','Mobile Experiences','Cross-platform app foundations for iOS and Android products.'],
    ['08','Commerce','Conversion-focused stores, payments and order workflows.'],
    ['09','Integrations','CRMs, analytics, payments, maps and third-party services connected cleanly.'],
    ['10','Performance','SEO, Core Web Vitals, caching and image optimization for speed.'],
    ['11','Quality & Security','Testing, backups, monitoring and release checks before launch.'],
    ['12','Growth Partnership','Analytics, experiments, maintenance and support after go-live.']
  ];

  const services = $('#services');
  if (services && !$('#layers')) {
    const section = document.createElement('section');
    section.id = 'layers';
    section.className = 'section layer-section';
    section.innerHTML = `<div class="container"><div class="section-heading reveal"><p class="eyebrow">The 12-layer system</p><h2>More than a website.<br><em>A complete digital engine.</em></h2><p>Every project is strengthened across twelve connected layers.</p></div><div class="layer-grid">${layers.map(([n,title,text]) => `<article class="layer-card reveal"><span class="layer-number">LAYER ${n}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div>`;
    services.after(section);
  }

  if (!$('#future')) {
    const section = document.createElement('section');
    section.id = 'future';
    section.className = 'section roadmap-section';
    section.innerHTML = `<div class="container"><div class="section-heading reveal"><p class="eyebrow">Future roadmap</p><h2>Built for today.<br><em>Ready for what comes next.</em></h2><p>Our future-ready plan keeps your digital product improving after launch.</p></div><div class="roadmap-grid"><article class="roadmap-card reveal"><span>PHASE 01 · NOW</span><h3>Launch foundation</h3><p>Fast, accessible, secure website with analytics and conversion tracking.</p></article><article class="roadmap-card reveal"><span>PHASE 02 · NEXT</span><h3>Automation layer</h3><p>CRM, notifications, smart workflows and dashboards that reduce manual work.</p></article><article class="roadmap-card reveal"><span>PHASE 03 · FUTURE</span><h3>Scale intelligence</h3><p>Mobile apps, AI-assisted experiences, experiments and international growth.</p></article></div></div>`;
    const contact = $('#contact');
    (contact || document.querySelector('main')).before(section);
  }

  const details = {
    banner:{name:'Banner details',subtitle:'Click the banner icon to explore the complete experience.',features:['Interactive banner controls with keyboard support','Full service and feature details in a focused modal','Direct contact action for the selected experience','Responsive experience on mobile, tablet and desktop']},
    mega:{name:'Mega Scale · ₹80,000',subtitle:'High-performance platform for ambitious teams.',features:['Grade architecture','120GB high-speed storage','Advanced DNS + SSL','24/7 technical squad support','Performance and security optimization']},
    custom:{name:'Custom App Ecosystem · ₹100,000',subtitle:'A bespoke application foundation with every critical service connected.',features:['Custom app ecosystem','Full block architecture','Global service integrations','Product design and strategy','Launch roadmap and analytics']},
    ultimate:{name:'Ultimate Command · ₹150,000',subtitle:'Complete ownership of full-scale web and app infrastructure.',features:['Custom web and app infrastructure','Complete ownership and governance','Lifetime support','Priority launch and optimization','Growth and maintenance partnership']}
  };

  const modal = $('#planModal');
  const content = $('#modalContent');
  const close = () => { if (!modal) return; modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
  const open = key => {
    const item = details[key] || details.banner;
    if (!modal || !content) return;
    content.innerHTML = `<div class="modal-header"><p class="eyebrow">Full details</p><h3 id="modalTitle">${item.name}</h3><p class="modal-subtitle">${item.subtitle}</p></div><ul class="detail-list">${item.features.map(feature => `<li>✓ ${feature}</li>`).join('')}</ul><a class="modal-cta" href="#contact">Discuss this with us ↗</a>`;
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
    $('.modal-close', modal)?.focus();
  };

  const banner = $('.hero-image') || $('.hero-visual');
  if (banner && !$('.banner-detail-trigger', banner)) {
    banner.classList.add('banner-clickable');
    const button = document.createElement('button');
    button.className = 'banner-detail-trigger';
    button.type = 'button';
    button.innerHTML = '<span>✦</span> Banner details';
    button.addEventListener('click', event => { event.stopPropagation(); open('banner'); });
    banner.addEventListener('click', () => open('banner'));
    banner.append(button);
  }
  $$('[data-plan]').forEach(card => card.addEventListener('click', event => {
    if (!event.target.closest('button') || event.target.closest('[data-plan]')) open(card.dataset.plan);
  }));
  $('.modal-close', modal)?.addEventListener('click', close);
  $('[data-close="true"]', modal)?.addEventListener('click', close);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });

  const reveal = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
    reveal.forEach(item => observer.observe(item));
  } else reveal.forEach(item => item.classList.add('visible'));
})();
