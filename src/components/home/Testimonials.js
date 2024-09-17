import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: ${props => props.theme.colors.background};
`;

const TestimonialsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TestimonialsTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.primary};
`;

const TestimonialSlider = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: absolute;
  width: 100%;
  max-width: 600px;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const TestimonialCompany = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

const SliderButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &:focus {
    outline: none;
  }

  ${props => props.left ? 'left: 0;' : 'right: 0;'}
`;

const testimonials = [
  {
    text: "FluxScale has revolutionized our customer engagement strategy. The AI-powered automation has saved us countless hours and improved our response times dramatically.",
    author: "Sarah Johnson",
    company: "TechCorp Inc."
  },
  {
    text: "The analytics provided by FluxScale have given us invaluable insights into our customer behavior. It's been a game-changer for our marketing efforts.",
    author: "Michael Chen",
    company: "DataDrive Solutions"
  },
  {
    text: "I can't imagine running our business without FluxScale now. The customizable workflows have allowed us to tailor our engagement process perfectly to our needs.",
    author: "Emma Rodriguez",
    company: "GrowFast Startups"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const slideVariants = {
    hiddenRight: {
      x: 300,
      opacity: 0,
    },
    hiddenLeft: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </TestimonialsTitle>
        <TestimonialSlider>
          <AnimatePresence initial={false} custom={direction}>
            <TestimonialCard
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
              animate="visible"
              exit="exit"
            >
              <QuoteIcon />
              <TestimonialText>{testimonials[currentIndex].text}</TestimonialText>
              <TestimonialAuthor>{testimonials[currentIndex].author}</TestimonialAuthor>
              <TestimonialCompany>{testimonials[currentIndex].company}</TestimonialCompany>
            </TestimonialCard>
          </AnimatePresence>
          <SliderButton left onClick={handlePrev}>
            <FaChevronLeft />
          </SliderButton>
          <SliderButton onClick={handleNext}>
            <FaChevronRight />
          </SliderButton>
        </TestimonialSlider>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;