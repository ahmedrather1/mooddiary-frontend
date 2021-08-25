import { configureStore } from "@reduxjs/toolkit";
import MoodReducer from "./MoodSubmitterSlice";
import EntriesListReducer from "./EntriesListSlice";
import EntriesGraphReducer from "./EntriesGraphSlice";

export default configureStore({
  reducer: {
    mood: MoodReducer,
    entriesList: EntriesListReducer,
    entriesGraph: EntriesGraphReducer,
  },
});
