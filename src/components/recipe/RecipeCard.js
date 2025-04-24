import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaPlus } from 'react-icons/fa';
import useRecipes from '../../hooks/useRecipes';

const RecipeCard = ({ recipe, index }) => {
  const { toggleFavorite, isFavorite } = useRecipes();
  const favorite = isFavorite(recipe.idMeal);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe);
  };

  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Link to={`/recipe/${recipe.idMeal}`}>
        <CardImageContainer>
          <CardImage src={recipe.strMealThumb} alt={recipe.strMeal} />
          <FavoriteButton onClick={handleToggleFavorite}>
            {favorite ? <FaHeart className="filled" /> : <FaRegHeart />}
          </FavoriteButton>
          <CardCategory>{recipe.strCategory}</CardCategory>
        </CardImageContainer>
        <CardContent>
          <CardTitle>{recipe.strMeal}</CardTitle>
          <CardDescription>
            {recipe.strInstructions
              ? `${recipe.strInstructions.substring(0, 80)}...`
              : 'Delicious recipe waiting to be explored. Click to see details and cooking instructions.'}
          </CardDescription>
          <CardFooter>
            <CardArea>{recipe.strArea || 'International'}</CardArea>
            <ViewButton>
              <span>View Recipe</span>
              <FaPlus />
            </ViewButton>
          </CardFooter>
        </CardContent>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-fast);
  height: 100%;
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
  z-index: 1;
  
  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
  
  svg {
    font-size: 1.2rem;
    color: var(--color-text);
    
    &.filled {
      color: var(--color-primary);
    }
  }
`;

const CardCategory = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  border-top-right-radius: var(--radius-md);
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const CardArea = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-light);
  background-color: var(--color-background);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
`;

const ViewButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 600;
  
  svg {
    transition: transform var(--transition-fast);
  }
  
  ${CardContainer}:hover & {
    svg {
      transform: rotate(90deg);
    }
  }
`;

export default RecipeCard;
