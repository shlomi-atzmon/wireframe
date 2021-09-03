import { Campaigns } from "../../data/Campaigns";

const campaignReducer = (state = Campaigns, action) => {
  switch (action.type) {
    case "campaing/submit": {
      state.unshift(action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default campaignReducer;
