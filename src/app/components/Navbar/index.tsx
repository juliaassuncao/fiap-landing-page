"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useScrollProgress } from "./hooks";

export function Navbar() {
  const { scrollProgress, hasScrolled } = useScrollProgress();
  
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
            height={39}
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
