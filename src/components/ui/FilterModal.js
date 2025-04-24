import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes, FaFilter, FaGlobeAmericas, FaUtensils } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { closeFilterModal } from '../../redux/slices/uiSlice';
import useRecipes from '../../hooks/useRecipes';

const FilterModal = () => {
  const dispatch = useDispatch();
  const { 
    categories, 
    areas, 
    ingredients,
    loadCategories, 
    loadAreas, 
    loadIngredients,
    applyFilter,
    resetFilters,
    selectFilters
  } = useRecipes();
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');
  
  // Load filter options on component mount
  useEffect(() => {
    if (categories.length === 0) {
      loadCategories();
    }
    
    if (areas.length === 0) {
      loadAreas();
    }
    
    if (ingredients.length === 0) {
      loadIngredients();
    }
  }, [categories.length, areas.length, ingredients.length, loadCategories, loadAreas, loadIngredients]);
  
  const handleClose = () => {
    dispatch(closeFilterModal());
  };
  
  const handleApplyFilters = () => {
    if (selectedCategory) {
      applyFilter('category', selectedCategory);
    }
    
    if (selectedArea) {
      applyFilter('area', selectedArea);
    }
    
    if (selectedIngredient) {
      applyFilter('ingredient', selectedIngredient);
    }
    
    handleClose();
  };
  
  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedArea('');
    setSelectedIngredient('');
    resetFilters();
    handleClose();
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
            <FaFilter />
            <span>Filter Recipes</span>
          </ModalTitle>
          <CloseButton onClick={handleClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>
        
        <ModalContent>
          <FilterSection>
            <FilterSectionTitle>
              <FilterIcon>
                <FaUtensils />
              </FilterIcon>
              <span>Category</span>
            </FilterSectionTitle>
            <FilterOptions>
              <FilterOption
                $active={selectedCategory === ''}
                onClick={() => setSelectedCategory('')}
              >
                All
              </FilterOption>
              {categories.map(category => (
                <FilterOption
                  key={category.idCategory || category.strCategory}
                  $active={selectedCategory === category.strCategory}
                  onClick={() => setSelectedCategory(category.strCategory)}
                >
                  {category.strCategory}
                </FilterOption>
              ))}
            </FilterOptions>
          </FilterSection>
          
          <FilterSection>
            <FilterSectionTitle>
              <FilterIcon>
                <FaGlobeAmericas />
              </FilterIcon>
              <span>Cuisine</span>
            </FilterSectionTitle>
            <FilterOptions>
              <FilterOption
                $active={selectedArea === ''}
                onClick={() => setSelectedArea('')}
              >
                All
              </FilterOption>
              {areas.map(area => (
                <FilterOption
                  key={area.strArea}
                  $active={selectedArea === area.strArea}
                  onClick={() => setSelectedArea(area.strArea)}
                >
                  {area.strArea}
                </FilterOption>
              ))}
            </FilterOptions>
          </FilterSection>
          
          <FilterSection>
            <FilterSectionTitle>
              <span>Main Ingredient</span>
            </FilterSectionTitle>
            <IngredientSelect
              value={selectedIngredient}
              onChange={(e) => setSelectedIngredient(e.target.value)}
            >
              <option value="">All Ingredients</option>
              {ingredients.slice(0, 100).map(ingredient => (
                <option 
                  key={ingredient.idIngredient || ingredient.strIngredient} 
                  value={ingredient.strIngredient}
                >
                  {ingredient.strIngredient}
                </option>
              ))}
            </IngredientSelect>
          </FilterSection>
        </ModalContent>
        
        <ModalFooter>
          <ResetButton onClick={handleResetFilters}>
            Reset Filters
          </ResetButton>
          <ApplyButton onClick={handleApplyFilters}>
            Apply Filters
          </ApplyButton>
        </ModalFooter>
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FilterSection = styled.div``;

const FilterSectionTitle = styled.h3`
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

const IngredientSelect = styled.select`
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

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ResetButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const ApplyButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export default FilterModal;
