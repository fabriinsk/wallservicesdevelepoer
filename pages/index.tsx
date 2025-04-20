import React from "react";
import Head from "next/head";
import { FaCode, FaWhatsapp } from "react-icons/fa";

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
          <h2 style={styles.webDesignTitle}>
            <span style={styles.arrowIcon}>&gt;</span> Web Design Profissional
          </h2>

          <p style={styles.webDesignDescription}>
            Criação de sites modernos, responsivos e otimizados para conversão.
          </p>
        </section>

        {/* Serviços */}
        <section style={styles.servicesSection}>
          <h2>Serviços</h2>
          <div style={styles.services}>
            <div style={styles.serviceCard}>
              <FaCode style={styles.icon} />
              <h3>Web Sites</h3>
              <p>
                Desenvolvimento de Landing Pages, Sites Institucionais, Blogs e
                E-commerces, focados em velocidade, SEO e conversão.
              </p>
            </div>
            <div style={styles.serviceCard}>
              <FaWhatsapp style={styles.icon} />
              <h3>Consultoria Digital</h3>
              <p>
                Análise estratégica para estruturar e escalar sua operação no
                digital.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.aboutSection}>
          <h2>Sobre a Equipe</h2>
          <p>
            A nossa equipe é composta por profissionais altamente qualificados,
            especializados em criar soluções inovadoras e eficazes para nossos
            clientes.
          </p>
        </section>

        <section style={styles.priceSection}>
          <h2 style={styles.priceTitle}>Preços</h2>
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

        <section style={styles.faqSection}>
          <h2>Perguntas Frequentes</h2>

          <div style={styles.faqItem}>
            <h3>Como funciona o processo de criação?</h3>
            <p>
              O processo de criação é dividido em etapas claras e transparentes,
              começando com uma consulta inicial para entender as necessidades
              do cliente. Em seguida, desenvolvemos o design e a funcionalidade
              do site com feedback contínuo do cliente até a entrega final.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3>Quais são as formas de pagamento?</h3>
            <p>
              💳 <strong>Cartão de Crédito</strong> – Pagamento integral no
              início do projeto, podendo ser parcelado em até 5x sem juros ou em
              até 12x com juros.
            </p>
            <p>
              🏦 <strong>PIX</strong> – Pagamento em duas etapas: 50% no início
              do projeto e 50% na entrega.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3>Como garantimos a segurança da sua contratação?</h3>
            <p>
              Prezamos pela transparência e segurança em cada projeto. Por isso,
              oferecemos um contrato opcional, que detalha todos os entregáveis,
              prazos e condições, garantindo clareza e compromisso para ambas as
              partes.
            </p>
          </div>
        </section>

        <div style={styles.consultButtonContainer}>
          <a
            href="https://wa.me/+5518996578781"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.consultButton}
          >
            Fale com especialista
          </a>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>
          © {new Date().getFullYear()} WallServices. Todos os direitos
          reservados.
        </p>
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
  main: {
    padding: "2rem 1rem",
    maxWidth: "960px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "3rem",
  },
  servicesSection: {
    marginTop: "3rem",
    textAlign: "center" as const,
  },
  services: {
    display: "flex",
    justifyContent: "space-around",
    gap: "2rem",
    marginTop: "2rem",
  },
  serviceCard: {
    padding: "1.5rem",
    border: "2px solid #ccc",
    borderRadius: "8px",
    width: "30%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  icon: {
    fontSize: "3rem",
    color: "#111827",
  },
  aboutSection: {
    marginTop: "3rem",
    padding: "2rem",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
  },
  priceSection: {
    marginTop: "3rem",
  },
  priceTitle: {
    textAlign: "center" as const, // Centralizando o título "Preços"
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  priceTable: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "2rem",
  },
  pricePlan: {
    flex: 1,
    marginRight: "1rem",
    textAlign: "center" as const,
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  consultButtonContainer: {
    textAlign: "center" as const,
    marginTop: "3rem",
  },
  consultButton: {
    display: "inline-block",
    padding: "0.8rem 1.5rem",
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  footer: {
    textAlign: "center" as const,
    padding: "2rem 1rem",
    backgroundColor: "#f3f4f6",
    marginTop: "2rem",
    fontSize: "0.9rem",
  },
  faqSection: {
    marginTop: "3rem",
    padding: "2rem",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
  },
  faqItem: {
    marginBottom: "1.5rem",
  },
  arrowIcon: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginRight: "0.5rem",
  },
  webDesignTitle: {
    textAlign: "center" as const,
    fontSize: "2rem",
    fontWeight: "bold",
  },
  webDesignDescription: {
    textAlign: "center" as const,
    fontSize: "1.2rem",
    marginTop: "1rem",
  },
};
