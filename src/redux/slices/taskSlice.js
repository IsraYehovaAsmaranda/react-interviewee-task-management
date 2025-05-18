import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    selectedTask: {},
  },
  reducers: {
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    clearSelectedTask: (state) => {
      state.selectedTask = {};
    },
  },
  extraReducers: (builder) => {},
});

export const {setSelectedTask, clearSelectedTask} = taskSlice.actions;
export default taskSlice.reducer;