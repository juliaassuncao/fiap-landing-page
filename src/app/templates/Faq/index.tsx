"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FAQ_ITEMS } from "./constants";


export function Faq() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleMouseEnter = (index: number) => {
    if (!isMobile) setHighlightedIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setHighlightedIndex(null);
  };

  const handleClick = (index: number) => {
    if (isMobile) setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>FAQ</h2>
      <p className={styles.subtitle}>Dúvidas Frequentes</p>

      <div className={styles.faqGrid}>
        {FAQ_ITEMS.map((item, index) => {
          const isActive = isMobile
            ? openedIndex === index
            : highlightedIndex === index;

          return (
            <div
              key={index}
              className={`${styles.faqItem} ${isActive ? styles.active : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              role="button"
              aria-expanded={isActive}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClick(index);
              }}
            >
              <p className={styles.question}>{item.question}</p>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}