import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function updateScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: self => {
        const progress = self.progress * 100;
        setScrollProgress(progress);
        setHasScrolled(self.scroll() > 0);
      },
    });

  }, []);

  return { scrollProgress, hasScrolled };
}
