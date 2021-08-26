import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import LoggedInApp from "./LoggedInApp";
import LoginPage from "./LoginPage";

function App() {
  const login = useSelector((state) => state.login);
  const [loginState, setLoginState] = useState("loggedOut");

  console.log("loginState1:", loginState);
  useEffect(() => {
    console.log("loginState2:", loginState);
    if (login.login.isLoggedIn === true) {
      setLoginState("loggedIn");
    }
  }, [login.login.isLoggedIn]);

  return loginState === "loggedIn" ? <LoggedInApp /> : <LoginPage />;

  // return login.login.isLoggedIn ? <LoggedInApp /> : <LoginPage />
}

export default App;
