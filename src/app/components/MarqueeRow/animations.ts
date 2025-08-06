import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  direction: "left" | "right";
  mode: "infinite" | "scroll";
  duration: number;
};

export function animateMarquee(
  element: HTMLDivElement,
  { direction, mode, duration }: AnimationProps
) {
  if (mode === "infinite") {
    gsap.to(element, {
      xPercent: direction === "left" ? -50 : 50,
      repeat: -1,
      duration,
      ease: "linear",
    });
  }

  if (mode === "scroll") {
    const distance = element.scrollWidth / 2;

    gsap.to(element, {
      x: direction === "left" ? -distance : distance,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }
}
