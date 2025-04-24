import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUtensils, FaHeart, FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <PageTitle>About TastyRecipes</PageTitle>
        <PageDescription>
          Discover our story, mission, and the team behind your favorite recipe app.
        </PageDescription>
      </PageHeader>
      
      <SectionContainer>
        <Section>
          <SectionTitle>Our Story</SectionTitle>
          <SectionContent>
            <p>
              TastyRecipes was born out of a passion for food and a desire to make cooking accessible to everyone. 
              What started as a simple recipe collection has grown into a comprehensive platform that connects food 
              lovers around the world.
            </p>
            <p>
              Founded in 2025, our mission is to inspire people to cook delicious meals at home, explore new cuisines, 
              and share their culinary experiences with others. We believe that good food brings people together and 
              creates lasting memories.
            </p>
          </SectionContent>
        </Section>
        
        <ValuesContainer>
          <ValueCard>
            <ValueIcon>
              <FaUtensils />
            </ValueIcon>
            <ValueTitle>Quality Recipes</ValueTitle>
            <ValueDescription>
              We curate and test recipes to ensure they're delicious, reliable, and easy to follow.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>
              <FaHeart />
            </ValueIcon>
            <ValueTitle>Passion for Food</ValueTitle>
            <ValueDescription>
              We're passionate about food and believe cooking should be enjoyable and accessible to everyone.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>
              <FaUsers />
            </ValueIcon>
            <ValueTitle>Community</ValueTitle>
            <ValueDescription>
              We foster a community where food lovers can share, learn, and grow together.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>
              <FaGlobeAmericas />
            </ValueIcon>
            <ValueTitle>Global Cuisine</ValueTitle>
            <ValueDescription>
              We celebrate diverse culinary traditions and make global recipes accessible to all.
            </ValueDescription>
          </ValueCard>
        </ValuesContainer>
        
        <Section>
          <SectionTitle>Our Team</SectionTitle>
          <SectionContent>
            <p>
              Behind TastyRecipes is a dedicated team of food enthusiasts, developers, and designers who are committed 
              to creating the best recipe experience for our users. Our diverse backgrounds and shared love for food 
              drive us to continuously improve and innovate.
            </p>
            <p>
              From our recipe curators who test and perfect each dish, to our developers who build new features, 
              everyone at TastyRecipes is passionate about helping you discover and enjoy amazing food.
            </p>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>Our Technology</SectionTitle>
          <SectionContent>
            <p>
              TastyRecipes is built using modern web technologies to provide a seamless and responsive experience 
              across all devices. We use React for our frontend, with Redux for state management, and styled-components 
              for our beautiful UI.
            </p>
            <p>
              We're constantly working to improve our platform with new features and optimizations to make your 
              recipe discovery and cooking experience even better.
            </p>
          </SectionContent>
        </Section>
      </SectionContainer>
      
      <CTAContainer>
        <CTATitle>Ready to start cooking?</CTATitle>
        <CTADescription>
          Join our community of food lovers and discover thousands of delicious recipes.
        </CTADescription>
        <CTAButtons>
          <PrimaryButton to="/categories">Explore Recipes</PrimaryButton>
          <SecondaryButton to="/register">Create Account</SecondaryButton>
        </CTAButtons>
      </CTAContainer>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
`;

const Section = styled.section``;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--color-primary);
    border-radius: 3px;
  }
`;

const SectionContent = styled.div`
  color: var(--color-text);
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.6;
`;

const CTAContainer = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-md);
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

export default AboutPage;
