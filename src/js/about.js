import { gsap } from "gsap";

export const initAboutSectionAnimations = () => {
  gsap.fromTo(
    ".about__divider",
    {
      width: "0%",
    },

    {
      width: "100%",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "150% top",
        scrub: true,
      },
      duration: 0.4,
    }
  );
};
