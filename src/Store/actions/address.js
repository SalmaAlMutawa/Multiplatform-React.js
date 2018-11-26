import axios from "axios";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/" //local
});

export const addAddress = userData => {
  return dispatch => {
    instance
      .post("/address/", userData) //local
      .then(res => res.data)
      .then(createdAddress =>
        dispatch({ type: actionTypes.ADD_ADDRESS, payload: createdAddress })
      )
      //.catch(err => console.error(err));
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
        else console.log(err);
      });
  };
};
