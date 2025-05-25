"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Item } from "./CoursesHeader.interface";
import styles from "./CoursesHeader.module.scss";

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

export default function CoursesHeader() {
  const [activeItem, setActiveItem] = useState(0);

  const itemContentRefs = useRef<HTMLDivElement[]>([]);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

    useEffect(() => {
    const currentItem = itemContentRefs.current[activeItem];
    if (currentItem) {
      gsap.fromTo(
        currentItem.children,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [activeItem]);

  return (
    <div className={styles.container}>
      {/* === HEADER === */}
      <div className={styles.coursesHeader}>
        <div>
          <h5 className={styles.title}>Cursos</h5>
          <h6 className={styles.subtitle}>Cursos de Curta Duração</h6>
        </div>
        <div className={styles.menuItem}>
          {ITEMS.map((item, index) => (
            <button
              key={item.title}
              className={`${styles.itemButton} ${
                activeItem === index ? styles.active : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* === CONTEÚDO === */}
      <div className={styles.itemContents}>
        {ITEMS.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => {
              if (el) itemContentRefs.current[index] = el;
            }}
            className={`${styles.itemContent} ${
              activeItem === index ? styles.active : ""
            }`}
            style={{ display: activeItem === index ? "block" : "none" }}
          >
            <h6 className={styles.itemTitle}>{item.title}</h6>
            {item.courses.map((course, courseIndex) => (
              <div key={courseIndex} className={styles.courseItem}>
                <p className={styles.courseTitle}>{course.title}</p>
                <span className={styles.courseType}>{course.type}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
