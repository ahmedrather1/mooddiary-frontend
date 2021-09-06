import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "../redux/LoginSlice";

const clientId =
  "1068756762932-ng0vmgiri6prka0i05mlvvqatq76bsb0.apps.googleusercontent.com";

function GoogleLoginButton() {
  const dispatch = useDispatch();

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    dispatch(
      logIn({ id: res.profileObj.googleId, name: res.profileObj.givenName })
    );
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        uxMode={"popup"}
      />
    </div>
  );
}

export default GoogleLoginButton;
