import { Courses } from "./components/Courses/Courses";
import { Faq } from "./components/Faq/Faq";
import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/Navbar/Navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Navbar />
        <Header />
        <Intro />
        <Courses />
        <Faq />
      </main>
    </>
  );
}
