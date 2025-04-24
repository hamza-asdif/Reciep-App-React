import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './slices/recipesSlice';
import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
    ui: uiReducer,
  },
});

export default store;
