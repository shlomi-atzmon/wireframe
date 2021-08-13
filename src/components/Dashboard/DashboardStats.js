import React from "react";
import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div className="eleven wide column">
      <div className="ui segment" style={{"height":"90vh"}}>
        <Link
          to="/new-campaign"
          className="ui right floated purple basic button"
        >
          New Campaign
        </Link>

        <div className="ui cards">
          <div className="card">
            <div className="ui statistic">
              <div className="value">4,230</div>
              <div className="label">Downloads</div>
            </div>
          </div>

          <div className="card">
            <div className="ui statistic">
              <div className="value">5,550</div>
              <div className="label">Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
