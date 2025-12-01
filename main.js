// Mobile navigation toggle (hamburger)
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelectorAll('.nav-links a');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function (e) {
    const isOpen = nav.classList.toggle('open');
    // update accessible attribute
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('bx-menu');
      icon.classList.toggle('bx-x');
    }
  });

  // close menu when a nav link is clicked
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        const icon = toggle.querySelector('i');
        if (icon) { icon.classList.remove('bx-x'); icon.classList.add('bx-menu'); }
      }
    });
  });

  // close the menu if clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    if (!nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      const icon = toggle.querySelector('i');
      if (icon) { icon.classList.remove('bx-x'); icon.classList.add('bx-menu'); }
    }
  });

  // ensure menu closes on resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 480 && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      const icon = toggle.querySelector('i');
      if (icon) { icon.classList.remove('bx-x'); icon.classList.add('bx-menu'); }
    }
  });
});