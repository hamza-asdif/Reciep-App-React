import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaUtensils } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ContentContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorMessage>
          Oops! The page you're looking for doesn't exist or has been moved.
        </ErrorMessage>
        
        <ButtonsContainer>
          <PrimaryButton to="/">
            <FaHome />
            <span>Back to Home</span>
          </PrimaryButton>
          
          <SecondaryButton to="/categories">
            <FaUtensils />
            <span>Browse Recipes</span>
          </SecondaryButton>
        </ButtonsContainer>
        
        <SuggestionContainer>
          <SuggestionTitle>Looking for something specific?</SuggestionTitle>
          <SuggestionList>
            <SuggestionItem to="/categories">Popular Categories</SuggestionItem>
            <SuggestionItem to="/favorites">Your Favorites</SuggestionItem>
            <SuggestionItem to="/meal-planner">Meal Planner</SuggestionItem>
            <SuggestionItem to="/explore">Explore Recipes</SuggestionItem>
          </SuggestionList>
        </SuggestionContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 300px);
  padding: 2rem 0;
`;

const ContentContainer = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 3rem 2rem;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const SecondaryButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

const SuggestionContainer = styled.div`
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
`;

const SuggestionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const SuggestionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SuggestionItem = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default NotFoundPage;
