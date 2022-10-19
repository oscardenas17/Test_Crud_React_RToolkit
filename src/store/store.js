import { configureStore } from "@reduxjs/toolkit";
import { tutorialSlice } from "./slices/TutorialSlice";

export const store = configureStore({
  reducer: {
    tutorial: tutorialSlice.reducer,
  },
});
