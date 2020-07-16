import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 10,
  error: false,
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
          [action.payload.ingredient]:
            state.ingredients[action.payload.ingredient] + 1,
        },
        totalPrice:
          state.totalPrice + INGREDIENT_PRICES[action.payload.ingredient],
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]:
            state.ingredients[action.payload.ingredient] - 1,
        },
        totalPrice:
          state.totalPrice - INGREDIENT_PRICES[action.payload.ingredient],
      };

    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.ingredients,
      };

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default ingredientsReducer;
