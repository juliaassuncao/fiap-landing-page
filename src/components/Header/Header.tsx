import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mainTitle}>
          <span className={styles.primaryText}>A Melhor Faculdade</span>
          <span className={styles.secondaryText}>de Tecnologia</span>
        </div>
        
        <span className={styles.backgroundText}>Sobre</span>
      </div>
    </header>
  )
}