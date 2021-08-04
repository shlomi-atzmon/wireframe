import React from "react";
import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div className="eleven wide column">
      <Link to="/new-campaign" className="ui purple basic button">
        New Campaign
      </Link>
      <div className="ui segment">Dashboard Stats</div>
    </div>
  );
};

export default DashboardStats;
