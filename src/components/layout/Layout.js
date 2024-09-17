import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: calc(100vh - 120px); // Adjust based on header and footer height
  padding-top: 80px; // Account for fixed header
`;

const Layout = ({ children, isDark, toggleDarkMode }) => {
  return (
    <>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;