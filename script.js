const yearValue = document.getElementById('yearValue');
if (yearValue) yearValue.textContent = new Date().getFullYear();

const cinematicStyle = document.createElement('style');
cinematicStyle.textContent = `
  body{background:#030712!important;color:#f4f7ff!important;overflow-x:hidden}
  body:before{content:"";position:fixed;inset:0;z-index:-5;pointer-events:none;background:radial-gradient(circle at 50% 42%,rgba(31,104,218,.24),transparent 20%),radial-gradient(circle at 18% 20%,rgba(168,85,247,.18),transparent 24%),linear-gradient(135deg,#020817,#071225 55%,#020817)}
  .cinematic-space{position:fixed;inset:0;z-index:-4;pointer-events:none;overflow:hidden;opacity:.75;background-image:radial-gradient(2px 2px at 8% 18%,#fff,transparent),radial-gradient(1px 1px at 22% 74%,#fff,transparent),radial-gradient(2px 2px at 74% 24%,#a9d8ff,transparent),radial-gradient(1px 1px at 88% 72%,#fff,transparent),radial-gradient(1px 1px at 44% 9%,#fff,transparent),radial-gradient(1px 1px at 56% 88%,#a9d8ff,transparent);animation:starDrift 18s ease-in-out infinite alternate}
  .cinematic-space:after{content:"";position:absolute;width:58vw;height:58vw;left:21%;top:14%;border-radius:50%;background:conic-gradient(from 30deg,transparent,#254bd844,transparent 30%,#d946ef22,transparent 65%);filter:blur(8px);animation:nebulaSpin 34s linear infinite}
  .earth-globe{position:fixed;z-index:-3;left:50%;top:52%;width:min(42vw,560px);aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;background:radial-gradient(circle at 34% 28%,#56c9ff 0 3%,transparent 4%),radial-gradient(circle at 38% 34%,#1565a8 0 22%,transparent 23%),radial-gradient(circle at 62% 58%,#1e4b8c 0 18%,transparent 19%),radial-gradient(circle at 42% 43%,#0a294f 0 58%,#020a19 72%);box-shadow:inset -42px -18px 65px #000b,0 0 32px #3eaaff66,0 0 130px #237dff33;animation:earthFloat 9s ease-in-out infinite}
  .earth-globe:before{content:"";position:absolute;inset:-7%;border-radius:50%;border:1px solid #73caff66;box-shadow:0 0 30px #48aaff33;transform:rotateX(68deg);animation:ringSpin 10s linear infinite}
  .earth-globe:after{content:"";position:absolute;inset:-20%;border-radius:50%;background:radial-gradient(circle,#38bdf811 0 45%,transparent 67%);filter:blur(12px)}
  .site-header,.section,.ticker,.site-footer{position:relative;background:rgba(3,9,22,.72)!important;color:#f4f7ff!important;border-color:#ffffff1c!important}.site-header{backdrop-filter:blur(18px)}
  .service-card,.pricing-card,.process-item,.work-card,.contact-box{box-shadow:0 18px 55px #0005;backdrop-filter:blur(12px)}
  .btn-primary,.btn-dark{background:linear-gradient(135deg,#16c5ff,#7255ff)!important;color:white!important;box-shadow:0 12px 35px #257bff55}
  .broadcast-bar{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:10px 20px;background:#020817e8;border-bottom:1px solid #315db855;color:#91b9ff;font:600 .78rem/1.4 'DM Sans',sans-serif;letter-spacing:.04em}.broadcast-bar a{color:#d8ecff}.broadcast-contact{display:flex;gap:14px}
  @keyframes starDrift{to{transform:translate3d(-18px,12px,0) scale(1.08)}}@keyframes nebulaSpin{to{transform:rotate(360deg)}}@keyframes ringSpin{to{transform:rotateX(68deg) rotateZ(360deg)}}@keyframes earthFloat{0%,100%{margin-top:0}50%{margin-top:-18px}}
  @media(max-width:700px){.earth-globe{width:78vw;top:47%;opacity:.22}.cinematic-space:after{width:100vw;height:100vw;left:0;top:25%}.broadcast-bar{align-items:flex-start;flex-direction:column;padding:9px 14px}.broadcast-contact{flex-wrap:wrap}}
  @media(prefers-reduced-motion:reduce){.cinematic-space,.cinematic-space:after,.earth-globe,.earth-globe:before{animation:none!important}}
`;
document.head.appendChild(cinematicStyle);

const space = document.createElement('div');
space.className = 'cinematic-space';
space.setAttribute('aria-hidden', 'true');
const earth = document.createElement('div');
earth.className = 'earth-globe';
earth.setAttribute('aria-hidden', 'true');
document.body.prepend(space, earth);

const header = document.querySelector('.site-header');
if (header && !header.querySelector('.broadcast-bar')) {
  const broadcast = document.createElement('div');
  broadcast.className = 'broadcast-bar';
  broadcast.innerHTML = '<span>◉ <strong>LIVE</strong> &nbsp; India-focused web, app & API studio // Ranchi HQ</span><span class="broadcast-contact"><a href="tel:+917061899614">☎ +91 7061899614</a><a href="#plans">View premium plans</a></span>';
  header.prepend(broadcast);
}

const planData = {
  mega: {name:'Mega Scale', price:'₹80,000', subtitle:'High-performance platform for ambitious teams.', features:['Grade architecture','120GB High-Speed Storage','Advanced DNS + SSL','24/7 Dedicated Technical Squad Support','Advanced API integrations','Custom databases']},
  custom: {name:'Custom App Ecosystem', price:'₹100,000', subtitle:'A bespoke application foundation with every critical service connected.', features:['Bespoke application development','Full block architecture','All global services integrated','Product design and strategy','Scalable data and API layer','Launch support']},
  ultimate: {name:'Ultimate Command', price:'₹150,000', subtitle:'Complete ownership of a full-scale web and app infrastructure.', features:['Full-scale custom Web + App infrastructure','Complete ownership and governance','Lifetime support','Priority launch and optimization','Security and performance planning','Dedicated technical squad']}
};
const modal = document.getElementById('planModal');
const modalContent = document.getElementById('modalContent');
const closeModal = () => { if (!modal) return; modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
const openModal = key => {
  const plan = planData[key];
  if (!modal || !modalContent || !plan) return;
  modalContent.innerHTML = `<div class="modal-header"><p class="eyebrow">Premium plan</p><h3 id="modalTitle">${plan.name} · ${plan.price}</h3><p class="modal-subtitle">${plan.subtitle}</p></div><div class="modal-grid"><div class="modal-box"><h4>Included</h4><ul>${plan.features.map(item => `<li>${item}</li>`).join('')}</ul></div><div class="modal-box"><h4>Next step</h4><p>Tell us your goal, timeline and current setup. We will shape the right implementation path for your business.</p></div></div><div class="modal-cta"><a class="btn btn-primary" href="tel:+917061899614">Discuss this plan ↗</a></div>`;
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  modal.querySelector('.modal-close')?.focus();
};
document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click', event => openModal(event.currentTarget.dataset.plan)));
modal?.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal?.querySelector('[data-close="true"]')?.addEventListener('click', closeModal);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
  items.forEach(item => observer.observe(item));
} else items.forEach(item => item.classList.add('visible'));
document.querySelectorAll('a[href^="tel:"]').forEach(link => link.addEventListener('click', () => link.blur()));
