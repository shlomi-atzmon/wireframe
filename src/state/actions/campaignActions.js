export const newCampaign = (payload) => {
  return {
    type: "NEW_CAMPAING",
    payload,
  };
};

export const addRecipients = (payload) => {
  return {
    type: "ADD_RECIPIENTS",
    payload,
  };
};