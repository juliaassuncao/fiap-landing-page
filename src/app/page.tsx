import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/Navbar/Navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        {/* 
        <Intro />
        <Courses />
        <Faq />
        */}
        <Navbar />
        <Header />
        <Intro />
      </main>
    </>
  );
}
