/* =====================================================================
   Atelier Masr — site behaviour
   Bundled by Astro and loaded once per page. Runs after the DOM parses.
   Handles: language toggle (+ persistence), WhatsApp prefilled messages,
   scroll-reveal, header background on scroll, mobile menu.
   ===================================================================== */

const PHONE = '201004075958';

// Prefilled WhatsApp message — Arabic on the AR site, English on the EN site.
const MSG = {
  ar: 'أهلاً أتيليه مصر، شفت شغلكم وحابب أعرف أكتر عن تصميم موقع لمشروعي.',
  en: "Hi Atelier Masr, I saw your work and I'd like to know more about a website for my project.",
};

const STORAGE_KEY = 'am-lang';

function readStored() {
  try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
}
function writeStored(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
}

// Point every WhatsApp link (class "js-wa") at a prefilled chat in the
// current language.
function setWhatsApp(lang) {
  const url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(MSG[lang] || MSG.ar);
  document.querySelectorAll('.js-wa').forEach((el) => { el.href = url; });
}

function applyLang(lang) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === 'en' ? 'ltr' : 'rtl';

  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'en' ? 'ع' : 'EN';

  writeStored(lang);
  setWhatsApp(lang);
}

// --- init language (the inline <head> script already set dir/lang) ---
applyLang(readStored() === 'en' ? 'en' : 'ar');

// --- language toggle button ---
const langBtn = document.getElementById('langBtn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    applyLang(document.documentElement.lang === 'en' ? 'ar' : 'en');
  });
}

// --- mobile menu ---
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// --- scroll reveal ---
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.16 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// --- header background on scroll ---
const hdr = document.getElementById('hdr');
if (hdr) {
  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    hdr.style.background = scrolled
      ? 'rgba(244,239,230,.92)'
      : 'linear-gradient(var(--bone),rgba(244,239,230,0))';
    hdr.style.backdropFilter = scrolled ? 'blur(8px)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
