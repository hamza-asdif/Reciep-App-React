import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// Pages (will create these next)
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import MealPlannerPage from './pages/MealPlannerPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExplorePage from './pages/ExplorePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// UI Components (will create these next)
import Notification from './components/ui/Notification';
import SearchModal from './components/ui/SearchModal';
import FilterModal from './components/ui/FilterModal';
import MealPlanModal from './components/ui/MealPlanModal';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Redux
import { selectNotification } from './redux/slices/uiSlice';
import { selectSearchModalOpen, selectFilterModalOpen, selectMealPlanModalOpen, selectIsLoading } from './redux/slices/uiSlice';

// Styles
import GlobalStyles from './styles/GlobalStyles';
import ThemeProvider from './styles/ThemeProvider';

function App() {
  const dispatch = useDispatch();
  
  // UI Selectors
  const notification = useSelector(selectNotification);
  const searchModalOpen = useSelector(selectSearchModalOpen);
  const filterModalOpen = useSelector(selectFilterModalOpen);
  const mealPlanModalOpen = useSelector(selectMealPlanModalOpen);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <Sidebar />
          
          <MainContent>
            <AnimatePresence mode="wait">
              {isLoading && <LoadingSpinner />}
            </AnimatePresence>
            
            <PageContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/meal-planner" element={<MealPlannerPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageContainer>
          </MainContent>
          
          <Footer />
          
          {/* Modals */}
          <AnimatePresence>
            {searchModalOpen && <SearchModal />}
            {filterModalOpen && <FilterModal />}
            {mealPlanModalOpen && <MealPlanModal />}
          </AnimatePresence>
          
          {/* Notification */}
          <AnimatePresence>
            {notification.message && <Notification message={notification.message} type={notification.type} />}
          </AnimatePresence>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
`;

const PageContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export default App;
