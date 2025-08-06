import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateIntroImage(image: HTMLImageElement) {
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
