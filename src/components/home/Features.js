import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaChartLine, FaCogs, FaUserFriends } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 100px 0;
  background-color: ${props => props.theme.colors.background};
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeaturesTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.primary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
`;

const features = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Automation",
    description: "Leverage cutting-edge AI to automate your engagement processes and save time."
  },
  {
    icon: <FaChartLine />,
    title: "Advanced Analytics",
    description: "Gain deep insights into your engagement metrics with our powerful analytics tools."
  },
  {
    icon: <FaCogs />,
    title: "Customizable Workflows",
    description: "Create and optimize engagement workflows tailored to your specific needs."
  },
  {
    icon: <FaUserFriends />,
    title: "Multi-Channel Support",
    description: "Engage with your audience across various platforms and channels seamlessly."
  }
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
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <FeaturesSection>
      <FeaturesContainer>
        <FeaturesTitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Powerful Features
        </FeaturesTitle>
        <FeaturesGrid
          as={motion.div}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} variants={itemVariants}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;