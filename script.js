// ===== Particles Background =====
(function() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let w, h;
    const COUNT = 80,
        MAX_SPEED = 0.35;
    let particles = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * MAX_SPEED * 1.6;
            this.vy = (Math.random() - 0.5) * MAX_SPEED * 1.6;
            this.r = Math.random() * 2.2 + 0.8;
            this.o = Math.random() * 0.4 + 0.15;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx *= -1;
            if (this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167,139,250,${this.o})`;
            ctx.fill();
        }
    }

    function init() {
        particles = Array.from({ length: COUNT }, () => new Particle());
    }

    function drawLines() {
        const dist = 150;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < dist) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(167,139,250,${0.10 * (1 - d / dist)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update();
            p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => { resize();
        init(); });
    resize();
    init();
    animate();
})();

// ===== Typing Effect =====
(function() {
    const phrases = [
        'Information Technology Graduate',
        'Problem Solver',
        'Creative Thinker',
        'Team Player',
        'Lifelong Learner'
    ];
    const el = document.getElementById('typed-text');
    let idx = 0,
        charIdx = 0,
        deleting = false,
        speed = 90;

    function type() {
        const current = phrases[idx];
        if (!deleting) {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                deleting = true;
                speed = 1600;
            } else {
                speed = 70 + Math.random() * 40;
            }
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                idx = (idx + 1) % phrases.length;
                speed = 400;
            } else {
                speed = 40 + Math.random() * 30;
            }
        }
        setTimeout(type, speed);
    }
    setTimeout(type, 600);
})();

// ===== Intersection Observer (Reveal Animations) =====
(function() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => observer.observe(el));
})();