"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / windowHeight) * 100;

      setScrollProgress(scrollPercentage);
      setIsScrolled(currentScroll > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
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
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
