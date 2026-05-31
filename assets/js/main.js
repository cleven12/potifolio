/* ═══════════════════════════════
   CLEVEN G · main.js
   No external dependencies needed
   (Lucide loaded via CDN)
═══════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Lucide icons ── */
  if (window.lucide) lucide.createIcons();

  /* ── Lightweight AOS-lite ── */
  (function initAOS() {
    const els = document.querySelectorAll('[data-aos]');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = parseInt(e.target.dataset.aosDelay || '0');
          setTimeout(() => e.target.classList.add('aos-animate'), delay);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => observer.observe(el));
  })();

  /* ── Navbar scroll enhancement ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 30) {
        navbar.style.background = 'rgba(8,12,20,0.92)';
        navbar.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)';
      } else {
        navbar.style.background = '';
        navbar.style.boxShadow = '';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Hero Slideshow ── */
  (function initSlideshow() {
    const slides = document.querySelectorAll('.slideshow-hero .slide');
    const dots   = document.querySelectorAll('.slide-dot');
    if (!slides.length) return;

    let current = 0, timer = null, snowRaf = null;
    const canvas = document.getElementById('snowCanvas');

    /* Snow */
    function initSnow() {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width  = canvas.offsetWidth  || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
      const flakes = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.3,
        speed: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.5 + 0.12,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.015 + 0.005,
      }));
      function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flakes.forEach(f => {
          f.wobble += f.wobbleSpeed;
          const wx = f.x + Math.sin(f.wobble) * 0.6;
          ctx.beginPath();
          ctx.arc(wx, f.y, f.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
          ctx.fill();
          f.y += f.speed;
          f.x += f.drift;
          if (f.y > canvas.height + 8) { f.y = -8; f.x = Math.random() * canvas.width; }
          if (f.x > canvas.width + 8)  f.x = -8;
          if (f.x < -8)                f.x = canvas.width + 8;
        });
        snowRaf = requestAnimationFrame(tick);
      }
      tick();
    }
    function stopSnow() {
      if (snowRaf) { cancelAnimationFrame(snowRaf); snowRaf = null; }
      if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }

    function goTo(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = ((n % slides.length) + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
      current === 0 ? initSnow() : stopSnow();
      clearTimeout(timer);
      timer = setTimeout(() => goTo(current + 1), current === 0 ? 7500 : 5800);
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft')  goTo(current - 1);
    });
    initSnow();
    timer = setTimeout(() => goTo(1), 7500);
    window.addEventListener('resize', () => {
      if (canvas) { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
    }, { passive: true });
  })();

  /* ── Active nav link highlight ── */
  (function setActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(a => {
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  })();

});