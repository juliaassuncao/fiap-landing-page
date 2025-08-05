"use client";

import { useRef } from "react";
import styles from "./styles.module.scss";
import { animateHeader } from "./animations";
import { HEADER_TEXT } from "./constants";
import { useGSAP } from '@gsap/react';

export function Header() {
  const primaryRef = useRef<HTMLSpanElement>(null);
  const secondaryRef = useRef<HTMLSpanElement>(null);
  const backgroundRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    animateHeader(primaryRef, secondaryRef, backgroundRef);
  }, []);

  return (
    <div className={styles.container}>
      <span ref={backgroundRef} className={styles.backgroundText}>
        {HEADER_TEXT.background}
      </span>
      <h1 className={styles.title}>
        <span ref={primaryRef}>{HEADER_TEXT.titlePrimary}</span>
        <span ref={secondaryRef}>{HEADER_TEXT.titleSecondary}</span>
      </h1>
    </div>
  );
}
