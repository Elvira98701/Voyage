import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { splitTextIntoSpans } from "./helpers";

export const initPortfolioSectionAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);
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

  const portfolioContainers = document.querySelectorAll(
    ".portfolio__container"
  );

  portfolioContainers.forEach((container, index) => {
    let start = "0%";
    let end = "-15%";

    if (index % 2 === 0) {
      start = "0%";
      end = "10%";
    }

    const row = container.querySelector(".portfolio__row");

    gsap.fromTo(
      row,
      {
        x: start,
      },
      {
        x: end,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "150% top",
          scrub: true,
        },
      }
    );
  });
};
