import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

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

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavItems = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileMenuButton = styled(ToggleButton)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: ${props => props.theme.colors.background};
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobileNavItem = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Header = ({ isDark, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <HeaderWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderContainer>
        <Logo to="/">FluxScale</Logo>
        <NavItems>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <NavLink to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                {item.name}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <ToggleButton onClick={toggleDarkMode}>
              {isDark ? <FaSun /> : <FaMoon />}
            </ToggleButton>
          </NavItem>
        </NavItems>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContainer>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: 'tween' }}
          >
            {navItems.map((item) => (
              <MobileNavItem key={item.name}>
                <NavLink to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  {item.name}
                </NavLink>
              </MobileNavItem>
            ))}
            <MobileNavItem>
              <ToggleButton onClick={toggleDarkMode}>
                {isDark ? <FaSun /> : <FaMoon />}
              </ToggleButton>
            </MobileNavItem>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
};

export default Header;