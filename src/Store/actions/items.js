import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/" //local
});

export const fetchItems = () => {
  return dispatch => {
    instance
      .get("/api/items/") //local
      .then(res => res.data)
      .then(items =>
        dispatch({ type: actionTypes.FETCH_ITEMS, payload: items })
      )
      .catch(error => console.error(error));
  };
};

// export const filterItems = query => {
//   return {
//     type: actionTypes.FILTER_ITEMS,
//     payload: query
//   };
// };
