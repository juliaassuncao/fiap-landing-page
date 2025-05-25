"use client"

import { Tab } from "./Courses.interface";
import styles from "./Courses.module.scss"

const TABS: Tab[] = [
  {
    title: "Tecnologia",
    courses: [
      { title: "Big Data Ecosystem", type: "REMOTO • LIVE" },
      { title: "Creating Dashboards for BI", type: "REMOTO • LIVE" },
      {
        title: "Big Data Science - Machine Learning & Data Mining",
        type: "REMOTO • LIVE • MULTIMÍDIA",
      },
      { title: "Storytelling", type: "REMOTO • LIVE" },
    ],
  },
  {
    title: "Inovação",
    courses: [
      { title: "UX", type: "Digital" },
      { title: "UX Writing", type: "LIVE" },
      { title: "Storytelling para Negócios", type: "LIVE" },
      { title: "Chatbots", type: "LIVE" },
    ],
  },
  {
    title: "Negócios",
    courses: [
      { title: "Agile Culture", type: "Digital" },
      { title: "DPO Data Protection Officer", type: "LIVE" },
      { title: "IT Business Partner", type: "LIVE" },
      { title: "Perícia Forense Computacional", type: "LIVE" },
    ],
  },
];

export default function Courses() {
  return (
    <section className={styles.container}>
      <div>

      </div>
    </section>
  )
}