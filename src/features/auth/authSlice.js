import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import toast from "react-hot-toast";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ onSuccess, ...request }, { rejectWithValue }) => {
    try {
      toast.loading("Logging in", {
        id: "action"
      })
      const { data } = await authService.login(request);
      onSuccess(data);
      toast.success("Login success", { id: "action" });
      return data;
    } catch (error) {
      toast.dismiss("action");
      return rejectWithValue(
        error.response?.data?.message || "Failed to login",
      );
    }
  },
);

export const refreshTokenAction = createAsyncThunk(
  "auth/refresh-token",
  async ({token}, { rejectWithValue }) => {
    try {
      toast.loading("Refreshing", {id: "action"});
      const { data } = await authService.refreshToken(token);
      toast.success("Refresh success", {id: "action"});
      return data;
    } catch (error) {
      toast.dismiss("action");
      return rejectWithValue(
        error.response?.data?.message || "Failed to refresh token",
      );
    }
  },
);

export const logoutAction = createAsyncThunk(
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
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
      state.loading = false;
    });
    builder.addCase(refreshTokenAction.fulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
      state.loading = false;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.accessToken = null;
      state.role = null;
      state.permissions = [];
      state.loading = false;
    });
  },
});

export default authSlice.reducer;