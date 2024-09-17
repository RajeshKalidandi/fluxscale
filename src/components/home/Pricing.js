import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingSection = styled.section`
  padding: 100px 0;
  background-color: ${props => props.theme.colors.background};
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PricingTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.primary};
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
`;

const PricingCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  ${props => props.popular && `
    border: 2px solid ${props.theme.colors.secondary};
    transform: scale(1.05);
  `}

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 20px;
  right: -35px;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  padding: 8px 40px;
  font-size: 0.9rem;
  transform: rotate(45deg);
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text};
`;

const PlanPrice = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.text};

  svg {
    color: ${props => props.theme.colors.secondary};
    margin-right: 10px;
  }
`;

const PlanButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "1,000 monthly active users",
      "Basic analytics",
      "24/7 support",
      "1 team member"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    features: [
      "10,000 monthly active users",
      "Advanced analytics",
      "24/7 priority support",
      "5 team members",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited monthly active users",
      "Full analytics suite",
      "24/7 VIP support",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <PricingSection>
      <PricingContainer>
        <PricingTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Plan
        </PricingTitle>
        <PricingGrid>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              popular={plan.popular}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanFeatures>
                {plan.features.map((feature, i) => (
                  <PlanFeature key={i}>
                    <FaCheck /> {feature}
                  </PlanFeature>
                ))}
              </PlanFeatures>
              <PlanButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </PlanButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;