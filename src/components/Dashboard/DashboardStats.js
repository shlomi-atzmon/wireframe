import React from "react";
import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div className="eleven wide column">
      <div className="ui segment" style={{"height":"90vh"}}>
        <Link to="/new-campaign" className="ui right floated purple basic button">
          New Campaign
        </Link>
        <div className="ui cards">
          <div className="card test">
            <div className="ui statistic">
              <div className="value">100</div>
              <div className="label">Participants</div>
            </div>
          </div>

          <div className="card">
            <div className="ui statistic">
              <div className="value">55%</div>
              <div className="label">Pass</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
