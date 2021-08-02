import { configureStore } from "@reduxjs/toolkit";
import MoodReducer from "./MoodSubmitterSlice";
import EntriesListReducer from "./EntriesListSlice";

export default configureStore({
  reducer: {
    mood: MoodReducer,
    entriesList: EntriesListReducer,
  },
});
