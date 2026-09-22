const yearValue = document.getElementById('yearValue');
if (yearValue) yearValue.textContent = new Date().getFullYear();

/* Premium cinematic space + 3D Earth backdrop */
const cinematicStyle = document.createElement('style');
cinematicStyle.textContent = `
  body{background:#030712!important;color:#f4f7ff!important;overflow-x:hidden}
  body:before{content:"";position:fixed;inset:0;z-index:-5;pointer-events:none;background:radial-gradient(circle at 50% 45%,rgba(31,104,218,.24),transparent 18%),radial-gradient(circle at 20% 20%,rgba(119,67,255,.2),transparent 22%),radial-gradient(circle at 85% 75%,rgba(0,209,255,.13),transparent 24%),linear-gradient(135deg,#020617,#071329 52%,#02040c)}
  .cinematic-space{position:fixed;inset:0;z-index:-4;pointer-events:none;overflow:hidden;background-image:radial-gradient(2px 2px at 8% 18%,#fff,transparent),radial-gradient(1px 1px at 22% 74%,#fff,transparent),radial-gradient(2px 2px at 47% 12%,#b9d9ff,transparent),radial-gradient(1px 1px at 72% 34%,#fff,transparent),radial-gradient(2px 2px at 91% 16%,#b9d9ff,transparent),radial-gradient(1px 1px at 64% 84%,#fff,transparent),radial-gradient(2px 2px at 37% 92%,#fff,transparent),radial-gradient(1px 1px at 12% 56%,#b9d9ff,transparent);animation:starDrift 18s linear infinite;opacity:.85}
  .cinematic-space:after{content:"";position:absolute;width:55vw;height:55vw;left:22%;top:18%;border-radius:50%;background:conic-gradient(from 30deg,transparent,#254bd844,transparent 30%,#d946ef22,transparent 60%,#22d3ee33,transparent);filter:blur(28px);animation:nebulaSpin 30s linear infinite}
  .earth-globe{position:fixed;z-index:-3;left:50%;top:52%;width:min(42vw,560px);aspect-ratio:1;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;background:url("https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=90") center/cover;box-shadow:inset -48px -20px 80px #000c,inset 20px 8px 45px #53b7ff44,0 0 35px #1685ff66,0 0 120px #1d4ed833;filter:saturate(1.18) contrast(1.08);animation:earthFloat 14s ease-in-out infinite,earthSpin 38s linear infinite;background-position:0 50%}
  .earth-globe:before{content:"";position:absolute;inset:-7%;border-radius:50%;border:1px solid #73caff44;box-shadow:0 0 30px #48aaff33;transform:rotateX(68deg);animation:ringSpin 10s linear infinite}
  .earth-globe:after{content:"";position:absolute;inset:-20%;border-radius:50%;background:radial-gradient(circle,#38bdf811 0 45%,transparent 67%);filter:blur(12px)}
  .site-header,.section,.ticker,.site-footer{position:relative;background:rgba(3,9,22,.72)!important;color:#f4f7ff!important;border-color:#ffffff1c!important}.site-header{backdrop-filter:blur(18px)}
  .section-heading>p:last-child,.hero-text,.split-heading>p,.process-step p,.video-copy>p:not(.eyebrow),.map-copy>p:not(.eyebrow){color:#b9c6dc!important}.service-card{background:#0b1425cc!important;border-color:#ffffff20!important;color:#f4f7ff}.service-card p{color:#afbdd2}.work-section,.services-section,.process-section,.map-section{background:transparent!important}.map-section{background:#07152acc!important}.contact-section{background:linear-gradient(135deg,#d94f5f,#7136b8)!important}
  .hero-image:before{background:#40d9ff!important}.btn-primary,.btn-dark{background:linear-gradient(135deg,#16c5ff,#7255ff)!important;color:white!important;box-shadow:0 12px 35px #257bff55}.brand-mark,.featured-service{background:linear-gradient(135deg,#c5ff63,#48e3ff)!important}
  .broadcast-bar{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:10px 20px;background:#020817e8;border-bottom:1px solid #315db855;color:#91b9ff;font:600 .78rem/1.4 monospace;letter-spacing:.04em}.broadcast-bar strong{color:#ff7180}.broadcast-contact{display:flex;gap:18px;color:#a6b0c3}.broadcast-contact a{color:#43e6b0}.agency-signature{display:inline-flex;align-items:center;gap:9px;margin:0 0 20px;padding:9px 14px;border:1px solid #6b58ff88;border-radius:999px;background:linear-gradient(100deg,#192f66cc,#421f72cc);color:#e6e9ff;font:700 .72rem/1.2 monospace;letter-spacing:.08em;text-transform:uppercase}.agency-signature span{color:#8beaff}.ai-search-note{margin-top:18px!important;color:#8294b3!important;font-size:.82rem!important}.hero-content h1,.section-heading h2,.cta-box h2{color:#f5f7ff;text-shadow:0 0 30px #4a83ff25}
  @keyframes starDrift{to{transform:translate3d(-18px,12px,0) scale(1.08)}}@keyframes nebulaSpin{to{transform:rotate(360deg)}}@keyframes earthFloat{0%,100%{margin-top:0}50%{margin-top:-18px}}@keyframes earthSpin{from{background-position:0 50%}to{background-position:220% 50%}}@keyframes ringSpin{to{transform:rotateX(68deg) rotateZ(360deg)}}
  @media(max-width:700px){.earth-globe{width:78vw;top:47%;opacity:.22}.cinematic-space:after{width:100vw;height:100vw;left:0;top:25%}.broadcast-bar{align-items:flex-start;flex-direction:column;padding:10px 14px}.broadcast-contact{gap:10px;flex-wrap:wrap}}
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

/* Add the live agency broadcast treatment shown in the supplied reference image. */
const header = document.querySelector('.site-header');
if (header && !document.querySelector('.broadcast-bar')) {
  const broadcast = document.createElement('div');
  broadcast.className = 'broadcast-bar';
  broadcast.innerHTML = '<span>◉ <strong>LIVE</strong> &nbsp; India-focused web, app & API studio // Ranchi HQ</span><span class="broadcast-contact"><a href="tel:+917061899614">☎ +91 7061899614</a><a href="https://wa.me/917061899614" target="_blank" rel="noopener">◌ Chat Support Live</a></span>';
  header.prepend(broadcast);
}
const heroContent = document.querySelector('.hero-content');
if (heroContent && !heroContent.querySelector('.agency-signature')) {
  const signature = document.createElement('div');
  signature.className = 'agency-signature';
  signature.innerHTML = '<span>✦</span> Premium 3D digital engineering studio';
  heroContent.prepend(signature);
  const note = document.createElement('p');
  note.className = 'ai-search-note';
  note.textContent = 'Websites • mobile apps • APIs • e-commerce • portfolio experiences';
  const heroText = heroContent.querySelector('.hero-text');
  if (heroText) heroText.insertAdjacentElement('afterend', note);
}

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  items.forEach(item => observer.observe(item));
} else items.forEach(item => item.classList.add('visible'));

document.querySelectorAll('a[href^="tel:"]').forEach(link => link.addEventListener('click', () => link.blur()));
