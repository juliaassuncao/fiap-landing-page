import { Courses } from "./components/Courses";
import { Faq } from "./components/Faq";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { WaterAnimation } from "./components/WaterAnimation";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Navbar />
        <Header />
        <Intro />
        <WaterAnimation />
        <Courses />
        <Faq />
      </main>
    </>
  );
}
