import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const LoginWrapper = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled(motion.h1)`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.text}33;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Here you would typically send a request to your backend API
    console.log('Login attempt', { email, password });
    // Reset form
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <>
      <SEO 
        title="Login to FluxScale"
        description="Access your FluxScale account to manage your customer engagement strategy."
        canonicalUrl="https://www.fluxscale.com/login"
        ogImage="https://www.fluxscale.com/login-og-image.jpg"
      />
      <LoginWrapper>
        <LoginTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Login to FluxScale
        </LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </SubmitButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginForm>
        <RegisterLink>
          Don't have an account? <Link to="/register">Register here</Link>
        </RegisterLink>
      </LoginWrapper>
    </>
  );
};

export default Login;