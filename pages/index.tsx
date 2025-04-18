import React from "react";
import Head from 'next/head';
import { FaCode, FaPaintBrush, FaWhatsapp } from 'react-icons/fa';

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
            <img src="/projeto3.jpg" alt="Projeto 3" />
          </div>
        </section>

        {/* Tabela de Preços */}
        <section style={styles.pricingSection}>
          <h2>Planos e Preços</h2>
          <div style={styles.pricingTable}>
            <div style={styles.plan}>
              <h3>Plano Plus</h3>
              <p>✔ Site responsivo</p>
              <p>✔ Página única</p>
              <p>✔ Otimização básica</p>
              <p>✔ Suporte via WhatsApp</p>
              <strong>R$ 300</strong>
            </div>
            <div style={styles.planVip}>
              <h3>Plano VIP</h3>
              <p>✔ Site responsivo e completo</p>
              <p>✔ Múltiplas páginas</p>
              <p>✔ SEO Avançado</p>
              <p>✔ Integrações personalizadas</p>
              <p>✔ Suporte Premium</p>
              <strong>R$ 600</strong>
            </div>
          </div>
          <a
            href="https://wa.me/+5518996578781"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
          >
            <FaWhatsapp /> Consultar orçamento
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
  pricingSection: {
    padding: '3rem 1rem',
    backgroundColor: '#f9fafb',
    textAlign: 'center' as const,
  },
  pricingTable: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
    maxWidth: '800px',
    margin: '2rem auto',
  },
  plan: {
    backgroundColor: '#e5e7eb',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  planVip: {
    backgroundColor: '#d1fae5',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
};
