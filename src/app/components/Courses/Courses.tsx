import styles from "./Courses.module.scss"

export default function Courses() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Cursos</h1>
        <h2 className={styles.subtitle}>Cursos de Curta Duração</h2>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Tecnologia</li>
        <li className={styles.menuItem}>Inovação</li>
        <li className={styles.menuItem}>Negócios</li>
      </ul>
    </div>
  )
}