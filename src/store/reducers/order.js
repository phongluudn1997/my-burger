import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ORDER_SUCCESSFULLY:
      const newOrder = {
        id: action.payload.id,
        orderData: action.payload.orderData,
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
      };

    case actionTypes.ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default orderReducer;
