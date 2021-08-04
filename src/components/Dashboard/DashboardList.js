import React from "react";

const campaigns = [
  {
    title: "Q1 activity 2021",
    description: "Last year's budget leftovers.",
    participants: 100,
    modules: 5,
    cost: "10,000",
    scheduled: "Mar 12, 2019",
    user: {
      name: "Monty",
      avatar: "https://semantic-ui.com/images/avatar/large/jenny.jpg",
    },
  },
  {
    title: "Passover activity 2019",
    description:
      "Heavy Meital stopped eating cakes so there was some money left in the cashbox.",
    participants: 50,
    modules: 10,
    cost: "50,000",
    scheduled: "Nov 2, 2020",
    user: {
      name: "Shlomi",
      avatar: "https://semantic-ui.com/images/avatar/large/steve.jpg",
    },
  },
];

const renderedList = campaigns.map((campaign, index) => {
  return (
    <div className="ui fluid card" key={index}>
      <div className="content">
        <div className="right floated meta">
          <i className="info icon"></i>
        </div>
        <img
          className="ui avatar image"
          src={campaign.user.avatar}
          alt={campaign.user.name}
        />{" "}
        {campaign.user.name}
      </div>

      <div className="content">
        <div className="header">{campaign.title}</div>
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

const DashboardList = () => {
  return <div className="five wide column">{renderedList}</div>;
};

export default DashboardList;
