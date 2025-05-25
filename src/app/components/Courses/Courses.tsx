"use client";

import { Tab } from "./Courses.interface";
import styles from "./Courses.module.scss";

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
    <div className={styles.container}>
      <div className={styles.coursesHeader}>
        <div>
          <h5 className={styles.title}>Cursos</h5>
          <h6 className={styles.subtitle}>Cursos de Curta Duração</h6>
        </div>
        <div className={styles.menuItem}>
          {TABS.map((menuItem) => (
            <button key={menuItem.title} className={`${styles.itemButton}`}>
              {menuItem.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
