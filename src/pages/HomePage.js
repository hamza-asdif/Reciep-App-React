import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaUtensils, FaHeart, FaCalendarAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from '../components/recipe/RecipeCard';
import { openSearchModal } from '../redux/slices/uiSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { 
    recipes, 
    categories, 
    searchByCategory, 
    loadCategories, 
    status 
  } = useRecipes();
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  
  // Load categories on component mount
  useEffect(() => {
    if (categories.length === 0) {
      loadCategories();
    }
  }, [categories.length, loadCategories]);
  
  // Load a default category when categories are loaded
  useEffect(() => {
    if (categories.length > 0 && recipes.length === 0) {
      // Choose a random category to feature
      const randomIndex = Math.floor(Math.random() * categories.length);
      const randomCategory = categories[randomIndex]?.strCategory || 'Beef';
      searchByCategory(randomCategory);
    }
  }, [categories, recipes.length, searchByCategory]);
  
  // Set featured recipes when recipes are loaded
  useEffect(() => {
    if (recipes.length > 0) {
      // Get 6 random recipes to feature
      const shuffled = [...recipes].sort(() => 0.5 - Math.random());
      setFeaturedRecipes(shuffled.slice(0, 6));
    }
  }, [recipes]);
  
  const handleOpenSearch = () => {
    dispatch(openSearchModal());
  };
  
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Delicious Recipes for Every Taste
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find, save, and share your favorite meals from around the world
          </HeroSubtitle>
          <SearchButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={handleOpenSearch}
          >
            <FaSearch />
            <span>Search Recipes</span>
          </SearchButton>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>
            <FaSearch />
          </FeatureIcon>
          <FeatureTitle>Find Recipes</FeatureTitle>
          <FeatureDescription>
            Search thousands of recipes by name, ingredient, or category
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>
            <FaUtensils />
          </FeatureIcon>
          <FeatureTitle>Cook with Ease</FeatureTitle>
          <FeatureDescription>
            Follow step-by-step instructions with detailed ingredients
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>
            <FaHeart />
          </FeatureIcon>
          <FeatureTitle>Save Favorites</FeatureTitle>
          <FeatureDescription>
            Keep your favorite recipes in one place for quick access
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>
            <FaCalendarAlt />
          </FeatureIcon>
          <FeatureTitle>Plan Meals</FeatureTitle>
          <FeatureDescription>
            Organize your weekly meals with our meal planning tool
          </FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
      
      <SectionTitle>Featured Recipes</SectionTitle>
      
      {status === 'loading' ? (
        <LoadingMessage>Loading recipes...</LoadingMessage>
      ) : featuredRecipes.length > 0 ? (
        <RecipeGrid>
          {featuredRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} index={index} />
          ))}
        </RecipeGrid>
      ) : (
        <NoRecipesMessage>No recipes found. Try searching for a different category.</NoRecipesMessage>
      )}
      
      <ViewMoreButton to="/categories">
        Explore All Categories
      </ViewMoreButton>
      
      <CategoriesSection>
        <SectionTitle>Popular Categories</SectionTitle>
        <CategoriesGrid>
          {categories.slice(0, 8).map((category) => (
            <CategoryCard 
              key={category.idCategory || category.strCategory} 
              to={`/category/${category.strCategory}`}
            >
              <CategoryImage src={category.strCategoryThumb} alt={category.strCategory} />
              <CategoryName>{category.strCategory}</CategoryName>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </CategoriesSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -2rem -1.5rem 2rem;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    height: 400px;
    margin: -1.5rem -1rem 2rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SearchButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-md);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text);
`;

const FeatureDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: 4px;
  }
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`;

const NoRecipesMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`;

const ViewMoreButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto 4rem;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

const CategoriesSection = styled.section`
  margin-bottom: 3rem;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const CategoryCard = styled(Link)`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 150px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    
    img {
      transform: scale(1.1);
    }
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
`;

const CategoryName = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem;
  font-weight: 600;
  text-align: center;
`;

export default HomePage;
