import { FormData } from "../../data/FormData";

const campaignReducer = (state = FormData, action) => {
  switch (action.type) {
    case "campaign/details":
      return { ...state, ...action.payload };
    case "campaign/addRecipients": {
      return { ...state, ...action.payload };
    }
    case "campaign/addModules": {
      return { ...state, ...action.payload };
    }
    case "campaign/remove": {
      return { ...FormData };
    }
    default:
      return state;
  }
};

export default campaignReducer;
