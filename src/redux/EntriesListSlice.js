import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllEntries = createAsyncThunk(
  "entriesList/getAllEntries",
  async (input) => {
    let api = new Api();
    const entries = await api.get(input.path, input.body);

    // fix this if statement
    if (entries.DiaryEntries.length !== 0) {
      return entries.DiaryEntries;
    } else {
      return [];
    }
  }
);

const EntriesListSlice = createSlice({
  name: "entriesList",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: {
    [getAllEntries.fulfilled]: (state, action) => {
      console.log("from slice: " + action.payload);
      return { list: action.payload, loading: false };
    },
    [getAllEntries.pending]: (state, action) => {
      return { list: [], loading: true };
    },
    [getAllEntries.rejected]: (state, action) => {
      return { list: [], loading: false };
    },
  },
});

export default EntriesListSlice.reducer;
