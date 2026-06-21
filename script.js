// =========================================================
// PRODESK IT — Landing Page Interactions
// Vanilla JS — no dependencies
// =========================================================

(function () {
  'use strict';

  /* ---------- Theme toggle (dark / light) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const THEME_KEY = 'prodesk-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      body.classList.remove('dark-mode');
      themeToggle.setAttribute('aria-pressed', 'false');
    }
  }

  // Respect saved preference, else fall back to system preference
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  themeToggle.addEventListener('click', function () {
    const isDark = body.classList.contains('dark-mode');
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const primaryNav = document.getElementById('primaryNav');

  function closeMenu() {
    hamburger.classList.remove('is-open');
    primaryNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', function () {
    const isOpen = primaryNav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after a nav link is tapped
  primaryNav.querySelectorAll('.navbar__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Sticky navbar glass effect on scroll ---------- */
  const navbar = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 12;

  function handleScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();