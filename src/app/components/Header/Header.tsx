"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Header.module.scss";

export function Header() {
  const primaryRef = useRef<HTMLSpanElement>(null);
  const secondaryRef = useRef<HTMLSpanElement>(null);
  const backgroundRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
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

  }, []);

  return (
    <div className={styles.container}>
      <span ref={backgroundRef} className={styles.backgroundText}>
        SOBRE
      </span>
        <h1 className={styles.title}>
          <span ref={primaryRef}>A Melhor Faculdade</span>
          <span ref={secondaryRef}>de Tecnologia</span>
        </h1>
    </div>
  );
}
