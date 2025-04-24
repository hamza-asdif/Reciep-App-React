import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Async thunks for API calls
export const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchByCategory',
  async (category, { rejectWithValue }) => {
    try {
      return await api.searchByCategory(category);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await api.getRecipeById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRecipesByName = createAsyncThunk(
  'recipes/fetchByName',
  async (name, { rejectWithValue }) => {
    try {
      return await api.searchByName(name);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRecipesByIngredient = createAsyncThunk(
  'recipes/fetchByIngredient',
  async (ingredient, { rejectWithValue }) => {
    try {
      return await api.searchByIngredient(ingredient);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'recipes/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getCategories();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAreas = createAsyncThunk(
  'recipes/fetchAreas',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getAreas();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchIngredients = createAsyncThunk(
  'recipes/fetchIngredients',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getIngredients();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  recipes: [],
  selectedRecipe: null,
  categories: [],
  areas: [],
  ingredients: [],
  searchResults: [],
  recentSearches: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  filters: {
    category: '',
    area: '',
    ingredient: '',
  },
  sort: 'name', // 'name' | 'popularity'
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearSelectedRecipe: (state) => {
      state.selectedRecipe = null;
    },
    addToRecentSearches: (state, action) => {
      // Add to recent searches and remove duplicates
      const search = action.payload;
      state.recentSearches = [
        search,
        ...state.recentSearches.filter(item => item.term !== search.term || item.type !== search.type)
      ].slice(0, 10); // Keep only 10 most recent searches
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = { category: '', area: '', ingredient: '' };
    },
    setSortOrder: (state, action) => {
      state.sort = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchRecipesByCategory
      .addCase(fetchRecipesByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipesByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Handle fetchRecipeById
      .addCase(fetchRecipeById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedRecipe = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Handle fetchRecipesByName
      .addCase(fetchRecipesByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipesByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipesByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Handle fetchRecipesByIngredient
      .addCase(fetchRecipesByIngredient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipesByIngredient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
        state.error = null;
      })
      .addCase(fetchRecipesByIngredient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Handle fetchCategories
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Handle fetchAreas
      .addCase(fetchAreas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.areas = action.payload;
        state.error = null;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Handle fetchIngredients
      .addCase(fetchIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ingredients = action.payload;
        state.error = null;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { 
  clearSelectedRecipe, 
  addToRecentSearches, 
  setFilter, 
  clearFilters, 
  setSortOrder,
  clearSearchResults
} = recipesSlice.actions;

// Selectors
export const selectAllRecipes = (state) => state.recipes.recipes;
export const selectSelectedRecipe = (state) => state.recipes.selectedRecipe;
export const selectCategories = (state) => state.recipes.categories;
export const selectAreas = (state) => state.recipes.areas;
export const selectIngredients = (state) => state.recipes.ingredients;
export const selectSearchResults = (state) => state.recipes.searchResults;
export const selectRecentSearches = (state) => state.recipes.recentSearches;
export const selectRecipesStatus = (state) => state.recipes.status;
export const selectRecipesError = (state) => state.recipes.error;
export const selectFilters = (state) => state.recipes.filters;
export const selectSortOrder = (state) => state.recipes.sort;

// Filter and sort recipes
export const selectFilteredRecipes = (state) => {
  const { recipes } = state.recipes;
  const { category, area, ingredient } = state.recipes.filters;
  
  let filtered = [...recipes];
  
  // Apply filters if they exist
  if (category) {
    filtered = filtered.filter(recipe => recipe.strCategory === category);
  }
  
  if (area) {
    filtered = filtered.filter(recipe => recipe.strArea === area);
  }
  
  if (ingredient) {
    filtered = filtered.filter(recipe => {
      // Check if any of the ingredients match
      for (let i = 1; i <= 20; i++) {
        const ing = recipe[`strIngredient${i}`];
        if (ing && ing.toLowerCase().includes(ingredient.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
  
  return filtered;
};

export const selectSortedRecipes = (state) => {
  const filtered = selectFilteredRecipes(state);
  const sort = state.recipes.sort;
  
  if (sort === 'name') {
    return [...filtered].sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  } else if (sort === 'popularity') {
    // For this example, we'll just sort by ID as a placeholder for popularity
    return [...filtered].sort((a, b) => parseInt(a.idMeal) - parseInt(b.idMeal));
  }
  
  return filtered;
};

export default recipesSlice.reducer;
