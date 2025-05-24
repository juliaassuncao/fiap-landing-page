import Image from "next/image";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.container}>
      <p className={styles.textTransition}>
        CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.
      </p>
      <hr className={styles.lineText} />
      <p className={styles.textTransition}>
        TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
      </p>
      <hr className={styles.lineText} />
      <Image
        src="/imgs/intro.png"
        alt="Imagem de uma mulher com fone em preto e branco"
        width={1495}
        height={804}
        className={styles.imageIntro}
      />
      <p className={styles.textStroke}>SKILLS CONHECIMENTO</p>
      <p className={styles.textStrokeItalic}>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
    </div>
  );
}
