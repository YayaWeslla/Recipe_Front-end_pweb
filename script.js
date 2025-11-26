document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const body = document.body; 

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      body.classList.toggle('sidebar-closed');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth < 980) {
        sidebar.classList.add('closed'); 
        body.classList.add('sidebar-closed'); 
      }
    });
  }
  
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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const splashLogo = document.querySelector('.splash-logo');
  if (splashLogo) {
    splashLogo.style.width = '80px';
    splashLogo.style.height = 'auto';
    splashLogo.style.marginBottom = '1rem';
  }

  const botoes = document.querySelectorAll(".btn-ler-mais");

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card-info");
      const textoCurto = card.querySelector(".texto-curto");
      const textoCompleto = card.querySelector(".texto-completo");

      const aberto = textoCompleto.style.display === "block";

      if (aberto) {
        textoCompleto.style.display = "none";
        textoCurto.style.display = "block";
        btn.textContent = "Ler mais";
      } else {
        textoCompleto.style.display = "block";
        textoCurto.style.display = "none";
        btn.textContent = "Ler menos";
      }
    });
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) splash.style.display = "none";
  }, 2000);
});