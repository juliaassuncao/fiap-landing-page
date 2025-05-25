import styles from "./page.module.scss"

import Courses from "@/app/components/CoursesHeader/CoursesHeader";
import Header from "@/app/components/Header/Header";
import Intro from "@/app/components/Intro/Intro";
import Navbar from "@/app/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Intro />
        <Courses />
      </main>
    </>
  )
}
