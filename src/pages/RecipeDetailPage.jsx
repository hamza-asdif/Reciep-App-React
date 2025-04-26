import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import useRecipes from '../hooks/useRecipes';
import RecipeDetail from '../components/recipe/RecipeDetail';

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { selectedRecipe, getRecipeDetails, status, error } = useRecipes();
  
  useEffect(() => {
    // Fetch recipe details when component mounts or recipeId changes
    if (recipeId) {
      getRecipeDetails(recipeId);
    }
    
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
  }, [recipeId, getRecipeDetails]);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BackButton onClick={handleGoBack}>
        <FaArrowLeft />
        <span>Back</span>
      </BackButton>
      
      {status === 'loading' ? (
        <LoadingContainer>
          <LoadingMessage>Loading recipe details...</LoadingMessage>
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <ErrorMessage>
            Error loading recipe: {error}
          </ErrorMessage>
          <RetryButton onClick={() => getRecipeDetails(recipeId)}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      ) : selectedRecipe ? (
        <RecipeDetail recipe={selectedRecipe} />
      ) : (
        <NotFoundContainer>
          <NotFoundMessage>Recipe not found</NotFoundMessage>
          <RetryButton onClick={() => navigate('/categories')}>
            Browse Categories
          </RetryButton>
        </NotFoundContainer>
      )}
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  width: fit-content;
  margin-bottom: 1.5rem;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
    background-color: var(--color-background);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`;

const LoadingMessage = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: var(--color-error);
  text-align: center;
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
`;

const RetryButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default RecipeDetailPage;
