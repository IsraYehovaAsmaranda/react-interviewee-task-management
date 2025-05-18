import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: true,
    error: null,
  },
  reducers: {
    loading: (state) => {
      console.log("loading");
      
      state.isLoading = true;
    },
    success: (state) => {
      console.log("success");
      
      state.isLoading = false;
    },
    error: (state, action) => {
      console.log("failed");
      
      state.isLoading = false;
      if (
        action.payload.response &&
        action.payload.response.data &&
        action.payload.response.data.message
      ) {
        state.error = action.payload.response.data.message;
        toast.error(action.payload.response.data.message, {
          id: "error",
        });
      } else if (typeof action.payload === "string") {
        state.error = action.payload;
        toast.error(action.payload, {
          id: "error",
        });
      } else {
        const message = "Unexpected Error Occured";
        state.error = message;
        toast.error(message, {
          id: "error",
        });
      }
    },
  },
});

export const { loading, success, error } = uiSlice.actions;

export default uiSlice.reducer;
