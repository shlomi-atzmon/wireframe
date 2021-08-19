import React from "react";
import { Link } from "react-router-dom";
import DashboardList from "./DashboardList";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
  return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <Link
          to="/new-campaign"
          className="ui right floated purple basic button"
        >
          New Campaign
        </Link>
      </div>
      <div className="five wide column">
        <div className="ui cards">
          <DashboardList />
        </div>
      </div>

      <div className="eleven wide column">
        <DashboardStats />
      </div>
    </div>
  );
};

export default Dashboard;
