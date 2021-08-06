import React from "react";
import DashboardList from "./DashboardList";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
  return (
    <div>
      <div className="ui grid">
        <DashboardList />
        <DashboardStats />
      </div>
    </div>
  );
};

export default Dashboard;
