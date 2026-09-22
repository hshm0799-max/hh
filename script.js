const yearValue = document.getElementById('yearValue');
if (yearValue) yearValue.textContent = new Date().getFullYear();

// Add a gentle live-style counter animation without external dependencies.
document.querySelectorAll('.stats strong').forEach((metric) => {
  metric.classList.add('metric-ready');
});

// Keep anchor navigation accessible when the browser restores a hash.
window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) target.setAttribute('tabindex', '-1');
  }
});
