"use client";

import Image from "next/image";
import styles from "./IntroBottom.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT1 = "Skills • Conhecimento •\u00A0";
const TEXT2 = "Muito. Muito além dos tutoriais.\u00A0";

export function IntroBottom() {
  const imageRef = useRef(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
        gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    if (firstRowRef.current) {
      gsap.to(firstRowRef.current, {
        x: () => `-${firstRowRef.current!.scrollWidth / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: firstRowRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (secondRowRef.current) {
      gsap.to(secondRowRef.current, {
        x: () => `${secondRowRef.current!.scrollWidth / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: secondRowRef.current,
          start: "top bottom",
          end: "bottom top",
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
            alt="Imagem em em preto e branco. Mulher oriental de cabelo curto sentada virada olhando pro lado com a mão apoiada na boca e usando fone de ouvido."
            fill
            style={{ objectFit: 'cover' }}
            priority
          />

      </div>

      <div className={styles.textWrapper}>
        <div className={styles.textRow}>
          <div ref={firstRowRef} className={styles.textContent}>
            <span>{TEXT1}</span>
            <span>{TEXT1}</span>
            <span>{TEXT1}</span>
          </div>
        </div>
        <div className={styles.textRow}>
          <div ref={secondRowRef} className={styles.textContent}>
            <span className={styles.text2}>{TEXT2}</span>
            <span className={styles.text2}>{TEXT2}</span>
            <span className={styles.text2}>{TEXT2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
