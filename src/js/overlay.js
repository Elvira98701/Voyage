import gsap from "gsap";
import { splitTextIntoSpans } from "./helpers";

export const initOverlayAnimations = () => {
  const openButton = document.querySelector("#openButton");
  const closeButton = document.querySelector("#closeButton");
  const overlay = document.querySelector("#overlay");
  let isOpen = false;
  splitTextIntoSpans(".banner__subtitle");

  const tl = gsap.timeline({
    paused: true,
  });

  tl.to(".banner__overlay", {
    opacity: 1,
    pointerEvents: "all",
  })
    .from(".banner__subtitle span", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "power4",
      duration: 1,
    })
    .from(".banner__close-button", {
      scale: 0,
      opacity: 0,
    });

  const toggleOverlay = () => {
    if (isOpen) {
      tl.reverse();
      gsap.set(["html.lenis", "html.lenis body"], {
        height: "auto",
      });
    } else {
      tl.play();
      gsap.set(["html.lenis", "html.lenis body"], {
        height: "100dvh",
      });
    }

    isOpen = !isOpen;
    overlay.inert = !overlay.inert;
  };

  openButton.addEventListener("click", toggleOverlay);
  closeButton.addEventListener("click", toggleOverlay);
};
