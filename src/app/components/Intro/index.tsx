"use client";

import styles from "./styles.module.scss";
import { INTRO_TEXTS, INTRO_IMAGE } from "./constants";
import { MarqueeRow } from "../MarqueeRow";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateIntroImage } from "./animations";

export function Intro() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    if (imageRef.current) {
      animateIntroImage(imageRef.current);
    }
  }, []);

  return (
    <section className={styles.container}>
      {/* marquee infinito */}
      <div className={styles.marqueeInfiniteText}>
        <MarqueeRow
          text={INTRO_TEXTS.topLine1}
          direction="left"
          mode="infinite"
        />
        <div className={styles.line}></div>
        <MarqueeRow
          text={INTRO_TEXTS.topLine2}
          direction="right"
          mode="infinite"
        />
        <div className={styles.line}></div>
      </div>

      {/* imagem + marquee scroll */}
      <div className={styles.mediaWrapper}>
        <div className={styles.imageContainer}>
          <Image
            ref={imageRef}
            src={INTRO_IMAGE.src}
            alt={INTRO_IMAGE.alt}
            width={1495}
            height={804}
            priority
            sizes="100vw"
          />
        </div>

        <div className={styles.marqueeScrollText}>
          <MarqueeRow
            text={INTRO_TEXTS.bottomLine1}
            direction="left"
            mode="scroll"
          />
          <MarqueeRow
            text={INTRO_TEXTS.bottomLine2}
            direction="right"
            mode="scroll"
          />
        </div>
      </div>
    </section>
  );
}
