const yearValue = document.getElementById('yearValue');
if (yearValue) yearValue.textContent = new Date().getFullYear();

const bot = document.getElementById('site-bot');
if (bot) {
  const launcher = bot.querySelector('.bot-launcher');
  const panel = bot.querySelector('.bot-panel');
  const closeButton = bot.querySelector('.bot-close');
  const messages = bot.querySelector('.bot-messages');
  const input = bot.querySelector('input');
  const form = bot.querySelector('.bot-form');
  const suggestions = bot.querySelectorAll('.bot-suggestions button');

  const toggleBot = (open) => {
    if (!panel || !launcher) return;
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    if (open && input) input.focus();
  };

  if (launcher && panel) launcher.addEventListener('click', () => toggleBot(panel.hidden));
  if (closeButton) closeButton.addEventListener('click', () => toggleBot(false));

  const answerQuestion = (question) => {
    const text = question.toLowerCase();
    if (text.includes('plan') || text.includes('price') || text.includes('cost')) return 'Website plans start at ₹10,000. Premium infrastructure can include hosting, domain, SSL, DNS, 120 GB storage and 24/7 support.';
    if (text.includes('hosting') || text.includes('ssl') || text.includes('domain') || text.includes('dns')) return 'Our premium infrastructure support covers hosting, custom domain, SSL certificate, DNS setup, 120 GB storage and 24/7 customer service.';
    if (text.includes('app') || text.includes('api') || text.includes('website') || text.includes('service')) return 'We build business websites, web apps, mobile apps, REST APIs, e-commerce experiences, SEO systems and provide ongoing support.';
    if (text.includes('lucknow') || text.includes('ranchi') || text.includes('jharkhand')) return 'We provide premium website and app solutions for Lucknow, Ranchi, Jharkhand and Ratu Road businesses with local SEO and map visibility.';
    if (text.includes('contact') || text.includes('quote') || text.includes('whatsapp')) return 'For a quote, WhatsApp +91 70618 99614 or email hshm0799@gmail.com. You can also use the contact section.';
    return 'I can answer questions about services, plans, hosting, local work and quotes. Try asking: “What is the premium plan?”';
  };

  const addMessage = (text, type) => {
    if (!messages) return;
    const message = document.createElement('div');
    message.className = `bot-message bot-message-${type}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  };

  const sendQuestion = (question) => {
    const clean = String(question || '').trim();
    if (!clean) return;
    addMessage(clean, 'user');
    if (input) input.value = '';
    window.setTimeout(() => addMessage(answerQuestion(clean), 'assistant'), 250);
  };

  if (form && input) form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendQuestion(input.value);
  });

  suggestions.forEach((button) => button.addEventListener('click', () => sendQuestion(button.textContent)));
}

const heroArt = document.querySelector('.hero-art');
if (heroArt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    heroArt.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`;
  }, { passive: true });
}

window.addEventListener('load', () => {
  const hashTarget = window.location.hash;
  if (!hashTarget) return;
  const target = document.querySelector(hashTarget);
  if (target) target.setAttribute('tabindex', '-1');
});
