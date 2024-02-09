import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const navSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    setMode(state, value) {
      state.darkMode = value.payload;
    },
  },
});

export const { setMode } = navSlice.actions;
export default navSlice.reducer;
