import { combineReducers } from "redux";

import ingredientsReducer from "./ingredients";
import totalPrice from "./price";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  totalPrice,
});

export default rootReducer;
