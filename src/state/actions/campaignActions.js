export const campaignDetails = (payload) => {
  return {
    type: "campaign/details",
    payload,
  };
};

export const addRecipients = (payload) => {
  return {
    type: "campaign/addRecipients",
    payload,
  };
};

export const addModules = (payload) => {
  return {
    type: "campaign/addModules",
    payload,
  };
};

export const removeCampaing = () => {
  return {
    type: "campaign/remove",
  };
};
