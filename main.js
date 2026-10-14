const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll('.section-heading, .timeline article, .compare-card, .flavor-grid article, .debate-grid article, .fact-card, .news-card, .brand-grid a');
if ('IntersectionObserver' in window) {
  revealItems.forEach((item) => item.classList.add('reveal'));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}
