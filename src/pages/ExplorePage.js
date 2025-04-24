import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaGlobeAmericas, FaUtensils } from 'react-icons/fa';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from '../components/recipe/RecipeCard';

const ExplorePage = () => {
  const { 
    categories, 
    areas, 
    loadCategories, 
    loadAreas, 
    searchByCategory,
    filterByArea,
    recipes,
    status,
    error
  } = useRecipes();
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeArea, setActiveArea] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  
  // Load categories and areas on component mount
  useEffect(() => {
    if (categories.length === 0) {
      loadCategories();
    }
    
    if (areas.length === 0) {
      loadAreas();
    }
    
    // Load a default category
    if (recipes.length === 0) {
      searchByCategory('Beef');
    }
    
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
  }, [categories.length, areas.length, recipes.length, loadCategories, loadAreas, searchByCategory]);
  
  // Filter recipes based on search query and active filters
  useEffect(() => {
    let filtered = [...recipes];
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(recipe => 
        recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.strCategory === activeCategory);
    }
    
    // Filter by area
    if (activeArea !== 'All') {
      filtered = filtered.filter(recipe => recipe.strArea === activeArea);
    }
    
    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, activeCategory, activeArea]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category !== 'All') {
      searchByCategory(category);
    }
  };
  
  const handleAreaChange = (area) => {
    setActiveArea(area);
    if (area !== 'All') {
      filterByArea(area);
    }
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    // The filtering is handled by the useEffect
  };
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <PageTitle>Explore Recipes</PageTitle>
        <PageDescription>
          Discover delicious recipes from around the world. Filter by category, cuisine, or search for something specific.
        </PageDescription>
      </PageHeader>
      
      <SearchContainer onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <FaSearch />
          <span>Search</span>
        </SearchButton>
      </SearchContainer>
      
      <FiltersContainer>
        <FilterSection>
          <FilterTitle>
            <FilterIcon>
              <FaUtensils />
            </FilterIcon>
            <span>Categories</span>
          </FilterTitle>
          <FilterOptions>
            <FilterOption
              $active={activeCategory === 'All'}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </FilterOption>
            {categories.map(category => (
              <FilterOption
                key={category.idCategory || category.strCategory}
                $active={activeCategory === category.strCategory}
                onClick={() => handleCategoryChange(category.strCategory)}
              >
                {category.strCategory}
              </FilterOption>
            ))}
          </FilterOptions>
        </FilterSection>
        
        <FilterSection>
          <FilterTitle>
            <FilterIcon>
              <FaGlobeAmericas />
            </FilterIcon>
            <span>Cuisines</span>
          </FilterTitle>
          <FilterOptions>
            <FilterOption
              $active={activeArea === 'All'}
              onClick={() => handleAreaChange('All')}
            >
              All
            </FilterOption>
            {areas.map(area => (
              <FilterOption
                key={area.strArea}
                $active={activeArea === area.strArea}
                onClick={() => handleAreaChange(area.strArea)}
              >
                {area.strArea}
              </FilterOption>
            ))}
          </FilterOptions>
        </FilterSection>
      </FiltersContainer>
      
      <ResultsContainer>
        <ResultsHeader>
          <ResultsCount>
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
          </ResultsCount>
        </ResultsHeader>
        
        {status === 'loading' ? (
          <LoadingMessage>Loading recipes...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>Error loading recipes: {error}</ErrorMessage>
        ) : filteredRecipes.length > 0 ? (
          <RecipeGrid>
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} index={index} />
            ))}
          </RecipeGrid>
        ) : (
          <NoResultsMessage>
            No recipes found matching your criteria. Try adjusting your filters.
          </NoResultsMessage>
        )}
      </ResultsContainer>
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

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 800px;
`;

const SearchContainer = styled.form`
  display: flex;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md) 0 0 var(--radius-md);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-card-bg);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  @media (max-width: 576px) {
    border-radius: var(--radius-md);
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
  
  @media (max-width: 576px) {
    border-radius: var(--radius-md);
  }
`;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FilterSection = styled.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const FilterTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterIcon = styled.span`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterOption = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ $active }) => $active ? 'var(--color-primary)' : 'var(--color-background)'};
  color: ${({ $active }) => $active ? 'white' : 'var(--color-text)'};
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${({ $active }) => $active ? 'var(--color-primary-dark)' : 'var(--color-border)'};
  }
`;

const ResultsContainer = styled.div``;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ResultsCount = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
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

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-error);
  margin: 3rem 0;
`;

const NoResultsMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`;

export default ExplorePage;
