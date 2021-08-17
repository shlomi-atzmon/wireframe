import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormWrapper from "../../hoc/FormWrapper/FormWrapper";

const ScheduleCampaign = () => {
  const campaign = useSelector((state) => {
    const campaigns = state.campaigns;
    return Object.values(campaigns)[Object.keys(campaigns).length - 1];
  });

  return (
    <FormWrapper>
      <h2 className="ui center aligned header">Campaign Details</h2>
      <form className="ui large form">
        <div className="ui segments">
          <div className="ui segment">{campaign.title} campaign</div>
          <div className="ui red segment">
            {campaign.participants} Recipients
          </div>
          <div className="ui violet segment">
            {campaign.modules} Modules Selected
          </div>
          <div className="ui purple segment">Total Cost {campaign.cost}</div>
          <div className="ui teal segment">
            Schedule at {campaign.scheduled}
          </div>
        </div>

        <Link
          to="/add-modules"
          className="ui left floated secondary basic button"
        >
          Back
        </Link>
        <Link to="/dashboard" className="ui right floated primary basic button">
          Attack!
        </Link>
      </form>
    </FormWrapper>
  );
};

export default ScheduleCampaign;
