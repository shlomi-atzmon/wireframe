import React from "react";

const DashboardStats = () => {
  return (
    <div className="cards">
      <div className="row">

        <div className="card col-2">
          <div className="content">
            <h3 className="value">Congratulations Fisher,</h3>
            <div className="label"><strong>89.6%</strong> of your employees succeed on your recent campaign.</div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="value">12</div>
            <div className="label">Closes tickets</div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="value">104</div>
            <div className="label">New Campaigners</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DashboardStats;
