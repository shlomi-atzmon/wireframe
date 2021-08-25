import { combineReducers } from "redux";
import authReducer from "./authReducer";
import campaignReducer from "./campaignReducer";
import campaignsReducer from "./campaignsReducer";

export default combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  campaigns: campaignsReducer,
});
