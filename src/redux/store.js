import { configureStore } from "@reduxjs/toolkit";
import MoodReducer from "./MoodSubmitterSlice";
import EntriesListReducer from "./EntriesListSlice";
import EntriesGraphReducer from "./EntriesGraphSlice";
import LoginReducer from "./LoginSlice";

export default configureStore({
  reducer: {
    login: LoginReducer,
    mood: MoodReducer,
    entriesList: EntriesListReducer,
    entriesGraph: EntriesGraphReducer,
  },
});
