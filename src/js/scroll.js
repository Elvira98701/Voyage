export const smoothScrollToSection = (lenis) => {
  const anchorLinks = document.querySelectorAll(".anchor-link");

  if (anchorLinks && anchorLinks.length > 0) {
    anchorLinks.forEach((anchorLink) => {
      anchorLink.addEventListener("click", (e) => {
        const selector = `#${e.currentTarget.dataset.id}`;
        const target = document.querySelector(selector);

        if (target) {
          lenis.scrollTo(target, {
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          console.warn(
            `Element ${selector} not found. It might have been removed.`
          );
        }
      });
    });
  } else {
    console.warn("Element .anchor-link not found. It might have been removed.");
  }
};
