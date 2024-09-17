import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const PricingWrapper = styled.section`
  padding: 4rem 0;
`;

const PricingTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PricingCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const PlanFeature = styled.li`
  margin-bottom: 0.5rem;
`;

const pricingData = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['100 automated engagements', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$29.99',
    features: ['1000 automated engagements', 'Advanced analytics', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited engagements', 'Custom analytics', 'Dedicated support'],
  },
];

const Pricing = () => {
  return (
    <PricingWrapper>
      <PricingTitle>Pricing Plans</PricingTitle>
      <PricingGrid>
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.price}</PlanPrice>
            <PlanFeatures>
              {plan.features.map((feature, i) => (
                <PlanFeature key={i}>{feature}</PlanFeature>
              ))}
            </PlanFeatures>
            <Button>Choose Plan</Button>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingWrapper>
  );
};

export default Pricing;