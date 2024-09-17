import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
`;

const BlogTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const BlogList = styled.div`
  display: grid;
  gap: 2rem;
`;

const BlogPost = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogPostTitle = styled(Link)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
`;

const BlogPostExcerpt = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Customer Engagement',
    excerpt: 'Explore how AI is revolutionizing the way businesses interact with their customers...'
  },
  {
    id: 2,
    title: 'Maximizing ROI with Automated Marketing',
    excerpt: 'Learn how to leverage automation to boost your marketing efforts and increase ROI...'
  },
  {
    id: 3,
    title: 'Building Customer Loyalty in the Digital Age',
    excerpt: 'Discover strategies for creating lasting customer relationships in an increasingly digital world...'
  }
];

const Blog = () => {
  return (
    <BlogWrapper>
      <BlogTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        FluxScale Blog
      </BlogTitle>
      <BlogList>
        {blogPosts.map((post, index) => (
          <BlogPost
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogPostTitle to={`/blog/${post.id}`}>{post.title}</BlogPostTitle>
            <BlogPostExcerpt>{post.excerpt}</BlogPostExcerpt>
          </BlogPost>
        ))}
      </BlogList>
    </BlogWrapper>
  );
};

export default Blog;