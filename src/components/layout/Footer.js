import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLogo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo to="/">FluxScale</FooterLogo>
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;