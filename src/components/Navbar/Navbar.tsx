import Image from 'next/image'
import styles from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Image
        src="/svgs/logo-fiap.svg"
        alt="Logo FIAP"
        width={144}
        height={48}
        className={styles.logo}
      />
    </header>
  )
}
