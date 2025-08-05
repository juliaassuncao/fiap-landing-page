'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';

const frames = Array.from({ length: 192 }, (_, index) =>
  index.toString().padStart(3, '0')
);

export function WaterAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.5);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: number;

    const updateFrame = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollPosition = windowHeight - top;
      const scrollPercentage = Math.min(Math.max(scrollPosition / height, 0), 1);

      const newFrame = Math.floor(scrollPercentage * (frames.length - 1));

      if (newFrame !== frameRef.current) {
        frameRef.current = newFrame;
        setCurrentFrame(newFrame);
      }

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    animationFrameId = requestAnimationFrame(updateFrame);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  return (
    <div ref={containerRef} className={styles.container}>
      <Image
        src={`/imgs/water/water_${frames[currentFrame]}.jpg`}
        alt="Animação de água controlada pelo scroll"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}
