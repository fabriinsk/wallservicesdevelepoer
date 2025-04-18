import React, { useEffect } from "react";
import Head from 'next/head';
import { FaCode, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    // Verifica se o código está sendo executado no cliente (navegador)
    if (typeof window !== "undefined") {
      const elements = document.querySelectorAll('.animated-border');
      elements.forEach((el) => {
        el.classList.add('start-border-animation');
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>WallServices | Web Design & Software</title>
        <meta name="description" content="Serviços profissionais de web design e desenvolvimento de software." />
        <style>{`
          @keyframes borderAnimation {
            0% {
              border-color: transparent;
              box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            }
            100% {
              border-color: #111827;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            }
          }

          .animated-border {
            border: 2px solid transparent;
            animation: borderAnimation 1s ease-in-out forwards;
          }

          .start-border-animation {
            animation-play-state: running;
          }
        `}</style>
      </Head>

      <header style={styles.header}>
        <h1>WallServices</h1>
        <p>Web Design & Desenvolvimento de Software</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 className="animated-border" style={styles.designHeader}>Web Design Profissional &gt;</h2>
          <p className="animated-border" style={styles.designText}>Criação de sites modernos, responsivos e otimizados para conversão.</p>
        </section>

        <section style={styles.servicesSection}>
          <h2>Serviços</h2>
          <div style={styles.services}>
            <div className="animated-border" style={styles.serviceCard}>
              <FaCode style={styles.icon} />
              <h3>Web Sites</h3>
              <p>Desenvolvimento de Landing Pages, Sites Institucionais, Blogs e E-commerces, focados em velocidade, SEO e conversão.</p>
            </div>
            <div className="animated-border" style={styles.serviceCard}>
              <FaWhatsapp style={styles.icon} />
              <h3>Consultoria Digital</h3>
              <p>Análise estratégica para estruturar e escalar sua operação no digital.</p>
            </div>
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
  footer: {
    textAlign: 'center' as const,
    padding: '2rem 1rem',
    backgroundColor: '#f3f4f6',
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
};
