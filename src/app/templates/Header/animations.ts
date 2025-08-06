import { gsap } from "gsap";

export function animateHeader(
  primaryRef: React.RefObject<HTMLSpanElement | null>,
  secondaryRef: React.RefObject<HTMLSpanElement | null>,
  backgroundRef: React.RefObject<HTMLSpanElement | null>
) {
  const tl = gsap.timeline();

  tl.from(primaryRef.current, {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power3.out",
  })
    .from(secondaryRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(backgroundRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "sine.out",
    });
}
