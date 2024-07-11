import React from 'react';
import Portfolio from '../components/Portfolio';
import Layout from '../components/Layout';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="This is the homepage of my portfolio website."
        />
      </Head>
      <Portfolio />
    </Layout>
  );
};

export default HomePage;
