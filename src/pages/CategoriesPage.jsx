import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useRecipes from '../hooks/useRecipes';

const CategoriesPage = () => {
  const { categories, loadCategories, status, error } = useRecipes();
  
  useEffect(() => {
    // Load categories when component mounts
    if (categories.length === 0) {
      loadCategories();
    }
    
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
  }, [categories.length, loadCategories]);
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <PageTitle>Recipe Categories</PageTitle>
        <PageDescription>
          Browse our collection of recipes by category. Click on a category to see all recipes in that category.
        </PageDescription>
      </PageHeader>
      
      {status === 'loading' ? (
        <LoadingContainer>
          <LoadingMessage>Loading categories...</LoadingMessage>
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <ErrorMessage>
            Error loading categories: {error}
          </ErrorMessage>
          <RetryButton onClick={loadCategories}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      ) : categories.length > 0 ? (
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.idCategory || category.strCategory}
              to={`/category/${category.strCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <CategoryImageContainer>
                <CategoryImage src={category.strCategoryThumb} alt={category.strCategory} />
              </CategoryImageContainer>
              <CategoryContent>
                <CategoryName>{category.strCategory}</CategoryName>
                <CategoryDescription>
                  {category.strCategoryDescription
                    ? `${category.strCategoryDescription.substring(0, 100)}...`
                    : `Explore our collection of ${category.strCategory} recipes.`}
                </CategoryDescription>
                <ViewCategoryButton>View Recipes</ViewCategoryButton>
              </CategoryContent>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      ) : (
        <NoDataContainer>
          <NoDataMessage>No categories found</NoDataMessage>
          <RetryButton onClick={loadCategories}>
            Refresh
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
  margin-bottom: 3rem;
  text-align: center;
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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(motion(Link))`
  display: flex;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CategoryImageContainer = styled.div`
  flex: 0 0 200px;
  
  @media (max-width: 576px) {
    flex: 0 0 auto;
    height: 200px;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CategoryName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

const CategoryDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ViewCategoryButton = styled.span`
  display: inline-block;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width var(--transition-normal);
  }
  
  ${CategoryCard}:hover &:after {
    width: 100%;
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

export default CategoriesPage;
