(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const year = $('#yearValue');
  if (year) year.textContent = new Date().getFullYear();

  const style = document.createElement('style');
  style.textContent = `
    .hero-image.banner-clickable{cursor:pointer}
    .hero-image.banner-clickable:after{content:'';position:absolute;inset:0;border:1px solid transparent;border-radius:inherit;transition:.25s;pointer-events:none}
    .hero-image.banner-clickable:hover:after{border-color:#6bdcffaa;box-shadow:0 0 35px #169dff33}
    .banner-detail-trigger{position:absolute;right:18px;bottom:18px;z-index:4;display:flex;align-items:center;gap:8px;border:1px solid rgba(139,220,255,.7);border-radius:999px;padding:11px 16px;background:rgba(7,27,56,.9);color:#fff;cursor:pointer;font-weight:800;box-shadow:0 12px 30px rgba(0,0,0,.35)}
    .banner-detail-trigger:hover{transform:translateY(-3px);background:#123568}
    .feature-box .feature-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:14px;background:linear-gradient(135deg,rgba(22,196,255,.18),rgba(137,90,255,.18));margin-bottom:14px}
    .feature-box h3{font-size:1.15rem;margin:0 0 8px}
    .feature-box p{color:#8494ab;line-height:1.6;margin:0}
    .detail-list li{font-size:.98rem}
    @media(max-width:680px){.banner-detail-trigger{right:10px;bottom:10px}.banner-detail-trigger span{display:none}}
  `;
  document.head.appendChild(style);

  const heroImage = $('.hero-image');
  if (heroImage && !$('.banner-detail-trigger', heroImage)) {
    heroImage.classList.add('banner-clickable');
    const button = document.createElement('button');
    button.className = 'banner-detail-trigger';
    button.type = 'button';
    button.innerHTML = '<span>✦</span> Banner details';
    button.addEventListener('click', e => { e.stopPropagation(); openDetails('banner'); });
    heroImage.addEventListener('click', () => openDetails('banner'));
    heroImage.appendChild(button);
  }

  const layers = [
    ['01','Discovery','Goals, audience, competitors and success metrics aligned before production.'],
    ['02','Brand Strategy','A clear visual direction, voice and memorable positioning for your market.'],
    ['03','UX Architecture','User journeys, sitemap and information architecture that remove friction.'],
    ['04','Interface Design','Responsive, accessible screens with a premium visual system.'],
    ['05','Frontend Engineering','Fast, polished and maintainable web experiences built for every device.'],
    ['06','Backend Systems','Secure APIs, databases and business logic that scale with demand.'],
    ['07','Mobile Experiences','Cross-platform app foundations for iOS and Android products.'],
    ['08','Commerce','Conversion-focused stores, catalogues, payments and order workflows.'],
    ['09','Integrations','CRMs, analytics, payments, maps and third-party services connected cleanly.'],
    ['10','Performance','SEO, Core Web Vitals, caching and image optimization for speed.'],
    ['11','Quality & Security','Testing, backups, monitoring and release checks before launch.'],
    ['12','Growth Partnership','Analytics, experiments, maintenance and support after go-live.']
  ];

  const features = [
    ['🌐','Websites','Premium websites designed for conversion, clarity and brand trust.'],
    ['📱','Apps','Modern mobile-first products that feel smooth and user-friendly.'],
    ['⚙️','APIs','Secure, fast and scalable APIs that support every business workflow.'],
    ['🛒','E-commerce','Online stores engineered to increase sales and simplify operations.']
  ];

  const services = $('#services');
  if (services && !$('#layers')) {
    const layersSection = document.createElement('section');
    layersSection.id = 'layers';
    layersSection.className = 'section layer-section';
    layersSection.innerHTML = `<div class="container"><div class="section-heading reveal"><p class="eyebrow">The 12-layer system</p><h2>More than a website.<br><em>A complete digital engine.</em></h2><p>Every project is strengthened across twelve connected layers so the experience looks great, works reliably and keeps growing.</p></div><div class="layer-grid">${layers.map(([n,title,text]) => `<article class="layer-card reveal"><span class="layer-number">LAYER ${n}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div>`;
    services.after(layersSection);
  }

  if (!$('#feature-section')) {
    const featureSection = document.createElement('section');
    featureSection.id = 'feature-section';
    featureSection.className = 'section feature-section';
    featureSection.innerHTML = `<div class="container"><div class="section-heading reveal"><p class="eyebrow">Core capabilities</p><h2>Every layer is built to produce <em>real business growth.</em></h2></div><div class="feature-grid">${features.map(([icon,title,text]) => `<article class="feature-box reveal"><div class="feature-icon">${icon}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div>`;
    const plans = $('#plans');
    (plans || services).after(featureSection);
  }

  if (!$('#future')) {
    const roadmap = document.createElement('section');
    roadmap.id = 'future';
    roadmap.className = 'section roadmap-section';
    roadmap.innerHTML = `<div class="container"><div class="section-heading reveal"><p class="eyebrow">Future roadmap</p><h2>Built for today.<br><em>Ready for what comes next.</em></h2><p>Our future-ready plan keeps your digital product improving after launch.</p></div><div class="roadmap-grid"><article class="roadmap-card reveal"><span>PHASE 01 • NOW</span><h3>Launch foundation</h3><p>Fast, accessible, secure website with analytics and conversion tracking.</p></article><article class="roadmap-card reveal"><span>PHASE 02 • NEXT</span><h3>Automation layer</h3><p>CRM, notifications, smart workflows and dashboards that reduce manual work.</p></article><article class="roadmap-card reveal"><span>PHASE 03 • SCALE</span><h3>Growth intelligence</h3><p>Better experiments, retention strategy and more personalized product experiences.</p></article><article class="roadmap-card reveal"><span>PHASE 04 • FUTURE</span><h3>Digital leadership</h3><p>Expansion into apps, AI systems and global market-ready product infrastructure.</p></article></div></div>`;
    const contact = $('#contact');
    (contact || document.querySelector('main')).before(roadmap);
  }

  const details = {
    banner:{name:'Banner details',subtitle:'Click the banner icon to explore the complete digital experience.',features:['Interactive banner controls with keyboard support','Full service and feature details in a focused modal','Direct CTA to start the selected project','Responsive experience on mobile, tablet and desktop']},
    mega:{name:'Mega Scale · ₹80,000',subtitle:'High-performance platform for ambitious teams.',features:['Grade architecture','120GB high-speed storage','Advanced DNS + SSL','24/7 technical squad support','Performance and security optimization']},
    custom:{name:'Custom App Ecosystem · ₹100,000',subtitle:'A bespoke application foundation with every critical service connected.',features:['Custom app ecosystem','Full block architecture','Global service integrations','Product design and strategy','Launch roadmap and analytics']},
    ultimate:{name:'Ultimate Command · ₹150,000',subtitle:'Complete ownership of a full-scale web and app infrastructure.',features:['Custom web and app infrastructure','Complete ownership and governance','Lifetime support','Priority launch and optimization','Growth and maintenance partnership']}
  };

  const modal = $('#planModal');
  const modalContent = $('#modalContent');
  const closeModal = () => { if (!modal) return; modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
  const openDetails = key => {
    const item = details[key] || details.banner;
    if (!modal || !modalContent) return;
    modalContent.innerHTML = `<div class="modal-header"><p class="eyebrow">Full details</p><h3 id="modalTitle">${item.name}</h3><p class="modal-subtitle">${item.subtitle}</p></div><ul class="detail-list">${item.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul><a class="modal-cta" href="#contact">Discuss this with us ↗</a>`;
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
    $('.modal-close', modal)?.focus();
  };

  $$('[data-plan]').forEach(card => card.addEventListener('click', event => {
    const target = event.target.closest('[data-plan]');
    if (target) openDetails(target.dataset.plan);
  }));
  $('.modal-close', modal)?.addEventListener('click', closeModal);
  $('[data-close="true"]', modal)?.addEventListener('click', closeModal);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    reveals.forEach(item => observer.observe(item));
  } else {
    reveals.forEach(item => item.classList.add('visible'));
  }
})();
