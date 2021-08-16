import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ScheduleCampaign = () => {
  const campaign = useSelector((state) => {
    const campaigns = state.campaigns;
    return Object.values(campaigns)[Object.keys(campaigns).length - 1];
  });

  return (
    <div
      className="ui middle aligned center aligned grid"
      style={{
        margin: "auto",
        padding: "100px",
      }}
    >
      <div className="ui segments">
        <div className="ui segment">
          <h2 className="ui header">
            <div className="content">{campaign.title} Campaign</div>
          </h2>
        </div>

        <div className="ui segments">
          <div className="ui segment">{campaign.participants} Recipients</div>
          <div className="ui red segment">{campaign.modules} Modules Selected</div>
          <div className="ui blue segment">Total Cost {campaign.cost}</div>
          <div className="ui green segment">Schedule at {campaign.scheduled}</div>
        </div>

        <div className="ui segments">
          <Link
            to="/dashboard"
            className="ui left floated primary basic button"
          >
            Attack!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCampaign;
