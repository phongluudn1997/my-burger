import * as actionTypes from "../actions";

const initialState = {
  meat: 0,
  salad: 0,
  bacon: 0,
  cheese: 0,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        cheese: 10,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ingredientsReducer;
