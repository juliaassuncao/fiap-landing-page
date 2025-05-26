"use client";

import { useState } from "react";
import styles from "./Courses.module.scss";
import type { Item } from "./Courses.interface";

const ITEMS: Item[] = [
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

export function Courses() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleMobileClick = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* === ABAS DOS CONTEÚDOS === */}
      <div className={styles.desktopTabs} role="tablist" aria-label="Categorias de cursos">
        <div>
          <h5 className={styles.title}>Cursos</h5>
          <h6 className={styles.subtitle}>Cursos de Curta Duração</h6>
        </div>
        <div className={styles.tabHeaders}>
          {ITEMS.map((tab, index) => (
            <button
              key={tab.title}
              className={`${styles.tabButton} ${activeTab === index ? styles.active : ""}`}
              onClick={() => handleTabClick(index)}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tab-panel-${index}`}
              id={`tab-${index}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      
      {/* === CONTEÚDO DOS CURSOS === */}
      <div className={styles.tabContents}>
        {ITEMS.map((tab, index) => (
          <div
            key={tab.title}
            className={`${styles.tabContent} ${activeTab === index ? styles.active : ""}`}
            role="tabpanel"
            id={`tab-panel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            <h6 className={styles.tabTitle}>{tab.title}</h6>
            {tab.courses.map((course) => (
              <div key={course.title} className={styles.courseItem}>
                <p className={styles.courseTitle}>{course.title}</p>
                <span className={styles.courseType}>{course.type}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* === ACCORDION DO MOBILE === */}
      <div className={styles.mobileAccordion}>
        {ITEMS.map((tab, index) => (
          <div
            key={tab.title}
            className={`${styles.accordionItem} ${expandedMobile === index ? styles.expanded : ""}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => handleMobileClick(index)}
              aria-expanded={expandedMobile === index}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-header-${index}`}
            >
              {tab.title}
              <div className={styles.expandIcon}>
                <span className={styles.horizontalLine} />
                <span className={styles.verticalLine} />
              </div>
            </button>

            <div
              id={`accordion-panel-${index}`}
              className={styles.accordionContent}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
              hidden={expandedMobile !== index}
            >
              {tab.courses.map((course) => (
                <div key={course.title} className={styles.courseItem}>
                  <p className={styles.courseTitle}>{course.title}</p>
                  <span className={styles.courseType}>{course.type}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
