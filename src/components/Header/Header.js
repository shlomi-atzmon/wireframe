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
    <div className="header">
      <Link to={isSignedIn ? "/dashboard" : "/"} className="app-logo">
        Cynario
      </Link>

      {isSignedIn && (
        <>
          <Link to="/add-credit" className="add-credit">
            Add Credit
          </Link>
          <div className="balance">Balance: 100$</div>
        </>
      )}
      <Link to="/dashboard" className="auth" onClick={onAuthChange}>
        {isSignedIn ? "Sign Out" : "Sign In"}
      </Link>
    </div>
  );
};

export default Header;
