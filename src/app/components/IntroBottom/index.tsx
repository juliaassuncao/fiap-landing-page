'use client';

import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.scss';
import { MarqueeRow } from './MarqueeRow';
import { animateImage } from './animations';
import { INTROBOTTOM_TEXT } from './constants';
import { useGSAP } from '@gsap/react';

export function IntroBottom() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  
  useGSAP(() => {
    if (imageRef.current) {
      animateImage(imageRef.current);
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
        <MarqueeRow text={INTROBOTTOM_TEXT.text1} direction="left" />
        <MarqueeRow text={INTROBOTTOM_TEXT.text2} direction="right" className={styles.text2} />
      </div>
    </div>
  );
}

