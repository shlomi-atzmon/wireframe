import _ from "lodash";
import { Campaigns } from "../../data/Campaigns";

const campaignReducer = (state = Campaigns, action) => {
  switch (action.type) {
    case "NEW_CAMPAING":
      return { ...state, [_.size(Object.keys(state)) + 1]: action.payload };
    case "ADD_RECIPIENTS": {
      const id = _.size(Object.keys(state));
      Object.assign(state[id], action.payload);
      return { ...state };
    }
    case "ADD_MODULES": {
      const id = _.size(Object.keys(state));
      Object.assign(state[id], action.payload);
      return { ...state };
    }
    default:
      return state;
  }
};

export default campaignReducer;
