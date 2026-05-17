// Countdown to 5 jun 2026 00:00 Atlantic/Canary (UTC+1 in June)
const TARGET = new Date('2026-06-05T00:00:00+01:00').getTime();

function tick() {
    const now = Date.now();
    const diff = Math.max(0, TARGET - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const set = (id, v) => {
        const el = document.getElementById(id);
        if (el) el.textContent = String(v).padStart(2, '0');
    };
    set('cd-d', d);
    set('cd-h', h);
    set('cd-m', m);
    set('cd-s', s);
}
tick();
setInterval(tick, 1000);

// Sparkles in hero
(function makeSparkles() {
    const c = document.getElementById('sparkles-container');
    if (!c) return;
    const N = 28;
    for (let i = 0; i < N; i++) {
        const s = document.createElement('span');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = (Math.random() * 3) + 's';
        s.style.animationDuration = (2 + Math.random() * 2.5) + 's';
        const scale = 0.5 + Math.random() * 1.2;
        s.style.transform = `scale(${scale})`;
        c.appendChild(s);
    }
})();

// Mobile menu toggle — class on <header>, styled in CSS
(() => {
    const header = document.querySelector('header');
    const btn = document.querySelector('.mobile-menu-toggle');
    if (!header || !btn) return;
    const icon = btn.querySelector('i');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        header.classList.toggle('nav-open');
        if (icon) icon.className = header.classList.contains('nav-open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
    // Close on link tap or outside click
    header.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
        header.classList.remove('nav-open');
        if (icon) icon.className = 'fa-solid fa-bars';
    }));
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            header.classList.remove('nav-open');
            if (icon) icon.className = 'fa-solid fa-bars';
        }
    });
})();

// Loro Parque horarios popup
(() => {
    const popup = document.getElementById('loro-popup');
    if (!popup) return;
    const open = () => { popup.hidden = false; document.body.style.overflow = 'hidden'; };
    const close = () => { popup.hidden = true; document.body.style.overflow = ''; };
    document.querySelectorAll('.js-loro-times').forEach(a => a.addEventListener('click', (e) => {
        e.preventDefault();
        open();
    }));
    popup.querySelector('.popup-close')?.addEventListener('click', close);
    popup.addEventListener('click', (e) => { if (e.target === popup) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !popup.hidden) close(); });
})();
