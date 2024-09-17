import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const BlogTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 50px;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const BlogPost = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogPostTitle = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
`;

const ReadMoreLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Customer Engagement",
    excerpt: "Explore how artificial intelligence is revolutionizing the way businesses interact with their customers...",
    image: "https://source.unsplash.com/random/800x600?ai",
  },
  {
    id: 2,
    title: "5 Strategies to Improve Customer Retention",
    excerpt: "Learn effective techniques to keep your customers coming back and boost your business growth...",
    image: "https://source.unsplash.com/random/800x600?customer",
  },
  {
    id: 3,
    title: "Automating Your Customer Support: A Step-by-Step Guide",
    excerpt: "Discover how to implement automation in your customer support processes for increased efficiency...",
    image: "https://source.unsplash.com/random/800x600?automation",
  },
  {
    id: 4,
    title: "The Role of Data Analytics in Modern Marketing",
    excerpt: "Uncover the power of data-driven decision making in crafting effective marketing strategies...",
    image: "https://source.unsplash.com/random/800x600?data",
  },
  {
    id: 5,
    title: "Building a Seamless Omnichannel Experience",
    excerpt: "Learn how to create a cohesive customer experience across all touchpoints and platforms...",
    image: "https://source.unsplash.com/random/800x600?experience",
  },
  {
    id: 6,
    title: "The Psychology of Customer Engagement",
    excerpt: "Dive into the psychological principles that drive customer behavior and loyalty...",
    image: "https://source.unsplash.com/random/800x600?psychology",
  },
];

const Blog = () => {
  return (
    <>
      <SEO 
        title="FluxScale Blog - Insights on Customer Engagement and AI"
        description="Explore the latest trends and strategies in customer engagement, AI automation, and data-driven marketing on the FluxScale blog."
        canonicalUrl="https://www.fluxscale.com/blog"
        ogImage="https://www.fluxscale.com/blog-og-image.jpg"
      />
      <BlogWrapper>
        <BlogTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FluxScale Blog
        </BlogTitle>
        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogPost
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogContent>
                <BlogPostTitle>{post.title}</BlogPostTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreLink to={`/blog/${post.id}`}>Read More</ReadMoreLink>
              </BlogContent>
            </BlogPost>
          ))}
        </BlogGrid>
      </BlogWrapper>
    </>
  );
};

export default Blog;