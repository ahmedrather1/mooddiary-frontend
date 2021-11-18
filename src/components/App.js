import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import LoggedInApp from "./LoggedInApp";
import LoginPage from "./LoginPage";

import GoogleLoginButton from "./GoogleLoginButton";
import GoogleLogoutButton from "./GoogleLogoutButton";

function App() {
  const login = useSelector((state) => state.login);
  const [loginState, setLoginState] = useState("loggedOut");

  console.log("loginState1:", loginState);
  useEffect(() => {
    if (login.login.isLoggedIn === true) {
      setLoginState("loggedIn");
    } else if (login.login.isLoggedIn === false) {
      setLoginState("loggedOut");
    }
  }, [login.login.isLoggedIn]);

  return loginState === "loggedIn" ? <LoggedInApp /> : <LoginPage />;
}

export default App;
