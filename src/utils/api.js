import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const api = {
  // Search recipes by category
  searchByCategory: async (category) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/filter.php?c=${category}`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error searching by category:', error);
      throw error;
    }
  },

  // Get recipe details by ID
  getRecipeById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
      return response.data.meals ? response.data.meals[0] : null;
    } catch (error) {
      console.error('Error getting recipe by ID:', error);
      throw error;
    }
  },

  // Search recipes by name
  searchByName: async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search.php?s=${name}`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error searching by name:', error);
      throw error;
    }
  },

  // Search recipes by main ingredient
  searchByIngredient: async (ingredient) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error searching by ingredient:', error);
      throw error;
    }
  },

  // Get all categories
  getCategories: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories.php`);
      return response.data.categories || [];
    } catch (error) {
      console.error('Error getting categories:', error);
      throw error;
    }
  },

  // Get all areas (cuisines)
  getAreas: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/list.php?a=list`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error getting areas:', error);
      throw error;
    }
  },

  // Get all ingredients
  getIngredients: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error getting ingredients:', error);
      throw error;
    }
  },

  // Filter by area (cuisine)
  filterByArea: async (area) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/filter.php?a=${area}`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error filtering by area:', error);
      throw error;
    }
  },
};

export default api;
