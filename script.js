const yearValue=document.getElementById('yearValue');if(yearValue)yearValue.textContent=new Date().getFullYear();
const items=document.querySelectorAll('.reveal');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});items.forEach(item=>observer.observe(item));
const phoneLinks=document.querySelectorAll('a[href^="tel:"]');phoneLinks.forEach(link=>link.addEventListener('click',()=>{link.blur()}));
