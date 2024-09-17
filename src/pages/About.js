import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
`;

const AboutTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const AboutContent = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const AboutSection = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About FluxScale
      </AboutTitle>
      <AboutContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AboutSection>
          <SectionTitle>Our Mission</SectionTitle>
          <p>
            At FluxScale, we're on a mission to revolutionize automated engagement. We believe in empowering businesses with cutting-edge AI technology to create meaningful connections with their audience at scale.
          </p>
        </AboutSection>
        <AboutSection>
          <SectionTitle>Our Story</SectionTitle>
          <p>
            Founded in 2023, FluxScale emerged from a vision to bridge the gap between human-like interaction and automation. Our team of passionate technologists and marketers came together to create a platform that not only scales engagement but does so with intelligence and empathy.
          </p>
        </AboutSection>
        <AboutSection>
          <SectionTitle>Our Technology</SectionTitle>
          <p>
            FluxScale leverages state-of-the-art AI and machine learning algorithms to understand, predict, and respond to user behavior. Our platform continuously learns and adapts, ensuring that each interaction is more personalized and effective than the last.
          </p>
        </AboutSection>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;