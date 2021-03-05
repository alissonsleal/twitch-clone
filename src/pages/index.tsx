import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>ReactJS Boilerplate</h1>
      <p>A ReactJS + Next.js structure boilerplate</p>
    </Container>
  );
};

export default Home;
