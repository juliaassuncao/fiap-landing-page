"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import { updateScrollProgress } from "./animations";

export function Navbar() {
  const { scrollProgress, hasScrolled } = updateScrollProgress();
  
  return (
    <header
      className={`${styles.navbar} ${
        hasScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/imgs/navbar/logo-fiap.svg"
            alt="Logo da FIAP"
            className={styles.logoImg}
            width={144}
            height={39}
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
