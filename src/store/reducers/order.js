import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };

    case actionTypes.ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ORDER_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        purchased: true,
      };

    case actionTypes.ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case actionTypes.START_FETCH_ORDERS:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_ORDERS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        orders: action.payload.orders,
      };

    case actionTypes.FETCH_ORDERS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default orderReducer;
