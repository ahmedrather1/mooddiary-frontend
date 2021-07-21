import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const postMood = createAsyncThunk("mood/postMood", async (payload) => {
  console.log("------    posting obj:");
  console.log(payload);
  let api = new Api();
  const entry = await api.post(payload.path, payload.body);
  console.log("=== entry Id:");
  console.log(entry);
  console.log("=== end..");

  return { moodVal: payload.body.mood, moodId: entry.ID };
});

export const updateMood = createAsyncThunk(
  "mood/updateMood",
  async (payload) => {
    console.log("---- updating obj:");
    console.log(payload);
    let api = new Api();
    const entry = await api.update(payload.path, payload.body);
    return { moodVal: entry.mood, moodId: entry.ID };
  }
);

const MoodSubmitterSlice = createSlice({
  name: "mood",
  initialState: { mood: { moodVal: -1, moodId: null } },
  reducers: {},
  extraReducers: {
    [postMood.fulfilled]: (state, action) => {
      return {
        mood: {
          moodVal: action.payload.moodVal,
          moodId: action.payload.moodId,
        },
      };
    },
    [updateMood.fulfilled]: (state, action) => {
      return {
        mood: {
          moodVal: action.payload.moodVal,
          moodId: action.payload.moodId,
        },
      };
    },
  },
});

export default MoodSubmitterSlice.reducer;
