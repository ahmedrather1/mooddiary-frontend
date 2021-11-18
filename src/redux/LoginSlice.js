import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: { login: { isLoggedIn: false, googleId: null, name: null } },
  reducers: {
    logIn: (state, action) => {
      return {
        login: {
          isLoggedIn: true,
          googleId: action.payload.id,
          name: action.payload.name,
        },
      };
    },
    logOut: (state, action) => {
      console.log("logged out fro slice");
      return { login: { isLoggedIn: false, googleId: null, name: null } };
    },
  },
  extraReducers: {},
});

export const { logIn, logOut } = LoginSlice.actions;

export const loginSelector = (state) => state.login;

export default LoginSlice.reducer;
