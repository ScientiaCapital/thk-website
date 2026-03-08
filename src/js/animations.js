/**
 * THK Enterprises - Scroll Animations
 * Uses Intersection Observer for performant scroll-triggered animations
 */

// Initialize Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: unobserve after animation to improve performance
      // animationObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

/**
 * Initialize all fade-in animations
 */
export function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => animationObserver.observe(el));
}

/**
 * Stagger animations for grid items
 * @param {string} selector - CSS selector for parent container
 * @param {number} delay - Delay between items in ms
 */
export function staggerAnimations(selector, delay = 100) {
  const container = document.querySelector(selector);
  if (!container) return;

  const items = container.querySelectorAll('.fade-in');
  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * delay}ms`;
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
