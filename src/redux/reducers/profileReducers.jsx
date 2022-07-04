import {
  UPDATE_PROFILE,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_SUCCESS,
} from "../actions/types";
import isEmpty from "is-empty";
const initialState = {
  profile: {},
  success: "",
  errors: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        success: "Profile Successfully Updated",
      };

    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: "",
      };
    default:
      return state;
  }
}
