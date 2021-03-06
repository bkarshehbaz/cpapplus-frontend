import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import profileReducer from "./profileReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
});
