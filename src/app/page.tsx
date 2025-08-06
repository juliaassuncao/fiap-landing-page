import { Courses } from "./templates/Courses";
import { Faq } from "./templates/Faq";
import { Header } from "./templates/Header";
import { Intro } from "./templates/Intro";
import { Navbar } from "./templates/Navbar";
import { WaterAnimation } from "./templates/WaterAnimation";
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
