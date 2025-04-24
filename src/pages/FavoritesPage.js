import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaSadTear, FaSortAmountDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/slices/userSlice';
import RecipeCard from '../components/recipe/RecipeCard';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const [sortOrder, setSortOrder] = useState('name');
  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  
  // Sort favorites based on sortOrder
  const sortedFavorites = [...favorites].sort((a, b) => {
    if (sortOrder === 'name') {
      return a.strMeal.localeCompare(b.strMeal);
    } else if (sortOrder === 'recent') {
      // This is a placeholder - in a real app, we'd track when items were added
      return parseInt(b.idMeal) - parseInt(a.idMeal);
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
        <HeaderContent>
          <PageTitle>
            <HeartIcon>
              <FaHeart />
            </HeartIcon>
            My Favorite Recipes
          </PageTitle>
          <PageDescription>
            Your saved recipes all in one place. Easily access your favorite dishes anytime.
          </PageDescription>
        </HeaderContent>
        
        {favorites.length > 0 && (
          <SortContainer>
            <SortIcon>
              <FaSortAmountDown />
            </SortIcon>
            <SortSelect value={sortOrder} onChange={handleSortChange}>
              <option value="name">Sort by Name</option>
              <option value="recent">Sort by Recent</option>
            </SortSelect>
          </SortContainer>
        )}
      </PageHeader>
      
      {favorites.length > 0 ? (
        <>
          <RecipeCount>{favorites.length} favorite {favorites.length === 1 ? 'recipe' : 'recipes'}</RecipeCount>
          <RecipeGrid>
            {sortedFavorites.map((recipe, index) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} index={index} />
            ))}
          </RecipeGrid>
        </>
      ) : (
        <EmptyState>
          <EmptyIcon>
            <FaSadTear />
          </EmptyIcon>
          <EmptyTitle>No Favorites Yet</EmptyTitle>
          <EmptyMessage>
            You haven't added any recipes to your favorites yet. Browse recipes and click the heart icon to add them here.
          </EmptyMessage>
          <BrowseButton to="/categories">
            Browse Categories
          </BrowseButton>
        </EmptyState>
      )}
    </PageContainer>
  );
};

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 600px;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const HeartIcon = styled.span`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
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

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`;

const EmptyTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const EmptyMessage = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  max-width: 500px;
  margin-bottom: 2rem;
`;

const BrowseButton = styled(Link)`
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default FavoritesPage;
