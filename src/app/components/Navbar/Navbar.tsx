"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window === "undefined") return;

      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / maxScroll) * 100;

      setScrollProgress(percentage);
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        hasScrolled ? styles["navbar--scrolled"] : ""
      }`}
    >
      <div className={styles["navbar__container"]}>
        <Link href="/" className={styles["navbar__logo"]}>
          <Image
            src="/svgs/logo-fiap.svg"
            alt="Logo da FIAP"
            width={144}
            height={48}
            priority
          />
        </Link>
      </div>
      <div
        className={styles["navbar__progress-bar"]}
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
