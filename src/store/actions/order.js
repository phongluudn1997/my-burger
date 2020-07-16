import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const orderSuccessfully = (id, orderData) => {
  return {
    type: actionTypes.ORDER_SUCCESSFULLY,
    payload: {
      orderId: id,
      orderData,
    },
  };
};

const orderFailed = (error) => {
  return {
    type: actionTypes.ORDER_FAILED,
    payload: {
      error,
    },
  };
};

export const tryOrder = (order) => {
  return (dispatch) => {
    dispatch(orderStart());
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        debugger;
        dispatch(orderSuccessfully(response.data.id, response.data));
      })
      .catch((error) => {
        dispatch(orderFailed(error));
      });
  };
};

const orderStart = () => {
  return {
    type: actionTypes.ORDER_START,
  };
};
