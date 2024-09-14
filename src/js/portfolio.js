import gsap from "gsap";
import { parallaxRows, splitTextIntoSpans } from "./helpers";

export const initPortfolioSectionAnimations = () => {
  splitTextIntoSpans(".portfolio__title");

  gsap.fromTo(
    ".portfolio__title span",
    {
      y: 50,
      scale: 0.8,
    },
    {
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: ".portfolio__inner",
        start: "top bottom",
        end: "150% top",
        scrub: true,
      },
      stagger: 0.3,
    }
  );

  parallaxRows(gsap, ".portfolio__container", ".portfolio__row");
};
