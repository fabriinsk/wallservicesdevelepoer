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
            <img src="/projeto1.jpg" alt="Projeto 1" style={styles.projectImage} />
            <img src="/projeto2.jpg" alt="Projeto 2" style={styles.projectImage} />
            <img src="/projeto3.jpg" alt="Projeto 3" style={styles.projectImage} />
            <img src="/projeto4.jpg" alt="Projeto 4" style={styles.projectImage} />
          </div>
        </section>

        <section style={styles.priceSection}>
          <h2>Preços</h2>
          <div style={styles.priceTable}>
            <div style={styles.pricePlan}>
              <h3>Plano Inicial</h3>
              <p>Ideal para pequenos negócios</p>
              <ul>
                <li>Site responsivo</li>
                <li>Suporte básico</li>
                <li>1 página adicional</li>
                <li>Preço: R$ 300 - R$ 1.500</li>
                <li>Prazo de entrega: até 15 dias úteis</li>
              </ul>
            </div>

            <div style={styles.pricePlan}>
              <h3>Plano VIP</h3>
              <p>Para empresas que precisam de mais recursos</p>
              <ul>
                <li>Site responsivo</li>
                <li>Suporte 24/7</li>
                <li>SEO básico</li>
                <li>Até 5 páginas adicionais</li>
                <li>Preço: R$ 1.500 - R$ 3.000</li>
                <li>Prazo de entrega: até 30 dias úteis</li>
              </ul>
            </div>
          </div>
        </section>

        <div style={styles.consultButtonContainer}>
          <a
            href="https://wa.me/+5518996578781"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.consultButton}
          >
            Consulte seu orçamento
          </a>
        </div>
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
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  priceSection: {
    marginTop: '3rem',
  },
  priceTable: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '2rem',
  },
  pricePlan: {
    flex: 1,
    marginRight: '1rem',
    textAlign: 'center' as const,
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  consultButtonContainer: {
    textAlign: 'center' as const,
    marginTop: '3rem',
  },
  consultButton: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '2rem 1rem',
    backgroundColor: '#f3f4f6',
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
};
