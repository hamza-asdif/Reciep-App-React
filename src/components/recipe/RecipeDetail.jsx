import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaPrint, FaShare, FaCalendarPlus, FaClock, FaUtensils, FaGlobeAmericas } from 'react-icons/fa';
import useRecipes from '../../hooks/useRecipes';

const RecipeDetail = ({ recipe }) => {
  const { toggleFavorite, isFavorite, formatIngredients } = useRecipes();
  const favorite = recipe ? isFavorite(recipe.idMeal) : false;
  const ingredients = recipe ? formatIngredients(recipe) : [];

  const handleToggleFavorite = () => {
    if (recipe) {
      toggleFavorite(recipe);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.strMeal,
        text: `Check out this delicious ${recipe.strMeal} recipe!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!recipe) {
    return (
      <LoadingContainer>
        <h2>Loading recipe...</h2>
      </LoadingContainer>
    );
  }

  return (
    <RecipeDetailContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <RecipeHeader>
        <RecipeTitle>{recipe.strMeal}</RecipeTitle>
        <RecipeActions>
          <ActionButton onClick={handleToggleFavorite}>
            {favorite ? <FaHeart className="filled" /> : <FaRegHeart />}
            <span>{favorite ? 'Saved' : 'Save'}</span>
          </ActionButton>
          <ActionButton onClick={handlePrint}>
            <FaPrint />
            <span>Print</span>
          </ActionButton>
          <ActionButton onClick={handleShare}>
            <FaShare />
            <span>Share</span>
          </ActionButton>
          <ActionButton>
            <FaCalendarPlus />
            <span>Plan</span>
          </ActionButton>
        </RecipeActions>
      </RecipeHeader>

      <RecipeContent>
        <RecipeImageContainer>
          <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
          <RecipeBadges>
            {recipe.strArea && (
              <RecipeBadge>
                <FaGlobeAmericas />
                <span>{recipe.strArea}</span>
              </RecipeBadge>
            )}
            {recipe.strCategory && (
              <RecipeBadge>
                <FaUtensils />
                <span>{recipe.strCategory}</span>
              </RecipeBadge>
            )}
            {recipe.strTags && (
              <RecipeBadge>
                <span>#{recipe.strTags.split(',')[0]}</span>
              </RecipeBadge>
            )}
          </RecipeBadges>
        </RecipeImageContainer>

        <RecipeInfo>
          {ingredients.length > 0 && (
            <RecipeSection>
              <SectionTitle>Ingredients</SectionTitle>
              <IngredientsList>
                {ingredients.map((item, index) => (
                  <IngredientItem key={index}>
                    <IngredientCheck type="checkbox" id={`ingredient-${index}`} />
                    <IngredientLabel htmlFor={`ingredient-${index}`}>
                      <IngredientMeasure>{item.measure}</IngredientMeasure>
                      <IngredientName>{item.ingredient}</IngredientName>
                    </IngredientLabel>
                  </IngredientItem>
                ))}
              </IngredientsList>
            </RecipeSection>
          )}

          {recipe.strInstructions && (
            <RecipeSection>
              <SectionTitle>Instructions</SectionTitle>
              <InstructionsList>
                {recipe.strInstructions.split(/\r\n|\n|\r/)
                  .filter(step => step.trim() !== '')
                  .map((step, index) => (
                    <InstructionItem key={index}>
                      <InstructionNumber>{index + 1}</InstructionNumber>
                      <InstructionText>{step}</InstructionText>
                    </InstructionItem>
                  ))}
              </InstructionsList>
            </RecipeSection>
          )}

          {recipe.strYoutube && recipe.strYoutube.includes('v=') && (
            <RecipeSection>
              <SectionTitle>Video Tutorial</SectionTitle>
              <VideoContainer>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
                  title={`${recipe.strMeal} Video Tutorial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoContainer>
            </RecipeSection>
          )}
        </RecipeInfo>
      </RecipeContent>
    </RecipeDetailContainer>
  );
};

const RecipeDetailContainer = styled(motion.div)`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
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

const RecipeHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RecipeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const RecipeActions = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-background);
  }
  
  svg {
    font-size: 1.25rem;
    
    &.filled {
      color: var(--color-primary);
    }
  }
  
  span {
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.25rem;
  }
`;

const RecipeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeImageContainer = styled.div`
  position: relative;
`;

const RecipeImage = styled.img`
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`;

const RecipeBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const RecipeBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-background);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  
  svg {
    color: var(--color-primary);
  }
`;

const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RecipeSection = styled.section``;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
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

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0.75rem;
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IngredientCheck = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  
  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    
    &:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
    }
  }
  
  &:checked + label {
    text-decoration: line-through;
    color: var(--color-text-light);
  }
`;

const IngredientLabel = styled.label`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  cursor: pointer;
`;

const IngredientMeasure = styled.span`
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.875rem;
  white-space: nowrap;
`;

const IngredientName = styled.span`
  color: var(--color-text);
  font-size: 0.875rem;
`;

const InstructionsList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InstructionItem = styled.li`
  display: flex;
  gap: 1rem;
`;

const InstructionNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InstructionText = styled.p`
  color: var(--color-text);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
`;

const VideoContainer = styled.div`
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

export default RecipeDetail;
