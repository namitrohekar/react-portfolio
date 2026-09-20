import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver hook for section-level reveals.
 * Adds the CSS class `is-visible` to the target element when it enters the viewport.
 * Use on section wrappers — not individual cards — for one coherent reveal.
 *
 * @param {number} threshold  - 0–1, fraction of element visible before triggering (default 0.08)
 * @param {string} rootMargin - optional CSS margin string (default "0px")
 * @returns {React.RefObject} ref - attach to the element you want to observe
 */
export function useReveal(threshold = 0.08, rootMargin = "0px") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // fire once, then stop
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
