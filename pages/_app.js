import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;