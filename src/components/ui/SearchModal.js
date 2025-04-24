import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { FaSearch, FaTimes, FaHistory } from 'react-icons/fa';
import { closeSearchModal } from '../../redux/slices/uiSlice';
import useRecipes from '../../hooks/useRecipes';

const SearchModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const { searchByName, searchByIngredient, selectRecentSearches } = useRecipes();
  
  // Focus the search input when the modal opens
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    dispatch(closeSearchModal());
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    if (searchType === 'name') {
      searchByName(searchTerm);
    } else if (searchType === 'ingredient') {
      searchByIngredient(searchTerm);
    }
    
    navigate(`/search?type=${searchType}&query=${encodeURIComponent(searchTerm)}`);
    handleClose();
  };
  
  const handleRecentSearchClick = (search) => {
    if (search.type === 'name') {
      searchByName(search.term);
    } else if (search.type === 'ingredient') {
      searchByIngredient(search.term);
    }
    
    navigate(`/search?type=${search.type}&query=${encodeURIComponent(search.term)}`);
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
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <ModalHeader>
          <ModalTitle>Search Recipes</ModalTitle>
          <CloseButton onClick={handleClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>
        
        <SearchForm onSubmit={handleSearch}>
          <SearchTypeContainer>
            <SearchTypeButton
              type="button"
              $active={searchType === 'name'}
              onClick={() => setSearchType('name')}
            >
              By Name
            </SearchTypeButton>
            <SearchTypeButton
              type="button"
              $active={searchType === 'ingredient'}
              onClick={() => setSearchType('ingredient')}
            >
              By Ingredient
            </SearchTypeButton>
          </SearchTypeContainer>
          
          <SearchInputContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput
              id="search-input"
              type="text"
              placeholder={searchType === 'name' ? 'Search recipes by name...' : 'Search recipes by ingredient...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ClearButton type="button" onClick={() => setSearchTerm('')}>
                <FaTimes />
              </ClearButton>
            )}
          </SearchInputContainer>
          
          <SearchButton type="submit">
            Search
          </SearchButton>
        </SearchForm>
        
        <RecentSearchesContainer>
          <RecentSearchesTitle>
            <FaHistory />
            <span>Recent Searches</span>
          </RecentSearchesTitle>
          
          <RecentSearchesList>
            {/* We'll populate this with actual recent searches from Redux */}
            <RecentSearchItem onClick={() => handleRecentSearchClick({ term: 'Chicken', type: 'name' })}>
              <RecentSearchTerm>Chicken</RecentSearchTerm>
              <RecentSearchType>By Name</RecentSearchType>
            </RecentSearchItem>
            <RecentSearchItem onClick={() => handleRecentSearchClick({ term: 'Pasta', type: 'name' })}>
              <RecentSearchTerm>Pasta</RecentSearchTerm>
              <RecentSearchType>By Name</RecentSearchType>
            </RecentSearchItem>
            <RecentSearchItem onClick={() => handleRecentSearchClick({ term: 'Tomato', type: 'ingredient' })}>
              <RecentSearchTerm>Tomato</RecentSearchTerm>
              <RecentSearchType>By Ingredient</RecentSearchType>
            </RecentSearchItem>
          </RecentSearchesList>
        </RecentSearchesContainer>
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
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-card-bg);
  z-index: 1001;
  padding: 2rem;
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
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

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchTypeContainer = styled.div`
  display: flex;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
`;

const SearchTypeButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  background-color: ${({ $active }) => $active ? 'var(--color-primary)' : 'var(--color-card-bg)'};
  color: ${({ $active }) => $active ? 'white' : 'var(--color-text)'};
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: ${({ $active }) => $active ? 'var(--color-primary)' : 'var(--color-border)'};
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: var(--color-text-light);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-card-bg);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  &::placeholder {
    color: var(--color-text-light);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: var(--color-text-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--color-text);
  }
`;

const SearchButton = styled.button`
  padding: 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const RecentSearchesContainer = styled.div`
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`;

const RecentSearchesTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RecentSearchesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecentSearchItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const RecentSearchTerm = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const RecentSearchType = styled.span`
  color: var(--color-text-light);
  font-size: 0.75rem;
`;

export default SearchModal;
