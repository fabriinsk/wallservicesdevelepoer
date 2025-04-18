import '../styles/globals.css';
import React from "react";
import Head from 'next/head';
import { FaCode, FaPaintBrush, FaWhatsapp } from 'react-icons/fa';
import '../styles/globals.css'; // Corrigido o caminho para o arquivo CSS

export default function Home() {
  return (
    <>
      <Head>
        <title>WallServices | Web Design & Software</title>
        <meta name="description" content="Serviços profissionais de web design e desenvolvimento de software." />
      </Head>

      <header style={styles.header}>
        <h1>WallServices</h1>
        <p>Web Design & Desenvolvimento de Software</p>
        <a
          href="https://wa.me/+5518996578781"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          <FaWhatsapp /> Fale comigo
        </a>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2><FaPaintBrush /> Web Design Profissional</h2>
          <p>Criação de sites modernos, responsivos e otimizados para conversão.</p>
        </section>

        <section style={styles.section}>
          <h2><FaCode /> Desenvolvimento de Software</h2>
          <p>Soluções personalizadas em sistemas web e aplicações sob medida.</p>
        </section>

        <section style={styles.section}>
          <h2>Portfólio</h2>
          <div style={styles.projects}>
            <img src="/projeto1.jpg" alt="Projeto 1" />
            <img src="/projeto2.jpg" alt="Projeto 2" />
            <img src="/projeto3.jpg" alt="Projeto 3" />
          </div>
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
    padding: '3rem 1rem',
    textAlign: 'center' as const,
    backgroundColor: '#111827',
    color: '#fff',
  },
  whatsappButton: {
    marginTop: '1rem',
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  main: {
    padding: '2rem 1rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '3rem',
  },
  projects: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '2rem 1rem',
    backgroundColor: '#f3f4f6',
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
};
