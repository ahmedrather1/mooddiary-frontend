import { configureStore } from "@reduxjs/toolkit";
import MoodReducer from "./MoodSubmitterSlice";
import SliderReducer from "./MoodSliderSlice";

export default configureStore({
  reducer: {
    mood: MoodReducer,
    slider: SliderReducer,
  },
});
