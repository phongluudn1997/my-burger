import { combineReducers } from "redux";
import orderReducer from "./order";
import burgerReducer from "./burgerBuilder";
import authReducer from "./auth";

export default combineReducers({
  burgerBuilder: burgerReducer,
  order: orderReducer,
  auth: authReducer,
});
