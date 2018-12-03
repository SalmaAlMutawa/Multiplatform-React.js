import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://46.101.85.95/api/"
});

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);

      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = userData => {
  return dispatch => {
    instance
      .post("/login/", userData) //local
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        console.log(decodedUser);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
      })
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
        else console.error(err);
      });
  };
};

export const signup = userData => {
  return dispatch => {
    instance
      .post("/register/", userData) //local
      .then(res => res.data)
      .then(user => {
        dispatch(login(userData));
      })
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
        else console.log(err);
      });
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
