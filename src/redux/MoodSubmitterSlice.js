import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const postMood = createAsyncThunk("mood/postMood", async (payload) => {
  let api = new Api();
  await api.post(payload.path, payload.body);
  console.log("from thunk, moodVal is: " + payload.body.mood);
  return { moodVal: payload.body.mood };
});

const MoodSubmitterSlice = createSlice({
  name: "mood",
  initialState: { moodVal: 5 },
  reducers: {},
  extraReducers: {
    [postMood.fulfilled]: (state, action) => {
      return { moodVal: action.payload.moodVal };
    },
  },
});

export default MoodSubmitterSlice.reducer;
