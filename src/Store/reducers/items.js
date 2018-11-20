import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  // filteredItems: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        // filteredItems: action.payload,
        loading: false
      };

    // case actionTypes.FILTER_ITEMS:
    //   return {
    //     ...state,
    // filteredItems: state.items.filter(item => {
    //       return `${item.first_name} ${item.last_name}`
    //         .toLowerCase()
    //         .includes(action.payload);
    //     })
    //   };
    // case actionTypes.POST_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.concat(action.payload)
    //     filteredItems: state.items.concat(action.payload)
    //   };
    default:
      return state;
  }
};

export default reducer;
