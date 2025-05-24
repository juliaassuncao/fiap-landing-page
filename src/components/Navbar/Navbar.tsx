import Image from 'next/image'
import styles from "./Navbar.module.scss"
import ProgressBar from './ProgressBar'

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Image
          src="/svgs/logo-fiap.svg"
          alt="Logo FIAP"
          width={144}
          height={48}
          className={styles.logo}
        />
      </nav>
      <ProgressBar />
    </>
  )
}
