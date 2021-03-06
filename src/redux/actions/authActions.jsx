import React from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { URL } from "../../utils.js";
import {
  GET_ERRORS,
  SET_SUCCESS,
  SET_CURRENT_USER,
  USER_LOADING,
  ADD_USER,
} from "./types"; // Register User

export const registerUser = (userData) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: "",
  });
  axios
    .post(URL + "api/users/register", userData)
    .then((res) => {
      dispatch({
        type: ADD_USER,
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

// Update Password
export const updatePassword = (userData) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: "",
  });
  axios
    .post(URL + "api/users/changePassword", userData)
    .then((res) => {
      dispatch({
        type: SET_SUCCESS,
        payload: res.data.msg,
      });
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: "",
  });
  axios
    .post(URL + "api/users/login", userData)
    .then((res) => {
      // Save to localStorage// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
}; // Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
}; // User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
}; // Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
