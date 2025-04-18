import React from "react";
import Head from "next/head";
import { FaCode, FaPaintBrush, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>WallServices | Web Design & Software</title>
        <meta
          name="description"
          content="Serviços profissionais de web design e desenvolvimento de software."
        />
      </Head>

      <header style={styles.header}>
        <h1>WallServices</h1>
        <p>Web Design & Desenvolvimento de Software</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>
            <FaPaintBrush /> Web Design Profissional
          </h2>
          <p>Criação de sites modernos, responsivos e otimizados para conversão.</p>
        </section>

        <section style={styles.section}>
          <h2>
            <FaCode /> Desenvolvimento de Software
          </h2>
          <p>
            Soluções personalizadas em sistemas web e aplicações sob medida.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Portfólio</h2>
          <div style={styles.projects}>
            <img src="/projeto1.jpg" alt="Projeto 1" style={styles.projectImage} />
            <img src="/projeto2.jpg" alt="Projeto 2" style={styles.projectImage} />
            <img src="/projeto3.jpg" alt="Projeto 3" style={styles.projectImage} />
            <img src="/projeto4.jpg" alt="Projeto 4" style={styles.projectImage} />
          </div>
        </section>

        <section style={styles.section}>
          <h2>Tabela de Preços</h2>
          <div style={styles.priceTable}>
            <div style={styles.plan}>
              <h3>Plano Plus</h3>
              <p>Inclui até 10 páginas e suporte básico.</p>
              <p>R$ 1.500,00</p>
            </div>
            <div style={styles.plan}>
              <h3>Plano VIP</h3>
              <p>Inclui até 20 páginas, suporte VIP e funcionalidades extras.</p>
              <p>R$ 3.000,00</p>
            </div>
          </div>
          <a
            href="https://wa.me/+5518996578781"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
          >
            <FaWhatsapp /> Consulte seu orçamento
          </a>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} WallServices. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

const styles = {
  header: {
    padding: "3rem 1rem",
    textAlign: "center" as const,
    backgroundColor: "#111827",
    color: "#fff",
  },
  whatsappButton: {
    marginTop: "1rem",
    display: "inline-block",
    padding: "0.8rem 1.5rem",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  main: {
    padding: "2rem 1rem",
    maxWidth: "960px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "3rem",
  },
  projects: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Alterado para 2 colunas
    gap: "1rem",
    marginBottom: "2rem",
  },
  projectImage: {
    width: "100%", // Faz as imagens ocuparem 100% da largura de seu contêiner
    height: "auto", // Mantém a proporção da imagem
    borderRadius: "8px", // Adiciona bordas arredondadas
  },
  priceTable: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    marginTop: "2rem",
    border: "2px solid #ddd",
    padding: "1rem",
    borderRadius: "8px",
  },
  plan: {
    border: "1px solid #ddd",
    padding: "1rem",
    borderRadius: "8px",
    flex: "1",
    textAlign: "center" as const,
  },
  footer: {
    textAlign: "center" as const,
    padding: "2rem 1rem",
    backgroundColor: "#f3f4f6",
    marginTop: "2rem",
    fontSize: "0.9rem",
  },
};
