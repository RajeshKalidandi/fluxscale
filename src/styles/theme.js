const commonTheme = {
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

const lightTheme = {
  ...commonTheme,
  colors: {
    primary: '#0077FF',
    secondary: '#00FF85',
    accent: '#7F00FF',
    background: '#F5F5F5',
    text: '#333333',
    cardBackground: '#FFFFFF',
  },
};

const darkTheme = {
  ...commonTheme,
  colors: {
    primary: '#00A3FF',
    secondary: '#00FF9D',
    accent: '#9D00FF',
    background: '#1A1A1A',
    text: '#F5F5F5',
    cardBackground: '#2A2A2A',
  },
};

export { lightTheme, darkTheme };