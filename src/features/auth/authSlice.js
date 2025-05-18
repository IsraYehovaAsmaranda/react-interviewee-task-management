import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

export const login = createAsyncThunk(
  "auth/login",
  async (request, { rejectWithValue }) => {
    try {
      const { data } = await authService.login(request);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to login",
      );
    }
  },
);

export const refreshToken = createAsyncThunk(
  "auth/refresh-token",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authService.refreshToken();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to refresh token",
      );
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authService.logout();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to logout",
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    role: null,
    permissions: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
      state.loading = false;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.accessToken = null;
      state.role = null;
      state.permissions = [];
      state.loading = false;
    });
  },
});

export default authSlice.reducer;