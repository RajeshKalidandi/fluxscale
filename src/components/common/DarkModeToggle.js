import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToggleWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
`;

const IconWrapper = styled.span`
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  z-index: 1;
`;

const ToggleCircle = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  height: 3rem;
  left: 0.5rem;
  position: absolute;
  top: 0.5rem;
  width: 3rem;
`;

const DarkModeToggle = ({ isDark, toggleDarkMode }) => {
  return (
    <ToggleWrapper onClick={toggleDarkMode}>
      <IconWrapper>🌞</IconWrapper>
      <IconWrapper>🌙</IconWrapper>
      <ToggleCircle
        animate={{
          x: isDark ? '4rem' : '0rem',
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      />
    </ToggleWrapper>
  );
};

export default DarkModeToggle;