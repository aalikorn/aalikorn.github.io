import React from 'react';
import Portfolio from '../components/Portfolio';
import Layout from '../components/Layout';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Daria Nikolaeva</title>
        <meta name="description" content="Dasha's portfolio :)" />
      </Head>
      <Portfolio />
    </Layout>
  );
};

export default HomePage;
