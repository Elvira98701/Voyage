import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import "./src/styles/index.scss";

import { initBannerSectionAnimations } from "./src/js/banner";
import { initOverlayAnimations } from "./src/js/overlay";
import { initContactSectionAnimations } from "./src/js/contact";
import { initAboutSectionAnimations } from "./src/js/about";
import { initPortfolioSectionAnimations } from "./src/js/portfolio";
import { initServicesSectionAnimations } from "./src/js/services";
import { smoothScrollToSection } from "./src/js/scroll";
import { initPartnersSectionAnimations } from "./src/js/partners";
import { initTeamSectionAnimations } from "./src/js/team";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  smoothScrollToSection(lenis);
  initBannerSectionAnimations(lenis);
  initOverlayAnimations(lenis);
  initPartnersSectionAnimations();
  initAboutSectionAnimations();
  initPortfolioSectionAnimations();
  initServicesSectionAnimations();
  initTeamSectionAnimations();
  initContactSectionAnimations();
});
