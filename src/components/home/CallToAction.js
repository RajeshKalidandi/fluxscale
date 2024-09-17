import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTASection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 30px;
  color: white;
`;

const CTADescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background-color: white;
  color: ${props => props.theme.colors.primary};
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const CallToAction = () => {
  return (
    <CTASection>
      <CTAContainer>
        <CTATitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Revolutionize Your Customer Engagement?
        </CTATitle>
        <CTADescription
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of businesses already using FluxScale to automate, analyze, and optimize their customer interactions.
        </CTADescription>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started Now
        </CTAButton>
      </CTAContainer>
      <FloatingShape
        style={{ top: '10%', left: '5%', width: 60, height: 60 }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <FloatingShape
        style={{ top: '70%', right: '10%', width: 80, height: 80 }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </CTASection>
  );
};

export default CallToAction;