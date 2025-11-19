// script.js - interações e animações So Creamy
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  // Toggle do menu lateral
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Fechar sidebar ao clicar fora (mobile)
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth < 980) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Animação suave ao rolar (revelar elementos)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .hero, .about, .grid-section').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 600ms cubic-bezier(.2,.9,.2,1)';
    observer.observe(el);
  });

  // Scroll suave para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Ajuste do tamanho da logo na Splash Screen
  const splashLogo = document.querySelector('.splash-logo');
  if (splashLogo) {
    splashLogo.style.width = '80px'; // largura da logo
    splashLogo.style.height = 'auto'; // mantém proporção
    splashLogo.style.marginBottom = '1rem';
  }
});

// Splash Screen desaparece após 2 segundos
window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) splash.style.display = "none";
  }, 2000); // 2 segundos
});
