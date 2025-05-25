"use client";

import { IntroBottom } from "../IntroBottom/IntroBottom";
import { IntroTop } from "../IntroTop/IntroTop";

export function Intro() {
  return (
    <>
      <IntroTop />
      <IntroBottom />
    </>
  )
}

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./OldIntro.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// export function OldIntro() {
//   const imageRef = useRef(null);
//   const strokeRef = useRef(null);
//   const strokeItalicRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       imageRef.current,
//       { opacity: 0, y: -100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         scrollTrigger: {
//           trigger: imageRef.current,
//           start: "top 75%",
//           toggleActions: "play none none reverse"
//         }
//       }
//     );

//     gsap.to(strokeRef.current, {
//       x: () => -window.innerWidth / 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: strokeRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true
//       }
//     });

//     gsap.to(strokeItalicRef.current, {
//       x: () => window.innerWidth / 2,
//       ease: "none",
//       scrollTrigger: {
//         trigger: strokeItalicRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true
//       }
//     });
//   }, []);

//   return (
//       <div className={styles.imageWrapper}>
//         <Image
//           ref={imageRef}
//           src="/imgs/intro.png"
//           alt="Imagem de uma mulher com fone em preto e branco"
//           width={1495}
//           height={804}
//           className={styles.imageIntro}
//         />
//         <div className={styles.bottomText}>
//           <p className={styles.textStroke} ref={strokeRef}>
//             Skills<span className={styles.elipse}></span>Conhecimento
//             <span className={styles.elipse}></span>Skills<span className={styles.elipse}></span>Conhecimento
//             <span className={styles.elipse}></span>
//           </p>
//           <p className={styles.textStrokeItalic} ref={strokeItalicRef}>
//             Muito. Muito além dos tutoriais. Muito. Muito além dos tutoriais
//           </p>
//         </div>
//       </div>
//   );
// }
