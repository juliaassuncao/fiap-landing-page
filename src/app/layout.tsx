import "./styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page - FIAP",
  description: "Projeto de avaliação técnica para vaga de FrontEnd",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
