// Header border on scroll, lazy autoplay videos, image lightbox, scroll reveal.
(() => {
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Videos: load when near the viewport, play while visible.
  const videos = document.querySelectorAll('video[data-src]');
  const vio = new IntersectionObserver(entries => {
    for (const e of entries) {
      const v = e.target;
      if (e.isIntersecting) {
        if (!v.src) { v.src = v.dataset.src; v.load(); }
        if (reduce) v.controls = true; else v.play().catch(() => { v.controls = true; });
      } else if (v.src) {
        v.pause();
      }
    }
  }, { rootMargin: '200px 0px' });
  videos.forEach(v => vio.observe(v));

  // Lightbox for case-study images.
  const imgs = document.querySelectorAll('img.zoomable');
  if (imgs.length) {
    const dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.setAttribute('aria-label', 'Image viewer');
    dlg.innerHTML = '<img alt=""><button type="button" aria-label="Close">×</button>';
    document.body.append(dlg);
    const big = dlg.querySelector('img');
    dlg.addEventListener('click', () => dlg.close());
    imgs.forEach(img => {
      img.tabIndex = 0;
      const open = () => { big.src = img.currentSrc || img.src; big.alt = img.alt; dlg.showModal(); };
      img.addEventListener('click', open);
      img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  }

  // Gentle reveal for blocks below the fold.
  if (!reduce && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.work-card, .arch-card, .cs-section .row, .cs-next');
    const rio = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => {
      if (t.getBoundingClientRect().top > window.innerHeight) { t.classList.add('reveal'); rio.observe(t); }
    });
  }
})();
