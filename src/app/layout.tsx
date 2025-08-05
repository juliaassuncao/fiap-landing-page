import "./styles/globals.scss";
import type { Metadata } from "next";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const metadata: Metadata = {
  title: "FIAP",
  description: "Landing page desenvolvida como parte de uma avaliação técnica para vaga de Front-End, com foco em performance, design responsivo e interatividade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
