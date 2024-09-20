import gsap from "gsap";
import { parallaxRows } from "./helpers";

export const initContactSectionAnimations = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      pin: true,
      start: "top top",
      end: "+=500",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 0.2, max: 3 },
        delay: 0.2,
        ease: "power2.in",
      },
    },
  });

  tl.addLabel("start")
    .from(".contact__inner", {
      scale: 0,
      duration: 2,
    })
    .addLabel("end");

  parallaxRows(gsap, ".contact__container", ".contact__row");
};
