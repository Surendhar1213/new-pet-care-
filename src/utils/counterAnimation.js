// utils/counterAnimation.js - Final Fixed Version

// Single counter animation
export const initCounterAnimation = (element, target, duration = 2000) => {
  if (!element || isNaN(target)) return null;

  // Always start from 0
  element.textContent = '0';
  
  const startTime = performance.now();
  let animationId = null;

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing - easeOutExpo for smooth animation
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentValue = Math.floor(target * easeProgress);
    
    element.textContent = currentValue;

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      element.textContent = target;
    }
  };

  animationId = requestAnimationFrame(animate);

  // Return cancel function
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
};

// Initialize all counters in container
export const initCounters = (container, options = {}) => {
  if (!container) return () => {};

  const {
    threshold = 0.1,
    rootMargin = '100px',
    duration = 2000,
    delay = 100
  } = options;

  const counters = container.querySelectorAll('.counter-number');
  if (counters.length === 0) return () => {};

  let hasAnimated = false;
  let cancelFunctions = [];
  let observer = null;

  // Reset all counters to 0
  const resetCounters = () => {
    counters.forEach(counter => {
      counter.textContent = '0';
    });
  };

  // Animate all counters
  const animateAll = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    counters.forEach((counter, index) => {
      const target = parseInt(counter.getAttribute('data-count'), 10);
      
      if (!isNaN(target) && target > 0) {
        setTimeout(() => {
          const cancel = initCounterAnimation(counter, target, duration);
          if (cancel) cancelFunctions.push(cancel);
        }, delay * index);
      }
    });

    // Disconnect observer after animation starts
    if (observer) {
      observer.disconnect();
    }
  };

  // Check if element is in viewport
  const isInViewport = () => {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top < windowHeight && rect.bottom > 0;
  };

  // Initialize
  resetCounters();

  // Create observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animateAll();
        }
      });
    },
    { threshold, rootMargin }
  );

  // Start observing
  observer.observe(container);

  // Fallback - check if already visible
  setTimeout(() => {
    if (!hasAnimated && isInViewport()) {
      animateAll();
    }
  }, 200);

  // Cleanup function
  return () => {
    hasAnimated = false;
    if (observer) {
      observer.disconnect();
    }
    cancelFunctions.forEach(cancel => cancel());
    cancelFunctions = [];
  };
};

export default initCounters;