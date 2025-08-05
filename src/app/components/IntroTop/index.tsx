'use client'

import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';

type MarqueeRowProps = {
  text: string;
  direction: 'left' | 'right';
  duration?: number;
};

function MarqueeRow({ text, direction, duration = 50 }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      gsap.to(rowRef.current, {
        xPercent: direction === 'left' ? -50 : 50,
        repeat: -1,
        duration,
        ease: "linear",
      });
    }
  }, [direction, duration]);

  return (
    <div className={styles.textRow}>
      <div ref={rowRef} className={styles.textContent}>
        {Array(4).fill(null).map((_, i) => (
          <span key={i}>{text}&nbsp;&nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  );
}

export function IntroTop() {
  const TEXT1 = "Cursos e imersões. Uma nova cultura de mercado.";
  const TEXT2 = "Tecnologia, iovação e negócios. Presente e futuro.";

  return (
    <section className={styles.header}>
      <div className={styles.headerText}>
        <MarqueeRow text={TEXT1} direction="left" />
        <div className={styles.line}></div>
        <MarqueeRow text={TEXT2} direction="right" />
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
