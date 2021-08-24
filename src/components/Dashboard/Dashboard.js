import React from "react";
import { Link } from "react-router-dom";
import DashboardList from "./DashboardList";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-list">
        <DashboardList className="dashboard-list" />
      </div>
      <div className="dashboard-stats">
        <DashboardStats />
      </div>
      <Link to="/new-campaign" className="ui right floated purple basic button">
        New Campaign
      </Link>
    </>
  );
};

export default Dashboard;
