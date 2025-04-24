import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

// Load favorites from localStorage
const loadFavorites = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error loading favorites from localStorage:", error);
    return [];
  }
};

// Load user preferences from localStorage
const loadUserPreferences = () => {
  try {
    const preferences = localStorage.getItem("userPreferences");
    return preferences ? JSON.parse(preferences) : { theme: "light" };
  } catch (error) {
    console.error("Error loading user preferences from localStorage:", error);
    return { theme: "light" };
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  favorites: loadFavorites(),
  mealPlan: [],
  preferences: loadUserPreferences(),
  status: "idle",
  error: null,
  emailVerified: false,
  verificationEmailSent: false,
};

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
          emailRedirectTo: window.location.origin + "/verify-email",
        },
      });

      if (error) return rejectWithValue(error.message);

      // Check if email confirmation is required
      const requiresEmailConfirmation = !data.session;

      return {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata?.name || "",
        requiresEmailConfirmation,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for verifying email
export const verifyEmail = createAsyncThunk(
  "user/verifyEmail",
  async (token, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: "email",
      });

      if (error) return rejectWithValue(error.message);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for resending verification email
export const resendVerificationEmail = createAsyncThunk(
  "user/resendVerification",
  async (email, { rejectWithValue }) => {
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
        options: {
          emailRedirectTo: window.location.origin + "/verify-email",
        },
      });

      if (error) return rejectWithValue(error.message);
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return rejectWithValue(error.message);
    console.log(data);
    return {
      id: data.user.id,
      email: data.user.email,
      name: data.user.user_metadata?.name || "",
    };
  }
);

// Async thunk for logging out
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signOut();
    if (error) return rejectWithValue(error.message);
    return true;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.status = "succeeded";
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Don't clear favorites or preferences on logout
    },
    addToFavorites: (state, action) => {
      // Check if recipe is already in favorites
      const exists = state.favorites.some(
        (fav) => fav.idMeal === action.payload.idMeal
      );
      if (!exists) {
        state.favorites.push(action.payload);
        // Save to localStorage
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (recipe) => recipe.idMeal !== action.payload
      );
      // Save to localStorage
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    addToMealPlan: (state, action) => {
      // action.payload should have { day, meal, recipe }
      const { day, meal, recipe } = action.payload;

      // Find if there's already a plan for this day
      const dayIndex = state.mealPlan.findIndex((plan) => plan.day === day);

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
      localStorage.setItem("mealPlan", JSON.stringify(state.mealPlan));
    },
    removeFromMealPlan: (state, action) => {
      // action.payload should have { day, meal }
      const { day, meal } = action.payload;

      // Find the day plan
      const dayIndex = state.mealPlan.findIndex((plan) => plan.day === day);

      if (dayIndex >= 0) {
        // Set the meal to null
        state.mealPlan[dayIndex][meal] = null;

        // If all meals are null, remove the day plan
        if (
          !state.mealPlan[dayIndex].breakfast &&
          !state.mealPlan[dayIndex].lunch &&
          !state.mealPlan[dayIndex].dinner
        ) {
          state.mealPlan.splice(dayIndex, 1);
        }

        // Save to localStorage
        localStorage.setItem("mealPlan", JSON.stringify(state.mealPlan));
      }
    },
    clearMealPlan: (state) => {
      state.mealPlan = [];
      localStorage.removeItem("mealPlan");
    },
    setTheme: (state, action) => {
      state.preferences.theme = action.payload;
      // Save to localStorage
      localStorage.setItem(
        "userPreferences",
        JSON.stringify(state.preferences)
      );
    },
    updateUserPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
      // Save to localStorage
      localStorage.setItem(
        "userPreferences",
        JSON.stringify(state.preferences)
      );
    },
    setEmailVerified: (state, action) => {
      state.emailVerified = action.payload;
    },
    setVerificationEmailSent: (state, action) => {
      state.verificationEmailSent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!action.payload.requiresEmailConfirmation) {
          state.user = action.payload;
          state.isAuthenticated = true;
          state.emailVerified = true;
        } else {
          state.verificationEmailSent = true;
          state.emailVerified = false;
        }
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Registration failed";
      })
      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.status = "succeeded";
        state.emailVerified = true;
        state.verificationEmailSent = false;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Email verification failed";
      })
      .addCase(resendVerificationEmail.fulfilled, (state) => {
        state.verificationEmailSent = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.emailVerified = true; // Supabase only allows login for verified emails
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "idle";
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Logout failed";
      });
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
  updateUserPreferences,
  setEmailVerified,
  setVerificationEmailSent,
} = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectFavorites = (state) => state.user.favorites;
export const selectMealPlan = (state) => state.user.mealPlan;
export const selectTheme = (state) => state.user.preferences.theme;
export const selectUserPreferences = (state) => state.user.preferences;

export default userSlice.reducer;
