import React from "react";

const DashboardStats = () => {
  return (
    <div className="ui two cards">
      <div className="card">
        <div className="ui statistic">
          <div className="value">26</div>
          <div className="label">Open tickets</div>
        </div>
      </div>

      <div className="card">
        <div className="ui statistic">
          <div className="value">12</div>
          <div className="label">Closes tickets</div>
        </div>
      </div>
      <div className="card">
        <div className="ui statistic">
          <div className="value">104</div>
          <div className="label">New Campaigners</div>
        </div>
      </div>

      <div className="card">
        <div className="ui statistic">
          <div className="value">57%</div>
          <div className="label">Pass</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
