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

// Mobile menu toggle (basic: scroll to anchor list)
document.querySelector('.mobile-menu-toggle')?.addEventListener('click', () => {
    const nav = document.querySelector('nav .nav-links');
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.right = '24px';
    nav.style.background = 'rgba(13,3,34,.95)';
    nav.style.padding = '1rem 1.5rem';
    nav.style.borderRadius = '14px';
    nav.style.border = '1px solid rgba(255,46,147,.3)';
    nav.style.boxShadow = '0 12px 30px rgba(0,0,0,.5)';
});
