import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaComments, FaChartLine, FaBell } from 'react-icons/fa';
import SEO from '../components/SEO';

const DashboardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const DashboardTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const MetricCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MetricTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;

const MetricValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const RecentActivities = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.text}22;
  &:last-child {
    border-bottom: none;
  }
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const ActionButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Dashboard = () => {
  return (
    <>
      <SEO 
        title="FluxScale Dashboard - Your Engagement Metrics at a Glance"
        description="View your customer engagement metrics, recent activities, and access key features from your FluxScale dashboard."
        canonicalUrl="https://www.fluxscale.com/dashboard"
        ogImage="https://www.fluxscale.com/dashboard-og-image.jpg"
      />
      <DashboardWrapper>
        <DashboardTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, John!
        </DashboardTitle>
        <DashboardGrid>
          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MetricTitle><FaUsers /> Active Users</MetricTitle>
            <MetricValue>1,234</MetricValue>
          </MetricCard>
          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MetricTitle><FaComments /> Conversations</MetricTitle>
            <MetricValue>5,678</MetricValue>
          </MetricCard>
          <MetricCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MetricTitle><FaChartLine /> Engagement Rate</MetricTitle>
            <MetricValue>76%</MetricValue>
          </MetricCard>
        </DashboardGrid>
        <RecentActivities>
          <h2><FaBell /> Recent Activities</h2>
          <ActivityList>
            <ActivityItem>New user sign up: Emily Johnson</ActivityItem>
            <ActivityItem>Campaign "Summer Sale" started</ActivityItem>
            <ActivityItem>100 new messages received in the last hour</ActivityItem>
            <ActivityItem>Engagement rate increased by 5% this week</ActivityItem>
          </ActivityList>
        </RecentActivities>
        <QuickActions>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create New Campaign
          </ActionButton>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Analytics
          </ActionButton>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Manage Users
          </ActionButton>
        </QuickActions>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;