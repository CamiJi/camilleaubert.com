// Shared scroll-reveal utility
// Replaces duplicated IntersectionObserver logic across components

interface RevealConfig {
  /** CSS selector for the elements to observe */
  selector: string;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
  /** ms stagger delay multiplier (per column position) */
  staggerDelay?: number;
  /** Number of columns for stagger grouping, 0 = no stagger (reveal immediately) */
  staggerColumns?: number;
}

export function initReveal(configs: RevealConfig[]): void {
  configs.forEach((config) => {
    const {
      selector,
      threshold = 0.15,
      rootMargin = '0px 0px -10px 0px',
      staggerDelay = 150,
      staggerColumns = 3,
    } = config;

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = Array.from(elements).indexOf(target);

            if (staggerColumns > 0) {
              const delay = (index % staggerColumns) * staggerDelay;
              setTimeout(() => target.classList.add('reveal'), delay);
            } else {
              target.classList.add('reveal');
            }

            observer.unobserve(target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
  });
}

