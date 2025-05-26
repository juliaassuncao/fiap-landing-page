'use client'

import { useEffect, useRef } from 'react';
import styles from './IntroTop.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEXT1 = "Cursos e imersões. Uma nova cultura de mercado.";
const TEXT2 = "Cursos e imersões. Uma nova cultura de mercado.";

export function IntroTop() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstRowRef.current) {
      gsap.to(firstRowRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 50,
        ease: "linear",
      });
    }

    if (secondRowRef.current) {
      gsap.to(secondRowRef.current, {
        xPercent: 50,
        repeat: -1,
        duration: 50,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.headerText}>
        <div className={styles.textRow}>
          <div ref={firstRowRef} className={styles.textContent}>
            <span>{TEXT1}&nbsp;&nbsp;&nbsp;</span>
            <span>{TEXT1}&nbsp;&nbsp;&nbsp;</span>
            <span>{TEXT1}&nbsp;&nbsp;&nbsp;</span>
            <span>{TEXT1}&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.textRow}>
          <div ref={secondRowRef} className={styles.textContent}>
            <span>{TEXT2}&nbsp;&nbsp;&nbsp;</span>
            <span>{TEXT2}&nbsp;&nbsp;&nbsp;</span>
            <span>{TEXT2}&nbsp;&nbsp;&nbsp;</span>
            <span>{TEXT2}&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
