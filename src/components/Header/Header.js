import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to={process.env.PUBLIC_URL + '/'} className="item">The Game</Link>
      <div className="right menu">
        <Link to="/add-credit" className="item">Add Credit</Link>
        <div className="item">Balance: 100$</div>
        <Link to="/dashboard" className="item">Login</Link>
      </div>
    </div>
  );
};

export default Header;
