import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from '../components/recipe/RecipeCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { recipes, searchByCategory, status, error } = useRecipes();
  const [sortOrder, setSortOrder] = useState('name');
  
  useEffect(() => {
    // Fetch recipes by category when component mounts or categoryName changes
    if (categoryName) {
      searchByCategory(categoryName);
    }
    
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
  }, [categoryName, searchByCategory]);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  
  // Sort recipes based on sortOrder
  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortOrder === 'name') {
      return a.strMeal.localeCompare(b.strMeal);
    } else if (sortOrder === 'id') {
      return parseInt(a.idMeal) - parseInt(b.idMeal);
    }
    return 0;
  });
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <BackButton onClick={handleGoBack}>
          <FaArrowLeft />
          <span>Back</span>
        </BackButton>
        
        <PageTitle>{categoryName} Recipes</PageTitle>
        
        <FilterContainer>
          <FilterButton>
            <FaFilter />
            <span>Filter</span>
          </FilterButton>
          
          <SortContainer>
            <SortIcon>
              <FaSortAmountDown />
            </SortIcon>
            <SortSelect value={sortOrder} onChange={handleSortChange}>
              <option value="name">Sort by Name</option>
              <option value="id">Sort by ID</option>
            </SortSelect>
          </SortContainer>
        </FilterContainer>
      </PageHeader>
      
      {status === 'loading' ? (
        <LoadingContainer>
          <LoadingMessage>Loading {categoryName} recipes...</LoadingMessage>
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <ErrorMessage>
            Error loading recipes: {error}
          </ErrorMessage>
          <RetryButton onClick={() => searchByCategory(categoryName)}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      ) : sortedRecipes.length > 0 ? (
        <>
          <RecipeCount>{sortedRecipes.length} recipes found</RecipeCount>
          <RecipeGrid>
            {sortedRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} index={index} />
            ))}
          </RecipeGrid>
        </>
      ) : (
        <NoDataContainer>
          <NoDataMessage>No recipes found in {categoryName} category</NoDataMessage>
          <RetryButton onClick={() => navigate('/categories')}>
            Browse Categories
          </RetryButton>
        </NoDataContainer>
      )}
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
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
  margin-bottom: 1rem;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
    background-color: var(--color-background);
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SortIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  color: var(--color-text-light);
  pointer-events: none;
`;

const SortSelect = styled.select`
  appearance: none;
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.25rem 0.75rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
  
  &:focus {
    outline: none;
  }
`;

const RecipeCount = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
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
  padding: 2rem;
  text-align: center;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: var(--color-error);
`;

const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  padding: 2rem;
  text-align: center;
`;

const NoDataMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
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

export default CategoryPage;
