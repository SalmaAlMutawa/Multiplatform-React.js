import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/" //local
});

const setLoading = () => ({
  type: actionTypes.SET_ITEM_LOADING
});

export const fetchItemDetail = itemID => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get(`/api/items/${itemID}/`) //local
      .then(res => res.data)
      .then(item =>
        dispatch({
          type: actionTypes.FETCH_ITEM_DETAIL,
          payload: item
        })
      )
      .catch(err => console.error(err));
  };
};
