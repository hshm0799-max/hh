const yearValue = document.getElementById('yearValue');
if (yearValue) yearValue.textContent = new Date().getFullYear();

document.querySelectorAll('.stats strong').forEach((metric) => metric.classList.add('metric-ready'));

// Add the premium hosting and infrastructure section without changing the existing page structure.
const contactSection = document.getElementById('contact');
if (contactSection) {
  const premiumSection = document.createElement('section');
  premiumSection.className = 'section premium-services page-section';
  premiumSection.id = 'hosting';
  premiumSection.innerHTML = `
    <div class="container">
      <div class="section-heading"><span class="eyebrow">09 / Premium infrastructure</span><h2>Everything your business needs to stay online.</h2><p>Secure, reliable hosting and human support included for a smooth digital experience.</p></div>
      <div class="hosting-grid">
        <article class="hosting-card"><span class="hosting-icon">☁️</span><h3>Hosting</h3><p>Fast, reliable hosting tuned for your website and app.</p></article>
        <article class="hosting-card"><span class="hosting-icon">🌐</span><h3>Custom Domain</h3><p>Professional domain setup and DNS configuration support.</p></article>
        <article class="hosting-card"><span class="hosting-icon">🔒</span><h3>SSL Certificate</h3><p>HTTPS security for safer browsing and customer trust.</p></article>
        <article class="hosting-card"><span class="hosting-icon">💾</span><h3>120 GB Data</h3><p>Generous storage for media, files and business growth.</p></article>
        <article class="hosting-card"><span class="hosting-icon">🛟</span><h3>24/7 Support</h3><p>Customer service support when your business needs it.</p></article>
      </div>
      <p class="service-note"><strong>Infrastructure support included:</strong> hosting • domain • SSL • DNS server setup • 120 GB data • 24/7 customer service</p>
    </div>`;
  contactSection.parentNode.insertBefore(premiumSection, contactSection);
}

// Persistent call and WhatsApp shortcuts for faster quote requests.
const floatingActions = document.createElement('div');
floatingActions.className = 'floating-actions';
floatingActions.innerHTML = `
  <a class="floating-action call-action" href="tel:+917061899614" aria-label="Call HRWESITECREATERAGENCY" title="Call now">☎</a>
  <a class="floating-action whatsapp-action" href="https://wa.me/917061899614?text=Hello%20HRWESITECREATERAGENCY%2C%20I%20need%20a%20quote." target="_blank" rel="noopener" aria-label="WhatsApp HRWESITECREATERAGENCY" title="WhatsApp">◉</a>`;
document.body.appendChild(floatingActions);

// Subtle pointer motion gives the hero a premium 3D feel while respecting reduced motion.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const heroArt = document.querySelector('.hero-art');
  window.addEventListener('pointermove', (event) => {
    if (!heroArt) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    heroArt.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
  }, { passive: true });
}

window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) target.setAttribute('tabindex', '-1');
  }
});
