import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const BlogPostTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const BlogPostMeta = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 30px;
`;

const BlogPostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const BlogPostContent = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};

  p {
    margin-bottom: 20px;
  }
`;

// This would typically come from an API or CMS
const blogPosts = {
  1: {
    title: "The Future of AI in Customer Engagement",
    date: "May 15, 2023",
    author: "Jane Doe",
    image: "https://source.unsplash.com/random/800x600?ai",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the way businesses interact with their customers. As we look to the future, it's clear that AI will play an increasingly central role in customer engagement strategies.</p>
      
      <p>One of the most significant impacts of AI on customer engagement is in the realm of personalization. AI algorithms can analyze vast amounts of customer data to provide highly tailored experiences. From personalized product recommendations to customized email marketing campaigns, AI is enabling businesses to connect with their customers on a more individual level than ever before.</p>
      
      <p>Chatbots and virtual assistants are another area where AI is making huge strides. These AI-powered tools can handle a wide range of customer inquiries 24/7, providing instant responses and freeing up human customer service representatives to handle more complex issues. As natural language processing technology continues to improve, we can expect these AI assistants to become even more sophisticated and capable of handling increasingly nuanced interactions.</p>
      
      <p>Predictive analytics is yet another exciting application of AI in customer engagement. By analyzing patterns in customer behavior, AI can predict future actions and preferences, allowing businesses to proactively meet customer needs. This could involve anything from restocking a customer's favorite product before they run out, to offering support for a potential issue before the customer even realizes there's a problem.</p>
      
      <p>As we move forward, the key to successful AI implementation in customer engagement will be striking the right balance between automation and human touch. While AI can handle many tasks more efficiently than humans, there will always be situations that require human empathy and problem-solving skills. The businesses that thrive will be those that use AI to augment and enhance human capabilities, rather than replace them entirely.</p>
      
      <p>In conclusion, the future of AI in customer engagement is bright and full of potential. As the technology continues to evolve, we can look forward to more personalized, efficient, and proactive customer experiences. Businesses that embrace these AI-driven innovations will be well-positioned to build stronger, more lasting relationships with their customers in the years to come.</p>
    `
  },
  // Add more blog posts here...
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <SEO 
        title={`${post.title} - FluxScale Blog`}
        description={`Read about ${post.title} and learn how AI is shaping the future of customer engagement.`}
        canonicalUrl={`https://www.fluxscale.com/blog/${id}`}
        ogImage={post.image}
      />
      <BlogPostWrapper>
        <BlogPostTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </BlogPostTitle>
        <BlogPostMeta>
          Published on {post.date} by {post.author}
        </BlogPostMeta>
        <BlogPostImage src={post.image} alt={post.title} />
        <BlogPostContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </BlogPostWrapper>
    </>
  );
};

export default BlogPost;