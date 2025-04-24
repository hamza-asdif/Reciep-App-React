import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaSearch, FaUtensils } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { closeMealPlanModal } from '../../redux/slices/uiSlice';
import useRecipes from '../../hooks/useRecipes';

const MealPlanModal = () => {
  const dispatch = useDispatch();
  const { 
    recipes, 
    searchByName, 
    favorites, 
    addRecipeToMealPlan,
    status
  } = useRecipes();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTab, setSelectedTab] = useState('search'); // 'search' or 'favorites'
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');
  
  // Get the day and meal type from the modal state (if provided)
  useEffect(() => {
    // In a real app, this would come from the modal state in Redux
    // For now, we'll just use a placeholder
    setSelectedDay(new Date().toISOString().split('T')[0]);
    setSelectedMealType('dinner');
  }, []);
  
  // Search for recipes when the search query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    // Debounce search
    const timer = setTimeout(() => {
      searchByName(searchQuery);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery, searchByName]);
  
  // Update search results when recipes change
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    // Filter recipes based on search query
    const filtered = recipes.filter(recipe => 
      recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filtered);
  }, [recipes, searchQuery]);
  
  const handleClose = () => {
    dispatch(closeMealPlanModal());
  };
  
  const handleAddToMealPlan = (recipe) => {
    addRecipeToMealPlan(selectedDay, selectedMealType, recipe);
    handleClose();
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const formatMealType = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };
  
  return (
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleClose}
      />
      <ModalContainer
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <ModalHeader>
          <ModalTitle>
            <FaCalendarAlt />
            <span>Add to Meal Plan</span>
          </ModalTitle>
          <CloseButton onClick={handleClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>
        
        <MealInfo>
          <MealInfoItem>
            <MealInfoLabel>Day:</MealInfoLabel>
            <MealInfoValue>{formatDate(selectedDay)}</MealInfoValue>
          </MealInfoItem>
          <MealInfoItem>
            <MealInfoLabel>Meal:</MealInfoLabel>
            <MealInfoValue>{formatMealType(selectedMealType)}</MealInfoValue>
          </MealInfoItem>
        </MealInfo>
        
        <TabsContainer>
          <TabButton 
            $active={selectedTab === 'search'} 
            onClick={() => setSelectedTab('search')}
          >
            <FaSearch />
            <span>Search Recipes</span>
          </TabButton>
          <TabButton 
            $active={selectedTab === 'favorites'} 
            onClick={() => setSelectedTab('favorites')}
          >
            <FaUtensils />
            <span>Your Favorites</span>
          </TabButton>
        </TabsContainer>
        
        {selectedTab === 'search' && (
          <>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search for recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
            
            <RecipesList>
              {status === 'loading' ? (
                <LoadingMessage>Searching recipes...</LoadingMessage>
              ) : searchQuery.trim() === '' ? (
                <EmptyMessage>Enter a search term to find recipes</EmptyMessage>
              ) : searchResults.length === 0 ? (
                <EmptyMessage>No recipes found matching "{searchQuery}"</EmptyMessage>
              ) : (
                searchResults.map(recipe => (
                  <RecipeItem key={recipe.idMeal}>
                    <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <RecipeInfo>
                      <RecipeName>{recipe.strMeal}</RecipeName>
                      <RecipeCategory>{recipe.strCategory}</RecipeCategory>
                    </RecipeInfo>
                    <AddButton onClick={() => handleAddToMealPlan(recipe)}>
                      Add
                    </AddButton>
                  </RecipeItem>
                ))
              )}
            </RecipesList>
          </>
        )}
        
        {selectedTab === 'favorites' && (
          <RecipesList>
            {favorites.length === 0 ? (
              <EmptyMessage>You don't have any favorite recipes yet</EmptyMessage>
            ) : (
              favorites.map(recipe => (
                <RecipeItem key={recipe.idMeal}>
                  <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <RecipeInfo>
                    <RecipeName>{recipe.strMeal}</RecipeName>
                    <RecipeCategory>{recipe.strCategory}</RecipeCategory>
                  </RecipeInfo>
                  <AddButton onClick={() => handleAddToMealPlan(recipe)}>
                    Add
                  </AddButton>
                </RecipeItem>
              ))
            )}
          </RecipesList>
        )}
      </ModalContainer>
    </>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

const ModalContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-card-bg);
  z-index: 1001;
  padding: 2rem;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-height: 80vh;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    width: 600px;
    left: 50%;
    transform: translateX(-50%) !important;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--color-primary);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const MealInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: var(--color-background);
  border-radius: var(--radius-md);
`;

const MealInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MealInfoLabel = styled.span`
  font-weight: 600;
  color: var(--color-text);
`;

const MealInfoValue = styled.span`
  color: var(--color-primary);
  font-weight: 500;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${({ $active }) => $active ? 'var(--color-primary)' : 'var(--color-background)'};
  color: ${({ $active }) => $active ? 'white' : 'var(--color-text)'};
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${({ $active }) => $active ? 'var(--color-primary-dark)' : 'var(--color-border)'};
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const RecipesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
`;

const RecipeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background-color: var(--color-background);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const RecipeImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-sm);
  object-fit: cover;
`;

const RecipeInfo = styled.div`
  flex: 1;
`;

const RecipeName = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const RecipeCategory = styled.p`
  font-size: 0.75rem;
  color: var(--color-text-light);
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  padding: 2rem;
  color: var(--color-text-light);
`;

const EmptyMessage = styled.p`
  text-align: center;
  padding: 2rem;
  color: var(--color-text-light);
`;

export default MealPlanModal;
