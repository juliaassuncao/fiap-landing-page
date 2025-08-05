import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateImage(image: HTMLElement) {
  gsap.fromTo(
    image,
    { opacity: 0, y: -100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: image,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function animateMarquee(row: HTMLElement, direction: "left" | "right") {
  gsap.to(row, {
    x:
      direction === "left"
        ? () => `-${row.scrollWidth / 2}px`
        : () => `${row.scrollWidth / 2}px`,
    ease: "none",
    scrollTrigger: {
      trigger: row,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}
