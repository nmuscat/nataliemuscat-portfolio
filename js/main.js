/* ============================================================
   NATALIE MUSCAT — main.js
   ============================================================ */

/* ── REVEAL ON SCROLL ────────────────────────────────────── */

(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => observer.observe(el));
})();


/* ── MOBILE NAV BURGER ───────────────────────────────────── */

(function () {
  const burger = document.querySelector('.nav-burger');
  const links  = document.querySelector('.nav-links');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('is-open', !open);
  });

  /* Close drawer when a link is tapped */
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
    });
  });
})();
