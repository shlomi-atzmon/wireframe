import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="announcements">
      <h1>World's leading platform for cyber security threat simulations</h1>
      <h2>Start creating amazing simulations with custom modules</h2>
      <div>
        <Link className="btn btn-primary" to="/pricing">
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
