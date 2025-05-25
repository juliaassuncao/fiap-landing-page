"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Intro.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const scrollLeftRef = useRef(null);
  const scrollRightRef = useRef(null);
  const imageRef = useRef(null);
  const strokeRef = useRef(null);
  const strokeItalicRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollLeftRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "linear"
    });

    gsap.to(scrollRightRef.current, {
      xPercent: 50,
      repeat: -1,
      duration: 20,
      ease: "linear"
    });

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

    gsap.to(strokeRef.current, {
      x: () => -window.innerWidth / 2,
      ease: "none",
      scrollTrigger: {
        trigger: strokeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(strokeItalicRef.current, {
      x: () => window.innerWidth / 2,
      ease: "none",
      scrollTrigger: {
        trigger: strokeItalicRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topText}>
        <div className={styles.textScrollWrapper}>
          <p className={styles.textTransition}>
            <span ref={scrollLeftRef}>
              Cursos e imersões. Uma nova cultura de mercado.&nbsp;&nbsp;&nbsp;
              Cursos e imersões. Uma nova cultura de mercado.&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </div>
        <hr className={styles.lineText} />

        <div className={styles.textScrollWrapper}>
          <p className={styles.textTransition}>
            <span ref={scrollRightRef}>
              Tecnologia, inovação e negócios. Presente e futuro.&nbsp;&nbsp;&nbsp;
              Tecnologia, inovação e negócios. Presente e futuro.&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </div>
        <hr className={styles.lineText} />
      </div>

      <div className={styles.imageWrapper}>
        <Image
          ref={imageRef}
          src="/imgs/intro.png"
          alt="Imagem de uma mulher com fone em preto e branco"
          width={1495}
          height={804}
          className={styles.imageIntro}
        />
        <div className={styles.bottomText}>
          <p className={styles.textStroke} ref={strokeRef}>
            Skills<span className={styles.elipse}></span>Conhecimento
            <span className={styles.elipse}></span>Skills<span className={styles.elipse}></span>Conhecimento
            <span className={styles.elipse}></span>
          </p>
          <p className={styles.textStrokeItalic} ref={strokeItalicRef}>
            Muito. Muito além dos tutoriais. Muito. Muito além dos tutoriais
          </p>
        </div>
      </div>
    </div>
  );
}
