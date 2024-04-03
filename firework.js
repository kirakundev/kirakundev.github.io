document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('fireworkCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.alpha = 1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }

        update() {
            this.draw();
            this.velocity.x *= 0.99; // Slight deceleration
            this.velocity.y *= 0.99; // Slight deceleration
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.01; // Fade out effect
        }
    }

    function addParticle(x, y, color) {
        for (let i = 0; i < 30; i++) {
            particles.push(new Particle(x, y, 3, color, {
                x: (Math.random() - 0.5) * (Math.random() * 6),
                y: (Math.random() - 0.5) * (Math.random() * 6)
            }));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Trail effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            } else {
                particle.update();
            }
        });
    }

    animate();

    canvas.addEventListener('click', function(e) {
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`; // Random color
        addParticle(e.clientX, e.clientY, color);
    });
});
