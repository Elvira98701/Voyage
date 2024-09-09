import gsap from "gsap";

export const initPartnersSectionAnimations = () => {
  const partnersContainers = document.querySelectorAll(".partners__container");

  partnersContainers.forEach((container, index) => {
    let start = "0%";
    let end = "-10%";

    if (index % 2 === 0) {
      start = "0%";
      end = "10%";
    }

    const row = container.querySelector(".partners__row");

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
