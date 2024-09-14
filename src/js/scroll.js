export const scrollAnimation = (lenis) => {
  const menuLinks = document.querySelectorAll(".menu__link");

  if (menuLinks) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", (e) => {
        const target = document.querySelector(`#${e.currentTarget.dataset.id}`);
        lenis.scrollTo(target, {
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      });
    });
  } else {
    console.warn("Element .menu__link not found. It might have been removed.");
  }
};
