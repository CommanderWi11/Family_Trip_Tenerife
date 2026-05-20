// Countdown to 5 jun 2026 00:00 Atlantic/Canary (UTC+1 in June)
const TARGET = new Date('2026-06-05T00:00:00+01:00').getTime();
const BDAY_END = new Date('2026-06-06T00:00:00+01:00').getTime();

function tick() {
    const now = Date.now();
    const diff = TARGET - now;
    const setRaw = (id, v) => {
        const el = document.getElementById(id);
        if (el) el.textContent = v;
    };
    const setLbl = (sel, v) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = v;
    };
    if (diff <= 0) {
        setRaw('cd-d', 'TE');
        setRaw('cd-h', 'NE');
        setRaw('cd-m', 'RI');
        setRaw('cd-s', 'FE');
        const cd = document.getElementById('countdown');
        if (cd && !cd.classList.contains('done')) {
            cd.classList.add('done');
            cd.querySelectorAll('.cd-lbl').forEach(el => el.textContent = '');
        }
    } else {
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setRaw('cd-d', String(d).padStart(2, '0'));
        setRaw('cd-h', String(h).padStart(2, '0'));
        setRaw('cd-m', String(m).padStart(2, '0'));
        setRaw('cd-s', String(s).padStart(2, '0'));
    }
    // Birthday banner — visible only on 5 jun 2026 (Canary)
    const banner = document.getElementById('bday-banner');
    if (banner) {
        const onBday = now >= TARGET && now < BDAY_END;
        banner.hidden = !onBday;
    }
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

// Generic popup wiring
function wirePopup(popupId, triggerSelector) {
    const popup = document.getElementById(popupId);
    if (!popup) return;
    const open = () => { popup.hidden = false; document.body.style.overflow = 'hidden'; };
    const close = () => { popup.hidden = true; document.body.style.overflow = ''; };
    document.querySelectorAll(triggerSelector).forEach(a => a.addEventListener('click', (e) => {
        e.preventDefault();
        open();
    }));
    popup.querySelector('.popup-close')?.addEventListener('click', close);
    popup.addEventListener('click', (e) => { if (e.target === popup) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !popup.hidden) close(); });
}
wirePopup('loro-popup', '.js-loro-times');
wirePopup('monasterio-popup', '.js-monasterio-info');
