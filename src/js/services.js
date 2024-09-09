import { gsap } from "gsap";

export const initServicesSectionAnimations = () => {
  gsap.fromTo(
    ".services__item",
    {
      y: 100,
    },
    {
      y: 0,
      scrollTrigger: {
        trigger: ".services__list",
        start: "top bottom",
        end: "150% top",
        scrub: true,
      },
      stagger: 0.4,
    }
  );
};
