"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import ProgressBar from "./ProgressBar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.top}`}>
        <Image
          src="/svgs/logo-fiap.svg"
          alt="Logo FIAP"
          width={144}
          height={48}
          className={styles.logo}
        />
      </nav>
      <ProgressBar />
    </>
  );
}
