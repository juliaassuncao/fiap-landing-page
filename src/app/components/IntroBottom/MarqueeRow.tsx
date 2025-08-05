import { useRef } from "react";
import styles from "./styles.module.scss";
import { useGSAP } from "@gsap/react";
import { animateMarquee } from "./animations";

type MarqueeRowProps = {
  text: string;
  direction: "left" | "right";
  className?: string;
};

export function MarqueeRow({ text, direction, className }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (rowRef.current) {
      animateMarquee(rowRef.current, direction);
    }
  }, [direction]);

  return (
    <div className={styles.textRow}>
      <div ref={rowRef} className={`${styles.textContent} ${className || ""}`}>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <span key={i}>{text}</span>
          ))}
      </div>
    </div>
  );
}
