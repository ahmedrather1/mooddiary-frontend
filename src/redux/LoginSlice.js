import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: { login: { isLoggedIn: false, email: null } },
  reducers: {
    logIn: () => {
      return { login: { isLoggedIn: true, email: null } };
    },
    logOut: () => {
      console.log("logged out fro slice");
      return { login: { isLoggedIn: false, email: null } };
    },
  },
  extraReducers: {},
});

export const { logIn, logOut } = LoginSlice.actions;

export default LoginSlice.reducer;
