'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './IntroBottom.module.scss';

gsap.registerPlugin(ScrollTrigger);

type MarqueeRowProps = {
  text: string;
  direction: 'left' | 'right';
  className?: string;
};

function MarqueeRow({ text, direction, className }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;

    gsap.to(rowRef.current, {
      x: direction === 'left'
        ? () => `-${rowRef.current!.scrollWidth / 2}px`
        : () => `${rowRef.current!.scrollWidth / 2}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: rowRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [direction]);

  return (
    <div className={styles.textRow}>
      <div ref={rowRef} className={`${styles.textContent} ${className || ''}`}>
        {Array(3).fill(null).map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}

const TEXT1 = 'Skills • Conhecimento •\u00A0';
const TEXT2 = 'Muito. Muito além dos tutoriais.\u00A0';

export function IntroBottom() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (firstRowRef.current) {
      gsap.to(firstRowRef.current, {
        x: () => `-${firstRowRef.current!.scrollWidth / 2}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: firstRowRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    if (secondRowRef.current) {
      gsap.to(secondRowRef.current, {
        x: () => `${secondRowRef.current!.scrollWidth / 2}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: secondRowRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          ref={imageRef}
          src="/imgs/intro.png"
          alt="Imagem em preto e branco. Mulher oriental de cabelo curto sentada virada olhando pro lado com a mão apoiada na boca e usando fone de ouvido."
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.textWrapper}>
        <MarqueeRow text={TEXT1} direction="left" />
        <MarqueeRow text={TEXT2} direction="right" className={styles.text2} />
      </div>
    </div>
  );
}

