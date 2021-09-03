export const addDetails = (payload) => ({
  type: "campaign/details",
  payload,
});

export const addRecipients = (payload) => ({
  type: "campaign/addRecipients",
  payload,
});

export const addModules = (payload) => ({
  type: "campaign/addModules",
  payload,
});

export const removeCampaing = () => ({
  type: "campaign/remove",
});
