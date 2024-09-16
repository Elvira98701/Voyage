import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { cursor } from "./cursor";
import { splitTextIntoSpans } from "./helpers";

export const initBannerSectionAnimations = (lenis) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  gsap.set(["html.lenis", "html.lenis body"], {
    height: "100dvh",
  });
  lenis.stop();

  splitTextIntoSpans(".logo");

  if (ScrollTrigger.isTouch == 0) {
    gsap.set(".banner__image", {
      xPercent: -50,
      yPercent: -30,
    });
  } else {
    gsap.set(".banner__image", {
      xPercent: -50,
      yPercent: 0,
    });
  }

  tl.to(".preloader", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    ease: "power3.out",
    onComplete: () => {
      gsap.set(".preloader", {
        display: "none",
      });

      gsap.set(["html.lenis", "html.lenis body"], {
        height: "auto",
      });
      lenis.start();
    },
  })
    .from(".banner__image", {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      duration: 1,
    })
    .from(".logo span", {
      opacity: 0,
      y: -100,
      stagger: 0.3,
      ease: "power4",
      duration: 1,
    })
    .from(
      ".menu__item, .header__description, .banner__description",
      {
        opacity: 0,
        y: 100,
        stagger: 0.3,
      },
      "<"
    )
    .from(".banner__button", {
      scale: 0,
      opacity: 0,
      ease: "elastic",
      duration: 1.2,
      onComplete: () => {
        if (ScrollTrigger.isTouch == 0) {
          cursor();
        }
      },
    });

  gsap.to(".header", {
    backgroundColor: "#FE4249",
    color: "#F0F0F0",
    scrollTrigger: {
      trigger: ".header",
      start: "bottom",
      end: "820",
      scrub: true,
    },
  });

  gsap.to(".header__inner", {
    height: "120px",
    scrollTrigger: {
      trigger: ".header",
      start: "center",
      end: "820",
      scrub: true,
    },
  });

  gsap.to(".logo", {
    fontSize: "30px",
    scrollTrigger: {
      trigger: ".header",
      start: "center",
      end: "820",
      scrub: true,
    },
  });

  gsap.to(".banner", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".header",
      start: "top",
      end: "820",
      scrub: true,
    },
  });
};
