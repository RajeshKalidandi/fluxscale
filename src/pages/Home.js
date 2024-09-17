import React from 'react';
import styled from 'styled-components';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';

const HomeWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Features />
      <Pricing />
    </HomeWrapper>
  );
};

export default Home;