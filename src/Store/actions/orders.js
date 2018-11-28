import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/" //local
});

export const fetchOrders = () => {
  return dispatch => {
    instance
      .get("/api/prevorders/") //local
      .then(res => res.data)
      .then(orders =>
        dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders })
      )
      .catch(error => console.error(error));
  };
};