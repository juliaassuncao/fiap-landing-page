import Faq from "./components/Faq/Faq";
import Intro from "@/app/components/Intro/Intro";
import Navbar from "@/app/components/Navbar/Navbar";
import Header from "@/app/components/Header/Header";
import Courses from "@/app/components/CoursesHeader/CoursesHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Intro />
        <Courses />
        <Faq />
      </main>
    </>
  )
}
