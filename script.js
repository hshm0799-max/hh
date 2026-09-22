const yearValue = document.getElementById('yearValue');
if (yearValue) yearValue.textContent = new Date().getFullYear();

const contactSection = document.getElementById('contact');
if (contactSection && !document.getElementById('hosting')) {
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

if (contactSection && !document.getElementById('premium-lucknow')) {
  const premiumLucknow = document.createElement('section');
  premiumLucknow.className = 'section premium-lucknow page-section';
  premiumLucknow.id = 'premium-lucknow';
  premiumLucknow.innerHTML = `
    <div class="container">
      <div class="section-heading">
        <span class="eyebrow">10 / Premium Lucknow</span>
        <h2>Premium web and app solutions for Lucknow businesses.</h2>
        <p>Business websites, app design, API development, Google map visibility, local SEO and fast support for brands in Lucknow, Ranchi and beyond.</p>
      </div>
      <div class="premium-lucknow-grid">
        <div class="premium-lucknow-card highlight-card">
          <span>Website</span>
          <h3>Premium Business Website</h3>
          <p>Lead-focused design, modern UI, SEO-ready pages and conversion-first layouts for service businesses.</p>
        </div>
        <div class="premium-lucknow-card">
          <span>App</span>
          <h3>Mobile App Development</h3>
          <p>Smart, user-friendly mobile app experiences built for growth and daily operations.</p>
        </div>
        <div class="premium-lucknow-card">
          <span>API</span>
          <h3>Custom API Development</h3>
          <p>Integrations, automation and backend systems that connect platforms smoothly and securely.</p>
        </div>
        <div class="premium-lucknow-card">
          <span>SEO</span>
          <h3>Local Rankings</h3>
          <p>Optimized website structure, map presence and local keyword strategy for Lucknow + Ranchi visibility.</p>
        </div>
      </div>
    </div>`;
  contactSection.parentNode.insertBefore(premiumLucknow, contactSection);
}

const floatingActions = document.createElement('div');
floatingActions.className = 'floating-actions';
floatingActions.innerHTML = `
  <a class="floating-action call-action" href="tel:+917061899614" aria-label="Call HRWESITECREATERAGENCY" title="Call now">☎</a>
  <a class="floating-action whatsapp-action" href="https://wa.me/917061899614?text=Hello%20HRWESITECREATERAGENCY%2C%20I%20need%20a%20quote." target="_blank" rel="noopener" aria-label="WhatsApp HRWESITECREATERAGENCY" title="WhatsApp">◉</a>
  <a class="floating-action plan-action" href="#pricing" aria-label="View premium plans" title="View premium plans">★</a>`;
document.body.appendChild(floatingActions);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const heroArt = document.querySelector('.hero-art');
  if (heroArt) {
    window.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      heroArt.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
    }, { passive: true });
  }
}

if (!document.getElementById('site-bot')) {
  const bot = document.createElement('div');
  bot.id = 'site-bot';
  bot.className = 'site-bot';
  bot.innerHTML = `
    <button class="bot-launcher" type="button" aria-label="Open AI assistant" aria-expanded="false">✦<span>AI</span></button>
    <section class="bot-panel" aria-label="HRWESITECREATERAGENCY AI assistant" hidden>
      <div class="bot-header"><div><strong>HRW AI Assistant</strong><small>Online • Quick answers</small></div><button class="bot-close" type="button" aria-label="Close assistant">×</button></div>
      <div class="bot-messages" aria-live="polite"><div class="bot-message bot-message-assistant">Hi! I can help with services, plans, hosting or a quote. What would you like to know?</div></div>
      <div class="bot-suggestions"><button type="button">Services</button><button type="button">Plans</button><button type="button">Hosting</button></div>
      <form class="bot-form"><input aria-label="Ask the assistant" autocomplete="off" placeholder="Type your question…"><button type="submit" aria-label="Send message">➤</button></form>
    </section>`;
  document.body.appendChild(bot);

  const launcher = bot.querySelector('.bot-launcher');
  const panel = bot.querySelector('.bot-panel');
  const closeBot = bot.querySelector('.bot-close');
  const messages = bot.querySelector('.bot-messages');
  const input = bot.querySelector('input');
  const toggleBot = (open) => {
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  };

  launcher.addEventListener('click', () => toggleBot(panel.hidden));
  closeBot.addEventListener('click', () => toggleBot(false));

  const answer = (question) => {
    const text = question.toLowerCase();
    if (text.includes('plan') || text.includes('price') || text.includes('cost')) return 'Website plans start at ₹10,000. Premium infrastructure can include hosting, domain, SSL, DNS, 120 GB storage and 24/7 support. Visit the Plans section for details.';
    if (text.includes('hosting') || text.includes('ssl') || text.includes('domain') || text.includes('dns')) return 'Our premium infrastructure support covers hosting, custom domain, SSL certificate, DNS setup, 120 GB storage and 24/7 customer service.';
    if (text.includes('app') || text.includes('api') || text.includes('website') || text.includes('service')) return 'We build business websites, web apps, mobile apps, REST APIs, e-commerce experiences, SEO systems and provide ongoing support.';
    if (text.includes('lucknow') || text.includes('ranchi')) return 'We provide premium website and app solutions for Lucknow, Ranchi, Jharkhand and Ratu Road businesses with local SEO and map visibility.';
    if (text.includes('contact') || text.includes('quote') || text.includes('whatsapp')) return 'For a quote, WhatsApp +91 70618 99614 or email hshm0799@gmail.com. You can also use the contact form.';
    return 'I can answer questions about services, plans, hosting, location and quotes. Try asking: “What is the premium plan?”';
  };

  const addMessage = (text, kind) => {
    const message = document.createElement('div');
    message.className = `bot-message bot-message-${kind}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  };

  const sendQuestion = (question) => {
    const clean = question.trim();
    if (!clean) return;
    addMessage(clean, 'user');
    input.value = '';
    window.setTimeout(() => addMessage(answer(clean), 'assistant'), 260);
  };

  bot.querySelector('.bot-form').addEventListener('submit', (event) => {
    event.preventDefault();
    sendQuestion(input.value);
  });

  bot.querySelectorAll('.bot-suggestions button').forEach((button) => {
    button.addEventListener('click', () => sendQuestion(button.textContent));
  });
}

window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) target.setAttribute('tabindex', '-1');
  }
});
