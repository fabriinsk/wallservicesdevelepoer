import React, { useEffect } from "react";
import Head from 'next/head';
import { FaCode, FaWhatsapp } from 'react-icons/fa';

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
          <h2 style={styles.designHeader}>Web Design Profissional &gt;</h2>
          <p style={styles.designText}>Criação de sites modernos, responsivos e otimizados para conversão.</p>
        </section>

        <section style={styles.servicesSection}>
          <h2>Serviços</h2>
          <div style={styles.services}>
            <div style={styles.serviceCard}>
              <FaCode style={styles.icon} />
              <h3>Web Sites</h3>
              <p>Desenvolvimento de Landing Pages, Sites Institucionais, Blogs e E-commerces, focados em velocidade, SEO e conversão.</p>
            </div>
            <div style={styles.serviceCard}>
              <FaWhatsapp style={styles.icon} />
              <h3>Consultoria Digital</h3>
              <p>Análise estratégica para estruturar e escalar sua operação no digital.</p>
            </div>
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
  main: {
    padding: '2rem 1rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '3rem',
  },
  designHeader: {
    textAlign: 'center' as const,
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827',
  },
  designText: {
    textAlign: 'center' as const,
    fontSize: '1.25rem',
    color: '#555',
  },
  servicesSection: {
    marginTop: '3rem',
    textAlign: 'center' as const,
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '2rem',
    marginTop: '2rem',
  },
  serviceCard: {
    padding: '1.5rem',
    border: '2px solid #ccc',
    borderRadius: '8px',
    width: '30%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    color: '#111827',
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
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '2rem 1rem',
    backgroundColor: '#f3f4f6',
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
};
