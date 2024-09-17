import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  margin-bottom: 30px;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.colors.text}33;
`;

const Newsletter = styled.form`
  display: flex;
  margin-top: 20px;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.text}33;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
`;

const NewsletterButton = styled(motion.button)`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>FluxScale</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Product</FooterTitle>
          <FooterLink to="/features">Features</FooterLink>
          <FooterLink to="/pricing">Pricing</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/documentation">Documentation</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialIcons>
            <SocialIcon 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
          <Newsletter>
            <NewsletterInput type="email" placeholder="Enter your email" />
            <NewsletterButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </NewsletterButton>
          </Newsletter>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} FluxScale. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;