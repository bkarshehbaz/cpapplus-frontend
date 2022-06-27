import {
  SET_CURRENT_USER,
  USER_LOADING,
  SET_SUCCESS,
  ADD_USER,
} from "../actions/types";
import isEmpty from "is-empty";
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  successMessage: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case ADD_USER:
      return {
        ...state,

        user: action.payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        successMessage: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
