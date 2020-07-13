import * as actionTypes from "../actions";

const initialState = 10;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRICE:
      return state + action.payload.price;
    case actionTypes.SUB_PRICE:
      return state - action.payload.price;
    default:
      return state;
  }
};
