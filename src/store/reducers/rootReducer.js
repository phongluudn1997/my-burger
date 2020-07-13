import { combineReducers } from "redux";

import ingredientReducer from "./ingredients";
import ingredientsReducer from "./ingredients";

const rootReducer = combineReducers(ingredientsReducer);

export default rootReducer;
