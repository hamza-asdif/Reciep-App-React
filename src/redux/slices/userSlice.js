import { createSlice } from '@reduxjs/toolkit';

// Load favorites from localStorage
const loadFavorites = () => {
  try {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites from localStorage:', error);
    return [];
  }
};

// Load user preferences from localStorage
const loadUserPreferences = () => {
  try {
    const preferences = localStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : { theme: 'light' };
  } catch (error) {
    console.error('Error loading user preferences from localStorage:', error);
    return { theme: 'light' };
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  favorites: loadFavorites(),
  mealPlan: [],
  preferences: loadUserPreferences(),
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.status = 'succeeded';
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Don't clear favorites or preferences on logout
    },
    addToFavorites: (state, action) => {
      // Check if recipe is already in favorites
      const exists = state.favorites.some(fav => fav.idMeal === action.payload.idMeal);
      if (!exists) {
        state.favorites.push(action.payload);
        // Save to localStorage
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(recipe => recipe.idMeal !== action.payload);
      // Save to localStorage
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    addToMealPlan: (state, action) => {
      // action.payload should have { day, meal, recipe }
      const { day, meal, recipe } = action.payload;
      
      // Find if there's already a plan for this day
      const dayIndex = state.mealPlan.findIndex(plan => plan.day === day);
      
      if (dayIndex >= 0) {
        // Day exists, update the meal
        state.mealPlan[dayIndex][meal] = recipe;
      } else {
        // Day doesn't exist, create a new day plan
        const newDayPlan = { day, breakfast: null, lunch: null, dinner: null };
        newDayPlan[meal] = recipe;
        state.mealPlan.push(newDayPlan);
      }
      
      // Sort meal plan by day
      state.mealPlan.sort((a, b) => new Date(a.day) - new Date(b.day));
      
      // Save to localStorage
      localStorage.setItem('mealPlan', JSON.stringify(state.mealPlan));
    },
    removeFromMealPlan: (state, action) => {
      // action.payload should have { day, meal }
      const { day, meal } = action.payload;
      
      // Find the day plan
      const dayIndex = state.mealPlan.findIndex(plan => plan.day === day);
      
      if (dayIndex >= 0) {
        // Set the meal to null
        state.mealPlan[dayIndex][meal] = null;
        
        // If all meals are null, remove the day plan
        if (!state.mealPlan[dayIndex].breakfast && 
            !state.mealPlan[dayIndex].lunch && 
            !state.mealPlan[dayIndex].dinner) {
          state.mealPlan.splice(dayIndex, 1);
        }
        
        // Save to localStorage
        localStorage.setItem('mealPlan', JSON.stringify(state.mealPlan));
      }
    },
    clearMealPlan: (state) => {
      state.mealPlan = [];
      localStorage.removeItem('mealPlan');
    },
    setTheme: (state, action) => {
      state.preferences.theme = action.payload;
      // Save to localStorage
      localStorage.setItem('userPreferences', JSON.stringify(state.preferences));
    },
    updateUserPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
      // Save to localStorage
      localStorage.setItem('userPreferences', JSON.stringify(state.preferences));
    },
  },
});

export const { 
  login, 
  logout, 
  addToFavorites, 
  removeFromFavorites,
  addToMealPlan,
  removeFromMealPlan,
  clearMealPlan,
  setTheme,
  updateUserPreferences
} = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectFavorites = (state) => state.user.favorites;
export const selectMealPlan = (state) => state.user.mealPlan;
export const selectTheme = (state) => state.user.preferences.theme;
export const selectUserPreferences = (state) => state.user.preferences;

export default userSlice.reducer;
