import gsap from "gsap";
import { parallaxRows } from "./helpers";

export const initPartnersSectionAnimations = () => {
  parallaxRows(gsap, ".partners__container", ".partners__row");
};
