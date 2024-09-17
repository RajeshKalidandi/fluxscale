import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ToggleButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 60px;
  height: 30px;
  position: relative;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const ToggleThumb = styled(motion.div)`
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  color: ${props => props.theme.colors.background};
  z-index: 1;
`;

const Header = ({ isDark, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: scrolled ? (isDark ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)') : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Nav>
        <Logo to="/">FluxScale</Logo>
        <NavLinks>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/about">About</NavLink></NavItem>
          <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
          <NavItem><NavLink to="/blog">Blog</NavLink></NavItem>
          <NavItem>
            <ToggleButton onClick={toggleDarkMode}>
              <AnimatePresence mode="wait" initial={false}>
                <ToggleThumb
                  key={isDark ? 'dark' : 'light'}
                  initial={{ x: isDark ? 30 : 0 }}
                  animate={{ x: isDark ? 30 : 0 }}
                  exit={{ x: isDark ? 0 : 30 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </AnimatePresence>
              <IconWrapper>
                <FaSun />
              </IconWrapper>
              <IconWrapper>
                <FaMoon />
              </IconWrapper>
            </ToggleButton>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;