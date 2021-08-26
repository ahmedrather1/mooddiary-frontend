import React from "react";
import LoggedOutHeader from "./common/LoggedOutHeader";
import Footer from "./common/Footer";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { logIn, logOut } from "../redux/LoginSlice";

function LoginPage() {
  const dispatch = useDispatch();

  const handleLoginButton = () => {
    console.log("dispatched");
    dispatch(logIn());
  };

  return (
    <>
      <LoggedOutHeader />
      <h1>Need to login</h1>
      <Button variant="primary" onClick={handleLoginButton}>
        Click to Login
      </Button>
      <Footer />
    </>
  );
}

export default LoginPage;
