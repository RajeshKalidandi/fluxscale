import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Button from '../common/Button';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const HeroWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  overflow: hidden;
  position: relative;
`;

const HeroContent = styled(motion.div)`
  width: 50%;
  z-index: 2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const HeroVisual = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const SocialIcon = styled(motion.div)`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Hero = () => {
  const controls = useAnimation();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 }
    });
  }, [controls]);

  return (
    <HeroWrapper>
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#0077FF",
              },
              links: {
                color: "#0077FF",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesContainer>
      <HeroContent initial={{ opacity: 0, y: 20 }} animate={controls}>
        <HeroTitle>
          Empowering the Future of Automated Engagement
        </HeroTitle>
        <HeroSubtitle>
          Scale your engagement with cutting-edge AI technology
        </HeroSubtitle>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </Button>
      </HeroContent>
      <HeroVisual>
        <SocialIcon 
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon 
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiX />
        </SocialIcon>
        <SocialIcon 
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon 
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedinIn />
        </SocialIcon>
      </HeroVisual>
    </HeroWrapper>
  );
};

export default Hero;