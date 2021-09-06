import React from "react";
import LoggedOutHeader from "./common/LoggedOutHeader";
import Footer from "./common/Footer";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import GoogleLoginButton from "./GoogleLoginButton";

import { logIn, logOut } from "../redux/LoginSlice";

function LoginPage() {
  return (
    <>
      <LoggedOutHeader />
      <h1>Need to login</h1>

      <GoogleLoginButton />
      <Footer />
    </>
  );
}

export default LoginPage;
