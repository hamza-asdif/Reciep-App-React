import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false,
  searchModalOpen: false,
  filterModalOpen: false,
  mealPlanModalOpen: false,
  notificationMessage: null,
  notificationType: 'info', // 'info', 'success', 'warning', 'error'
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    toggleSearchModal: (state) => {
      state.searchModalOpen = !state.searchModalOpen;
    },
    openSearchModal: (state) => {
      state.searchModalOpen = true;
    },
    closeSearchModal: (state) => {
      state.searchModalOpen = false;
    },
    toggleFilterModal: (state) => {
      state.filterModalOpen = !state.filterModalOpen;
    },
    openFilterModal: (state) => {
      state.filterModalOpen = true;
    },
    closeFilterModal: (state) => {
      state.filterModalOpen = false;
    },
    toggleMealPlanModal: (state) => {
      state.mealPlanModalOpen = !state.mealPlanModalOpen;
    },
    openMealPlanModal: (state) => {
      state.mealPlanModalOpen = true;
    },
    closeMealPlanModal: (state) => {
      state.mealPlanModalOpen = false;
    },
    setNotification: (state, action) => {
      state.notificationMessage = action.payload.message;
      state.notificationType = action.payload.type || 'info';
    },
    clearNotification: (state) => {
      state.notificationMessage = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  toggleSearchModal,
  openSearchModal,
  closeSearchModal,
  toggleFilterModal,
  openFilterModal,
  closeFilterModal,
  toggleMealPlanModal,
  openMealPlanModal,
  closeMealPlanModal,
  setNotification,
  clearNotification,
  setLoading,
} = uiSlice.actions;

// Selectors
export const selectSidebarOpen = (state) => state.ui.sidebarOpen;
export const selectSearchModalOpen = (state) => state.ui.searchModalOpen;
export const selectFilterModalOpen = (state) => state.ui.filterModalOpen;
export const selectMealPlanModalOpen = (state) => state.ui.mealPlanModalOpen;
export const selectNotification = (state) => ({
  message: state.ui.notificationMessage,
  type: state.ui.notificationType,
});
export const selectIsLoading = (state) => state.ui.isLoading;

export default uiSlice.reducer;
