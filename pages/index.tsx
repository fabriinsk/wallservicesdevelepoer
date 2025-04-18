import React from 'react';
import Head from 'next/head';
import { FaLaptopCode, FaPaintBrush, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>WallServices | Web Design & Software</title>
      </Head>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transformamos ideias em soluções digitais</h1>
          <p className="text-xl mb-8">Web Design e Desenvolvimento de Software sob medida</p>
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg">
            Fale conosco no WhatsApp
          </a>
        </section>

        {/* Serviços */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <FaPaintBrush className="text-4xl mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Web Design Profissional</h3>
              <p>Sites bonitos, funcionais e responsivos para sua presença digital.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <FaLaptopCode className="text-4xl mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Sistemas Personalizados</h3>
              <p>Desenvolvimento de sistemas e soluções sob medida para o seu negócio.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <FaLaptopCode className="text-4xl mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Otimização e SEO</h3>
              <p>Seu site rápido, seguro e bem posicionado no Google.</p>
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Projetos Realizados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Exemplos de projetos */}
              <div className="bg-white p-4 shadow rounded-xl">
                <img src="/projeto1.jpg" alt="Projeto 1" className="w-full rounded-md mb-4" />
                <h3 className="font-semibold text-lg">Site para Clínica Médica</h3>
                <p className="text-sm text-gray-600">Design moderno e agendamento online integrado.</p>
              </div>
              <div className="bg-white p-4 shadow rounded-xl">
                <img src="/projeto2.jpg" alt="Projeto 2" className="w-full rounded-md mb-4" />
                <h3 className="font-semibold text-lg">Sistema de Gestão de Tarefas</h3>
                <p className="text-sm text-gray-600">Dashboard intuitivo e funcionalidade completa.</p>
              </div>
              <div className="bg-white p-4 shadow rounded-xl">
                <img src="/projeto3.jpg" alt="Projeto 3" className="w-full rounded-md mb-4" />
                <h3 className="font-semibold text-lg">Landing Page para Evento</h3>
                <p className="text-sm text-gray-600">Alta conversão com foco em performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">O que dizem nossos clientes</h2>
          <div className="space-y-8">
            <blockquote className="italic text-gray-700">"Profissionalismo e dedicação! Meu site ficou incrível e muito rápido."<br /><span className="font-bold">– João L.</span></blockquote>
            <blockquote className="italic text-gray-700">"O sistema que eles fizeram facilitou muito a gestão da minha empresa."<br /><span className="font-bold">– Carla M.</span></blockquote>
          </div>
        </section>

        {/* Contato / Footer */}
        <footer className="bg-gray-900 text-white py-10 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} WallServices - Todos os direitos reservados.</p>
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300">
            <FaWhatsapp /> Fale conosco no WhatsApp
          </a>
        </footer>
      </main>
    </>
  );
}
