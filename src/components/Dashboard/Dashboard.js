import React from "react";
import DashboardList from "./DashboardList";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
  return (
    <>
      <div className="ui grid">
        <DashboardList />
        <DashboardStats />
      </div>
    </>
  );
};

export default Dashboard;
