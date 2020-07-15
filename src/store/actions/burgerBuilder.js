import * as actionTypes from "./actionTypes";

export const addIngredient = (ingredient) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: {
      ingredient,
    },
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: {
      ingredient,
    },
  };
};

export const setState = (ingredients) => {
  return {
    type: actionTypes.SET_STATE,
    payload: {
      ingredients,
    },
  };
};
