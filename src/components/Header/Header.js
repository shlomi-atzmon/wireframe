import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../UI/NavBar/NavBar";

const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  const onAuthChange = () => {
    dispatch({ type: isSignedIn ? "SIGN_OUT" : "SIGN_IN" });
  };

  return (
    <NavBar>
      <Link to={isSignedIn ? "/dashboard" : "/"}>The Game</Link>
      {isSignedIn && (
        <>
          <Link to="/add-credit">Add Credit</Link>
          <Link to="#">Balance: 100$</Link>
        </>
      )}
      <Link
        to="/dashboard"
        onClick={onAuthChange}
        style={{ "margin-left": "auto" }}
      >
        {isSignedIn ? "Sign Out" : "Sign In"}
      </Link>
    </NavBar>
  );
};

export default Header;
