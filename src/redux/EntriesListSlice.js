import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getAllEntries = createAsyncThunk(
  "entriesList/getAllEntries",
  async (input, { getState }) => {
    const state = getState();
    const config = {
      headers: [{ header: "Auth", headerVal: state.login?.login?.googleId }],
    };

    let api = new Api();
    const entries = await api.get(input.path, input.body, config);

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
