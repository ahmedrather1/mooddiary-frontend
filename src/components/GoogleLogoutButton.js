import React from "react";
import GoogleLogout from "react-google-login";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/LoginSlice";

const clientId =
  "1068756762932-ng0vmgiri6prka0i05mlvvqatq76bsb0.apps.googleusercontent.com";

function GoogleLogoutButton() {
  const dispatch = useDispatch();

  const onLogoutSuccess = (res) => {
    console.log("You have been logged out successfully");
    dispatch(logOut());
  };

  const onLogoutFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className="g_id_signout">
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onLogoutSuccess}
        onFailure={onLogoutFailure}
      ></GoogleLogout>
    </div>
  );
}

export default GoogleLogoutButton;
