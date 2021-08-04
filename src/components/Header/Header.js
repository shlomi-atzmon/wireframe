import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const Balance = 100;
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">The Game</Link>
      <div className="right menu">
        <Link to="/add-credit" className="item">Add Credit</Link>
        <div className="item">Balance: {Balance} $</div>
        <Link to="/dashboard" className="item">Login</Link>
      </div>
    </div>
  );
};

export default Header;
