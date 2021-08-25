import { Campaigns } from "../../data/Campaigns";

const campaignReducer = (state = Campaigns, action) => {
  switch (action.type) {
    case "SUBMIT_CAMPAING": {
      state.unshift(action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default campaignReducer;
