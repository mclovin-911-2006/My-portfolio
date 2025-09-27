document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('myNavMenu');
  const header = document.getElementById('header');

  // Menu toggle (exposes window.myMenuFunction so your inline onclick still works)
  window.myMenuFunction = function() {
    if (!menuBtn) return;
    menuBtn.classList.toggle('responsive');
  };

  // Header shadow + resize on scroll
  function headerShadow() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 1px 6px rgba(0,0,0,0.1)';
      header.style.height = '70px';
      header.style.lineHeight = '70px';
    } else {
      header.style.boxShadow = 'none';
      header.style.height = '90px';
      header.style.lineHeight = '90px';
    }
  }
  window.addEventListener('scroll', headerShadow);
  headerShadow(); // run once on load

  // Typed.js (only if loaded)


  // ScrollReveal (only if loaded)
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.ofppt-box', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });
    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.top-header', {});

    const srLeft = ScrollReveal({ origin: 'left', distance: '80px', duration: 2000, reset: true });
    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    const srRight = ScrollReveal({ origin: 'right', distance: '80px', duration: 2000, reset: true });
    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });
  } else {
    console.warn('ScrollReveal not found — skipping reveal effects.');
  }

  // Active nav link on scroll (robust guards)
  const sections = document.querySelectorAll('section[id]');
  function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 80; // adjust for nav height
      const sectionId = section.getAttribute('id');

      // look for the exact href="#sectionId" anchor in nav
      const link = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');
      if (!link) return;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  scrollActive(); // run on load
});
