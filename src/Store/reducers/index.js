import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import itemsReducer from "./items";
import itemReducer from "./item";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  item: itemReducer,
  errors: errorReducer
});
