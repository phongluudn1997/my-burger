import axios from "../../axios-orders";
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

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: {
      ingredients,
    },
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
