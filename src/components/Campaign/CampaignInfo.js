import React from "react";
import { useSelector } from "react-redux";
const CampaignInfo = (props) => {
  const id = props.match.params.id;
  const campaign = useSelector((state) => state.campaigns[id]);
  return (
    <>
      <hi>Campaign id number : {id}</hi>
      <pre>{JSON.stringify(campaign, null, 2)}</pre>
    </>
  );
};

export default CampaignInfo;
