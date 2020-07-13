import * as actionTypes from "../actions";

const initialState = {
  ingredients: {
    meat: 0,
    cheese: 0,
    bacon: 0,
    salad: 0,
  },
  totalPrice: 10,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATE:
      return {
        ...state,
        ingredients: action.payload.ingredients,
      };

    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
      };

    case actionTypes.SUB_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient],
      };

    default:
      return state;
  }
};

export default ingredientsReducer;
