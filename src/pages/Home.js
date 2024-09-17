import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;