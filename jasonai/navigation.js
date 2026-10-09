(() => {
  'use strict';
  const header = document.querySelector('.unified-product-header');
  const toggle = header?.querySelector('.menu-toggle');
  const menu = header?.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  const mobile = matchMedia('(max-width:780px)');
  const links = [...menu.querySelectorAll('a[href]')];

  function setOpen(open, restoreFocus = false) {
    const wasOpen = menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('product-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? 'Close ×' : 'Menu +';
    if (open) requestAnimationFrame(() => links[0]?.focus());
    else if (restoreFocus && wasOpen) toggle.focus();
  }

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open'), true));
  menu.addEventListener('click', event => {
    if (event.target.closest('a[href]')) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (!menu.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false, true);
    } else if (event.key === 'Tab') {
      const first = toggle, last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  mobile.addEventListener('change', () => setOpen(false));
  const route = location.pathname.replace(/\/$/, '') || '/';
  header.querySelectorAll('a[href]').forEach(link => {
    if (link.getAttribute('href').replace(/\/$/, '') === route) link.setAttribute('aria-current', 'page');
  });
  setOpen(false);
})();
