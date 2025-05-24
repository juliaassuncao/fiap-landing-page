import Image from "next/image";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.topText}>
        <p className={styles.textTransition}>
          Cursos e imersões. Uma nova cultura de mercado.
        </p>
        <hr className={styles.lineText} />
        <p className={styles.textTransition}>
          Tecnologia, inovação e negócios. Presente e futuro.
        </p>
        <hr className={styles.lineText} />
      </div>
      <Image
        src="/imgs/intro.png"
        alt="Imagem de uma mulher com fone em preto e branco"
        width={1495}
        height={804}
        className={styles.imageIntro}
      />
      <div className={styles.bottomText}>
        <p className={styles.textStroke}>
          Skills<span className={styles.elipse}> </span>Conhecimento
        </p>
        <p className={styles.textStrokeItalic}>
          Muito. Muito além dos tutoriais
        </p>
      </div>
    </div>
  );
}
