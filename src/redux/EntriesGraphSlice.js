import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const getSomeEntries = createAsyncThunk(
  "entriesGraph/getSomeEntries",
  async (input) => {
    let api = new Api();
    const yearEntries = await api.get(input.yearPath, input.body);
    const monthEntries = await api.get(input.monthPath, input.body);
    const weekEntries = await api.get(input.weekPath, input.body);

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
        month: action.payload.week,
        week: action.payload.month,
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
