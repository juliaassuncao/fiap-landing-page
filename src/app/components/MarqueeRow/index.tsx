"use client";

import { useRef } from "react";
import { animateMarquee } from "./animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MarqueeRowProps = {
  text: string;
  direction: "left" | "right";
  mode: "infinite" | "scroll";
  duration?: number;
  className?: string;
  repeatCount?: number;
};

export function MarqueeRow({
  text,
  direction,
  mode,
  duration = 100,
  repeatCount = 4,
}: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (rowRef.current) {
      animateMarquee(rowRef.current, { direction, mode, duration });
    }
  }, [direction, mode, duration]);

  return (
    <div ref={rowRef}>
      {Array(repeatCount)
        .fill(null)
        .map((_, i) => (
          <span key={i}>{text}</span>
        ))}
    </div>
  );
}