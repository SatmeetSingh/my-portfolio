import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./components/navBar/navSlice";

export const store = configureStore({
  reducer: {
    navbar: navReducer,
  },
});
