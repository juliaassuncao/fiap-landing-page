"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Header.module.scss";

export default function Header() {
  const primaryRef = useRef<HTMLSpanElement>(null);
  const secondaryRef = useRef<HTMLSpanElement>(null);
  const backgroundRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(primaryRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power3.out",
    })
      .from(
        secondaryRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .from(
        backgroundRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: "sine.out",
        },
        "+=0.1"
      );
  }, []);

  return (
    <header className={styles.header}>
        <div className={styles.mainTitle}>
          <span ref={primaryRef} className={styles.primaryText}>
            A Melhor Faculdade
          </span>
          <span ref={secondaryRef} className={styles.secondaryText}>
            de Tecnologia
          </span>
        </div>
        <span ref={backgroundRef} className={styles.backgroundText}>
          Sobre
        </span>
    </header>
  );
}
