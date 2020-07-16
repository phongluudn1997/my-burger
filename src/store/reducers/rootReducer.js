import { combineReducers } from "redux";
import orderReducer from "./order";
import burgerReducer from "./burgerBuilder";

export default combineReducers({
  burgerBuilder: burgerReducer,
  order: orderReducer,
});
