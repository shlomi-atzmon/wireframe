import { FormData } from "../../data/FormData";

const campaignReducer = (state = FormData, action) => {
  switch (action.type) {
    case "NEW_CAMPAING":
      return { ...state, ...action.payload };
    case "ADD_RECIPIENTS": {
      return { ...state, ...action.payload };
    }
    case "ADD_MODULES": {
      return { ...state, ...action.payload };
    }
    case "REMOVE_CAMPAING": {
      return { ...FormData };
    }
    default:
      return state;
  }
};

export default campaignReducer;
