/**
 * 3D Card Tilt & Interactive Mouse Glow Tracking
 */
class TiltEngine {
  constructor() {
    this.tiltElements = document.querySelectorAll('[data-tilt]');
    this.glowElements = document.querySelectorAll('.glow-card');
    this.init();
  }

  init() {
    // 3D Tilt
    this.tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => this.handleTilt(e, el));
      el.addEventListener('mouseleave', () => this.resetTilt(el));
    });

    // Radial Glow on cards
    this.glowElements.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  handleTilt(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = parseFloat(el.getAttribute('data-tilt-max') || 10);
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  resetTilt(el) {
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TiltEngine();
});
