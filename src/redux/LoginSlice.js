import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: { login: { isLoggedIn: false, email: null } },
  reducers: {
    logIn: () => {
      console.log("recieved");
      return { login: { isLoggedIn: true, email: null } };
    },
    logOut: (state, action) => {
      return { login: { isLoggedIn: false, email: null } };
    },
  },
  extraReducers: {},
});

export const { logIn, logOut } = LoginSlice.actions;

export default LoginSlice.reducer;
