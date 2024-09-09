import { gsap } from "gsap";

export const initTeamSectionAnimations = () => {
  gsap.fromTo(
    ".team__description",
    {
      x: 100,
    },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".team__inner",
        start: "top bottom",
        end: "150% top",
        scrub: true,
      },
      duration: 0.2,
    }
  );
};
