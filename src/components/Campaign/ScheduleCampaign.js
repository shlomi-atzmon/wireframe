import React from "react";
import { useSelector } from "react-redux";

const ScheduleCampaign = () => {
  const campaign = useSelector((state) => {
    const campaigns = state.campaigns;
    return Object.values(campaigns)[Object.keys(campaigns).length - 1];
  });

  return (
    <>
      <div>{campaign.title} Campaign</div>
      <div>{campaign.participants} Recipients</div>
      <div>{campaign.modules} Modules Selected</div>
      <div>Total cost {campaign.cost}</div>
      <div className="ui form">
        <div className="inline fields">
          <div className="inline fields">
            <label>Start: </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="schedule" checked="checked" />
                <label>Immediately</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="schedule" />
                <label>On:</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCampaign;
