import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesWrapper = styled.section`
  padding: 4rem 0;
  background-color: ${props => props.theme.colors.background};
`;

const FeaturesTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 5%;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

const featureData = [
  {
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge AI to automate your engagement processes.',
    icon: '🤖',
  },
  {
    title: 'Real-time Analytics',
    description: 'Get instant insights with our powerful analytics dashboard.',
    icon: '📊',
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing tools and workflows.',
    icon: '🔗',
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <FeaturesWrapper ref={ref}>
      <FeaturesTitle
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Our Features
      </FeaturesTitle>
      <FeaturesGrid
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {featureData.map((feature, index) => (
          <FeatureCard key={index} variants={itemVariants}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesWrapper>
  );
};

export default Features;