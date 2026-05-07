document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60 });

  // ── Navbar scroll shadow
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 20
        ? '0 6px 24px hsla(25,20%,12%,0.18)'
        : '0 4px 16px hsla(25,20%,12%,0.10)';
    });
  }

  // ── Background Slideshow + Kilimanjaro Snow
  (function () {
    const slides = document.querySelectorAll('.slideshow-hero .slide');
    const dots   = document.querySelectorAll('.slide-dot');
    if (!slides.length) return;

    let current  = 0;
    let timer    = null;
    let snowRaf  = null;

    // ── Snow: canvas-based realistic falling snowflakes
    const canvas = document.getElementById('snowCanvas');

    function initSnow() {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width  = canvas.offsetWidth  || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;

      // High-altitude snow: sparse, small, slow
      const flakes = Array.from({ length: 70 }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        r:       Math.random() * 1.8 + 0.3,
        speed:   Math.random() * 0.6 + 0.2,
        drift:   (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.5 + 0.12,
        wobble:  Math.random() * Math.PI * 2,
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
          if (f.x > canvas.width  + 8) f.x = -8;
          if (f.x < -8)                f.x = canvas.width + 8;
        });
        snowRaf = requestAnimationFrame(tick);
      }
      tick();
    }

    function stopSnow() {
      if (snowRaf) { cancelAnimationFrame(snowRaf); snowRaf = null; }
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    // ── Transition to slide n
    function goTo(n) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = ((n % slides.length) + slides.length) % slides.length;

      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');

      // Snow only on Kilimanjaro slide (index 0)
      if (current === 0) {
        initSnow();
      } else {
        stopSnow();
      }

      clearTimeout(timer);
      // Kilimanjaro lingers longer — let the mountain breathe
      const delay = current === 0 ? 7500 : 5800;
      timer = setTimeout(() => goTo(current + 1), delay);
    }

    // Dot click
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });

    // Keyboard: left/right arrows
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft')  goTo(current - 1);
    });

    // Boot
    initSnow();
    timer = setTimeout(() => goTo(1), 7500);

    // Resize: recalibrate canvas
    window.addEventListener('resize', () => {
      if (canvas) {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    });
  })();
});
