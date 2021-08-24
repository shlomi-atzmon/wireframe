import React from "react";
import { useSelector } from "react-redux";

const DashboardList = () => {
  const campaigns = useSelector((state) => state.campaigns);

  return Object.values(campaigns).map((campaign, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-info">
          <img
            className="avatar-image"
            src={campaign.user.avatar}
            alt={campaign.user.name}
          />{campaign.user.name}
          <div>
            <i>info</i>
          </div>
        </div>

        <div className="content">
          <div>{campaign.title}</div>
          <div className="meta">Participants: {campaign.participants}</div>
          <div className="meta">Modules: {campaign.modules}</div>
          <div className="description">{campaign.description}</div>
        </div>

        <div className="extra content">
          <span>Cost · {campaign.cost}$</span>
          <span className="right floated">
            <span>{campaign.scheduled}</span>
          </span>
        </div>
      </div>
    );
  });
};

export default DashboardList;
