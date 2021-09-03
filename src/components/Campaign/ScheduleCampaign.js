import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { submitCampaing } from '../../state/actions/campaignsActions';
import FormWrapper from "../../hoc/FormWrapper/FormWrapper";

const ScheduleCampaign = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const campaign = useSelector(({ campaign }) => campaign);

  const onClick = () => {
    dispatch(submitCampaing(campaign));
    history.push("./dashboard");
  };

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
          <div className="ui purple segment">Total Cost {campaign.cost}$</div>
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

        <button
          className="ui right floated primary basic button"
          type="button"
          onClick={onClick}
        >
          Attack!
        </button>
      </form>
    </FormWrapper>
  );
};

export default ScheduleCampaign;
