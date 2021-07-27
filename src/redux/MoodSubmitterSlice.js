import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const postMood = createAsyncThunk("mood/postMood", async (payload) => {
  console.log(payload);
  let api = new Api();
  const entry = await api.post(payload.path, payload.body);
  console.log(entry);

  return { moodVal: payload.body.mood, moodId: entry.ID };
});

export const updateMood = createAsyncThunk(
  "mood/updateMood",
  async (payload) => {
    console.log(payload);
    let api = new Api();
    const entry = await api.update(payload.path, payload.body);
    return { moodVal: entry.mood, moodId: entry.ID };
  }
);

export const getInitialMood = createAsyncThunk(
  "mood/getInitialMood",
  async (input) => {
    let api = new Api();
    const entry = await api.get(input.path, input.body);

    if (entry.DiaryEntries.length !== 0) {
      return {
        moodVal: entry.DiaryEntries[0].mood,
        moodId: entry.DiaryEntries[0].ID,
      };
    }
  }
);

const MoodSubmitterSlice = createSlice({
  name: "mood",
  initialState: { mood: { moodVal: -1, moodId: null, modified: false } },
  reducers: {},
  extraReducers: {
    [postMood.fulfilled]: (state, action) => {
      return {
        mood: {
          moodVal: action.payload.moodVal,
          moodId: action.payload.moodId,
          modified: true,
        },
      };
    },
    [updateMood.fulfilled]: (state, action) => {
      return {
        mood: {
          moodVal: action.payload.moodVal,
          moodId: action.payload.moodId,
          modified: true,
        },
      };
    },
    [getInitialMood.fulfilled]: (state, action) => {
      return {
        mood: {
          moodVal: action.payload.moodVal,
          moodId: action.payload.moodId,
          modified: true,
        },
      };
    },
  },
});

export default MoodSubmitterSlice.reducer;
