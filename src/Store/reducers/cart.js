import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
  num: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let choice = action.payload;
      let item = state.list.find(
        item => item.name === choice.name && item.price === choice.price
      );
      let list;
      if (item) {
        item.quantity++;
        list = [...state.list];
      } else {
        list = state.list.concat(choice);
      }
      return {
        ...state,
        list,
        num: state.num + 1
      };

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => item !== action.payload),
        num: state.num - 1
      };

    case actionTypes.CHECKOUT:
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
}
