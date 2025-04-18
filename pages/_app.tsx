import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Certifique-se de que o arquivo globals.css está na pasta 'styles'

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>WallServices | Web Design & Software</title>
        <meta name="description" content="Serviços profissionais de web design e desenvolvimento de software." />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
