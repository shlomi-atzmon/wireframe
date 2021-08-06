import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  const onAuthChange = () => {
    dispatch({ type: isSignedIn ? "SIGN_OUT" : "SIGN_IN" });
  };

  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        The Game
      </Link>
      <div className="right menu">
        {isSignedIn && (
          <>
            <Link to="/add-credit" className="item">
              Add Credit
            </Link>
            <div className="item">Balance: 100$</div>
          </>
        )}
        <Link to="/dashboard" className="item" onClick={onAuthChange}>
          {isSignedIn ? "Sign Out" : "Sign In"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
