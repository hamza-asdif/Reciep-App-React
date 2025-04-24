import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchRecipesByCategory, 
  fetchRecipeById, 
  fetchRecipesByName, 
  fetchRecipesByIngredient,
  fetchCategories,
  fetchAreas,
  fetchIngredients,
  addToRecentSearches,
  selectAllRecipes,
  selectSelectedRecipe,
  selectCategories,
  selectAreas,
  selectIngredients,
  selectSearchResults,
  selectRecipesStatus,
  selectRecipesError,
  setFilter,
  clearFilters,
  setSortOrder
} from '../redux/slices/recipesSlice';
import { 
  addToFavorites, 
  removeFromFavorites,
  addToMealPlan,
  removeFromMealPlan,
  selectFavorites,
  selectMealPlan
} from '../redux/slices/userSlice';
import { setNotification } from '../redux/slices/uiSlice';

/**
 * Custom hook for recipe operations
 * @returns {Object} - Recipe operations and state
 */
const useRecipes = () => {
  const dispatch = useDispatch();
  
  // Selectors
  const recipes = useSelector(selectAllRecipes);
  const selectedRecipe = useSelector(selectSelectedRecipe);
  const categories = useSelector(selectCategories);
  const areas = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);
  const searchResults = useSelector(selectSearchResults);
  const status = useSelector(selectRecipesStatus);
  const error = useSelector(selectRecipesError);
  const favorites = useSelector(selectFavorites);
  const mealPlan = useSelector(selectMealPlan);
  
  // Search by category
  const searchByCategory = useCallback((category) => {
    dispatch(fetchRecipesByCategory(category));
    dispatch(addToRecentSearches({ term: category, type: 'category' }));
  }, [dispatch]);
  
  // Get recipe details
  const getRecipeDetails = useCallback((id) => {
    dispatch(fetchRecipeById(id));
  }, [dispatch]);
  
  // Search by name
  const searchByName = useCallback((name) => {
    dispatch(fetchRecipesByName(name));
    dispatch(addToRecentSearches({ term: name, type: 'name' }));
  }, [dispatch]);
  
  // Search by ingredient
  const searchByIngredient = useCallback((ingredient) => {
    dispatch(fetchRecipesByIngredient(ingredient));
    dispatch(addToRecentSearches({ term: ingredient, type: 'ingredient' }));
  }, [dispatch]);
  
  // Load categories
  const loadCategories = useCallback(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  // Load areas
  const loadAreas = useCallback(() => {
    dispatch(fetchAreas());
  }, [dispatch]);
  
  // Load ingredients
  const loadIngredients = useCallback(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  
  // Toggle favorite
  const toggleFavorite = useCallback((recipe) => {
    const isFavorite = favorites.some(fav => fav.idMeal === recipe.idMeal);
    
    if (isFavorite) {
      dispatch(removeFromFavorites(recipe.idMeal));
      dispatch(setNotification({ 
        message: `Removed ${recipe.strMeal} from favorites`, 
        type: 'info' 
      }));
    } else {
      dispatch(addToFavorites(recipe));
      dispatch(setNotification({ 
        message: `Added ${recipe.strMeal} to favorites`, 
        type: 'success' 
      }));
    }
  }, [dispatch, favorites]);
  
  // Check if recipe is favorite
  const isFavorite = useCallback((recipeId) => {
    return favorites.some(fav => fav.idMeal === recipeId);
  }, [favorites]);
  
  // Add to meal plan
  const addRecipeToMealPlan = useCallback((day, meal, recipe) => {
    dispatch(addToMealPlan({ day, meal, recipe }));
    dispatch(setNotification({ 
      message: `Added ${recipe.strMeal} to ${meal} on ${new Date(day).toLocaleDateString()}`, 
      type: 'success' 
    }));
  }, [dispatch]);
  
  // Remove from meal plan
  const removeRecipeFromMealPlan = useCallback((day, meal) => {
    dispatch(removeFromMealPlan({ day, meal }));
    dispatch(setNotification({ 
      message: `Removed recipe from ${meal} on ${new Date(day).toLocaleDateString()}`, 
      type: 'info' 
    }));
  }, [dispatch]);
  
  // Set filter
  const applyFilter = useCallback((filterType, value) => {
    dispatch(setFilter({ [filterType]: value }));
  }, [dispatch]);
  
  // Clear filters
  const resetFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [dispatch]);
  
  // Set sort order
  const applySorting = useCallback((sortOrder) => {
    dispatch(setSortOrder(sortOrder));
  }, [dispatch]);
  
  // Format ingredients and measurements
  const formatIngredients = useCallback((recipe) => {
    if (!recipe) return [];
    
    const ingredients = [];
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : '',
        });
      }
    }
    
    return ingredients;
  }, []);
  
  return {
    // State
    recipes,
    selectedRecipe,
    categories,
    areas,
    ingredients,
    searchResults,
    status,
    error,
    favorites,
    mealPlan,
    
    // Actions
    searchByCategory,
    getRecipeDetails,
    searchByName,
    searchByIngredient,
    loadCategories,
    loadAreas,
    loadIngredients,
    toggleFavorite,
    isFavorite,
    addRecipeToMealPlan,
    removeRecipeFromMealPlan,
    applyFilter,
    resetFilters,
    applySorting,
    formatIngredients,
  };
};

export default useRecipes;
