document.addEventListener('DOMContentLoaded', () => {
  // ── Lucide icons
  if (window.lucide) lucide.createIcons();

  // ── AOS
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60 });

  // ── Navbar scroll opacity
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 20
        ? '0 6px 24px hsla(25,20%,12%,0.14)'
        : '0 4px 16px hsla(25,20%,12%,0.10)';
    });
  }
});
