import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import SEO from '../components/SEO';

const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const AboutSection = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
  text-align: center;
`;

const SectionContent = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
`;

const MissionSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

const MissionCard = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MissionIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const TeamMember = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  font-style: italic;
`;

const About = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "FluxScale",
    "url": "https://www.fluxscale.com",
    "logo": "https://www.fluxscale.com/logo.png",
    "description": "FluxScale revolutionizes customer engagement through AI-powered automation, empowering businesses to scale their engagement efforts without losing the personal touch.",
    "founder": [
      {
        "@type": "Person",
        "name": "Jane Doe"
      },
      {
        "@type": "Person",
        "name": "John Smith"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Alice Johnson",
        "jobTitle": "Head of Product"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="About Us - Revolutionizing Customer Engagement"
        description="Learn about FluxScale's mission to transform customer engagement through AI-powered automation. Meet our team of industry experts dedicated to empowering businesses worldwide."
        canonicalUrl="https://www.fluxscale.com/about"
        ogImage="https://www.fluxscale.com/about-og-image.jpg"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <AboutWrapper>
        <AboutSection>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </SectionTitle>
          <SectionContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>Revolutionizing Customer Engagement with AI-Powered Automation</h1>
            <p>FluxScale was founded in 2023 with a vision to revolutionize customer engagement through AI-powered automation. Our team of industry experts and tech enthusiasts came together to create a platform that empowers businesses to scale their engagement efforts without losing the personal touch.</p>
            <p>Since our inception, we've been dedicated to pushing the boundaries of what's possible in customer interaction, constantly innovating and refining our technology to meet the evolving needs of businesses worldwide.</p>
          </SectionContent>
        </AboutSection>

        {/* ... (keep the rest of the component as it was) */}

      </AboutWrapper>
    </>
  );
};

export default About;