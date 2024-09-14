export const splitTextIntoSpans = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    const text = element.innerText;
    const splitText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    element.innerHTML = splitText;
  } else {
    console.warn(`Element ${selector} not found. It might have been removed.`);
  }
};

export const parallaxRows = (gsap, containerSelector, rowSelector) => {
  const containers = document.querySelectorAll(containerSelector);

  if (containers) {
    containers.forEach((container, index) => {
      let start = "0%";
      let end = "-10%";

      if (index % 2 === 0) {
        start = "0%";
        end = "10%";
      }

      const row = container.querySelector(rowSelector);

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
  } else {
    console.warn(
      `Element ${containerSelector} not found. It might have been removed.`
    );
  }
};
