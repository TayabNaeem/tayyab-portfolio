// ============================================
//  Tayyab Naeem — Portfolio interactions
// ============================================

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const closeMenu = () => { links.classList.remove('open'); toggle.classList.remove('open'); };
toggle.addEventListener('click', () => { links.classList.toggle('open'); toggle.classList.toggle('open'); });
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

// Reveal-on-scroll
document.querySelectorAll(
  '.section__head, .about-card, .svc, .work-card, .testi, .cta-band__inner, .contact__card'
).forEach((el, i) => {
  el.setAttribute('data-reveal', '');
  el.style.transitionDelay = `${(i % 4) * 90}ms`;
});
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// Animated counters
const animateCount = (el) => {
  const target = +el.dataset.count, duration = 1500, start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { animateCount(entry.target); countObserver.unobserve(entry.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.astat__num').forEach((el) => countObserver.observe(el));

// Active nav link based on section in view
const sections = document.querySelectorAll('main section[id]');
const navMap = {};
document.querySelectorAll('.nav__links a').forEach((a) => { navMap[a.getAttribute('href').slice(1)] = a; });
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && navMap[entry.target.id]) {
      document.querySelectorAll('.nav__links a').forEach((a) => a.classList.remove('active'));
      navMap[entry.target.id].classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => navObserver.observe(s));

// Contact form
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !message) {
    note.textContent = 'Please fill in all fields with a valid email.';
    note.className = 'form-note err';
    return;
  }
  const subject = encodeURIComponent(`New project inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:commerceiwp@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = 'Thanks! Opening your email app to send the message…';
  note.className = 'form-note ok';
  form.reset();
});
