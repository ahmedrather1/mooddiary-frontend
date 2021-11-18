import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getSomeEntries = createAsyncThunk(
  "entriesGraph/getSomeEntries",
  async (input, { getState }) => {
    let api = new Api();
    const state = getState();
    const config = {
      headers: [{ header: "Auth", headerVal: state.login?.login?.googleId }],
    };
    const yearEntries = await api.get(input.yearPath, input.body, config);
    const monthEntries = await api.get(input.monthPath, input.body, config);
    const weekEntries = await api.get(input.weekPath, input.body, config);

    return {
      year: yearEntries.DiaryEntries,
      month: monthEntries.DiaryEntries,
      week: weekEntries.DiaryEntries,
    };
  }
);

const EntriesGraphSlice = createSlice({
  name: "entriesGraph",
  initialState: { year: [], month: [], week: [], loading: false },
  reducers: {},
  extraReducers: {
    [getSomeEntries.fulfilled]: (state, action) => {
      return {
        year: action.payload.year,
        month: action.payload.month,
        week: action.payload.week,
        loading: false,
      };
    },
    [getSomeEntries.pending]: (state, action) => {
      return { year: [], month: [], week: [], loading: true };
    },
    [getSomeEntries.rejected]: (state, action) => {
      return { year: [], month: [], week: [], loading: false };
    },
  },
});

export default EntriesGraphSlice.reducer;
