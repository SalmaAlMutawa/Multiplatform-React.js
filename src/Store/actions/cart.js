import * as actionTypes from "./actionTypes";

export const addToCart = item => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item
  };
};

export const removeItem = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkout = () => ({
  type: actionTypes.CHECKOUT
});
