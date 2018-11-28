// Types
import * as actionTypes from "./actionTypes";

import axios from "axios";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const addToCart = item => dispatch => {
  dispatch({
    type: actionTypes.ADD_ITEM,
    payload: item
  });
};

export const removeItemFromCart = item => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_ITEM,
    payload: item
  });
};

export const checkout = newOrder => {
  return dispatch => {
    instance
      .post("/order/", newOrder)
      .then(res => res.data)
      .then(
        //createdOrder =>
        dispatch({
          type: actionTypes.CHECKOUT
          // payload: createdOrder
        })
      )
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
        else console.error(err);
      });
  };
};
