import React from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { URL } from "../../utils.js";
import {
  UPDATE_PROFILE,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_SUCCESS,
} from "./types"; // Register User

export const UpdateProfile = (userData) => (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS,
    payload: "",
  });
  dispatch({
    type: GET_ERRORS,
    payload: "",
  });
  axios
    .post(URL + "api/profile/", userData)
    .then((res) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const GetProfile = (userData) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: "",
  });
  axios
    .post(URL + "api/profile/me", userData)
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
