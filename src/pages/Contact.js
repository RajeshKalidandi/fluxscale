import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEO from '../components/SEO';

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const ContactTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
  text-align: center;
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ContactForm = styled.form`
  flex: 2;
  min-width: 300px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 15px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.text}33;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
`;

const SubmitButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with FluxScale"
        description="Have questions about FluxScale? Reach out to our team for personalized assistance and learn how we can help transform your customer engagement strategy."
        canonicalUrl="https://www.fluxscale.com/contact"
        ogImage="https://www.fluxscale.com/contact-og-image.jpg"
      />
      <ContactWrapper>
        <ContactTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </ContactTitle>
        <ContactContent>
          <ContactInfo>
            <InfoItem>
              <InfoIcon><FaEnvelope /></InfoIcon>
              info@fluxscale.com
            </InfoItem>
            <InfoItem>
              <InfoIcon><FaPhone /></InfoIcon>
              +1 (555) 123-4567
            </InfoItem>
            <InfoItem>
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              123 Tech Street, San Francisco, CA 94105
            </InfoItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                {...register("name", { required: "Name is required" })} 
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })} 
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea 
                id="message" 
                {...register("message", { required: "Message is required" })} 
              />
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </FormGroup>
            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactWrapper>
    </>
  );
};

export default Contact;