import { createSlice } from "@reduxjs/toolkit";

const MoodSliderSlice = createSlice({
  name: "slider",
  initialState: { text: "Pick mood", theme: "inactive" },
  reducers: {
    makeActive: (state, action) => {
      return { text: "Mood", theme: "active" };
    },
  },
});

export const { makeActive } = MoodSliderSlice.actions;

export default MoodSliderSlice.reducer;
