import _ from "lodash";
import { Campaigns } from "../../data/Campaigns";

const campaignReducer = (state = Campaigns, action) => {
  switch (action.type) {
    case "NEW_CAMPAING":
      console.log(state);
      return { ...state, newCampaign: action.payload };
    case "ADD_RECIPIENTS": {
      return {...state, newCampaign: {...state.newCampaign, ...action.payload}}
    }
    case "ADD_MODULES": {
      return {...state, newCampaign: {...state.newCampaign, ...action.payload}}
    }
    case "SUBMIT_CAMPAING": {
      const campaign = {...state.newCampaign}
      delete state.newCampaign;
      return {...state, [_.size(Object.keys(state)) + 1]:campaign}
    }
    default:
      return state;
  }
};

export default campaignReducer;
