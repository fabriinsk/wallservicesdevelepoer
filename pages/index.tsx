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

      <header className="header">
        <h1>WallServices</h1>
        <p>Web Design & Desenvolvimento de Software</p>
        <a
          href="https://wa.me/+5518996578781"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappButton"
        >
          <FaWhatsapp /> Fale comigo
        </a>
      </header>

      <main className="main">
        <section className="section">
          <h2>
            <FaPaintBrush /> Web Design Profissional
          </h2>
          <p>Criação de sites modernos, responsivos e otimizados para conversão.</p>
        </section>

        <section className="section">
          <h2>
            <FaCode /> Desenvolvimento de Software
          </h2>
          <p>Soluções personalizadas em sistemas web e aplicações sob medida.</p>
        </section>

        <section className="section">
          <h2>Portfólio</h2>
          <div className="projects">
            <img src="/projeto1.jpg" alt="Projeto 1" />
            <img src="/projeto2.jpg" alt="Projeto 2" />
            <img src="/projeto3.jpg" alt="Projeto 3" />
            <img src="/projeto4.jpg" alt="Projeto 4" />
          </div>
        </section>

        <section className="pricingSection">
          <h2>Tabela de Preços</h2>
          <div className="pricingTable">
            <div className="plan">
              <h3>Plano Plus</h3>
              <p>✅ Site moderno</p>
              <p>✅ Responsivo</p>
              <p>✅ Otimização básica</p>
              <p><strong>R$ 499</strong></p>
            </div>
            <div className="planVip">
              <h3>Plano VIP</h3>
              <p>✨ Tudo do Plano Plus</p>
              <p>✨ Painel de administração</p>
              <p>✨ Suporte premium</p>
              <p><strong>R$ 899</strong></p>
            </div>
          </div>
          <a
            href="https://wa.me/+5518996578781"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappButton"
          >
            <FaWhatsapp /> Consulte seu orçamento
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} WallServices. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
