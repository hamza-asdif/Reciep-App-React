import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHome, FaList, FaHeart, FaCalendarAlt, FaUser, FaSignInAlt } from 'react-icons/fa';
import { MdFoodBank, MdOutlineExplore } from 'react-icons/md';
import { selectSidebarOpen, closeSidebar } from '../../redux/slices/uiSlice';
import { selectIsAuthenticated } from '../../redux/slices/userSlice';
import useRecipes from '../../hooks/useRecipes';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(selectSidebarOpen);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { categories, loadCategories, status } = useRecipes();

  useEffect(() => {
    if (categories.length === 0 && status !== 'loading') {
      loadCategories();
    }
  }, [categories.length, loadCategories, status]);

  const handleClose = () => {
    dispatch(closeSidebar());
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
          <SidebarContainer
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <SidebarHeader>
              <SidebarTitle>Menu</SidebarTitle>
              <CloseButton onClick={handleClose}>
                <FaTimes />
              </CloseButton>
            </SidebarHeader>

            <NavSection>
              <NavItem onClick={() => handleNavigation('/')}>
                <FaHome />
                <span>Home</span>
              </NavItem>
              <NavItem onClick={() => handleNavigation('/categories')}>
                <FaList />
                <span>Categories</span>
              </NavItem>
              <NavItem onClick={() => handleNavigation('/explore')}>
                <MdOutlineExplore />
                <span>Explore</span>
              </NavItem>
              <NavItem onClick={() => handleNavigation('/favorites')}>
                <FaHeart />
                <span>Favorites</span>
              </NavItem>
              <NavItem onClick={() => handleNavigation('/meal-planner')}>
                <FaCalendarAlt />
                <span>Meal Planner</span>
              </NavItem>
            </NavSection>

            <SectionTitle>Categories</SectionTitle>
            <CategoriesSection>
              {status === 'loading' ? (
                <LoadingText>Loading categories...</LoadingText>
              ) : categories && categories.length > 0 ? (
                categories.slice(0, 8).map((category) => (
                  <CategoryItem 
                    key={category.idCategory || category.strCategory}
                    onClick={() => handleNavigation(`/category/${category.strCategory}`)}
                  >
                    <MdFoodBank />
                    <span>{category.strCategory}</span>
                  </CategoryItem>
                ))
              ) : (
                <NoDataText>No categories found</NoDataText>
              )}
              <ViewAllButton onClick={() => handleNavigation('/categories')}>
                View All Categories
              </ViewAllButton>
            </CategoriesSection>

            <SectionTitle>Account</SectionTitle>
            <NavSection>
              {isAuthenticated ? (
                <NavItem onClick={() => handleNavigation('/profile')}>
                  <FaUser />
                  <span>Profile</span>
                </NavItem>
              ) : (
                <NavItem onClick={() => handleNavigation('/login')}>
                  <FaSignInAlt />
                  <span>Login / Register</span>
                </NavItem>
              )}
            </NavSection>
          </SidebarContainer>
        </>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const SidebarContainer = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background-color: var(--color-card-bg);
  z-index: 999;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SidebarTitle = styled.h2`
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

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin: 1.5rem 0 0.75rem;
`;

const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  text-align: left;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-light);
    color: white;
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const CategoriesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategoryItem = styled(NavItem)`
  padding: 0.5rem 1rem;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 0.875rem;
  text-align: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingText = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
`;

const NoDataText = styled.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
`;

export default Sidebar;
