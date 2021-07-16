import { configureStore } from "@reduxjs/toolkit";
import MoodReducer from "./MoodSubmitterSlice";

export default configureStore({
  reducer: {
    mood: MoodReducer,
  },
});
