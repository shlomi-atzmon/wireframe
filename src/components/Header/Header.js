import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../../state/actions/authActions";

const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  const onAuthChange = () => {
    dispatch(isSignedIn ? signOut() : signIn());
  };

  return (
    <div className="ui menu">
      <div className="ui container site-header">
        <Link to={isSignedIn ? "/dashboard" : "/"} className="item">
          Cynario
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
    </div>
  );
};

export default Header;
