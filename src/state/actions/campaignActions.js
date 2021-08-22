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

export const addModules = (payload) => {
  return {
    type: "ADD_MODULES",
    payload,
  };
};

export const removeCampaing = () => {
  return {
    type: "REMOVE_CAMPAING",
  };
};

export const submitCampaing = () => {
  return {
    type: "SUBMIT_CAMPAING",
  };
};
