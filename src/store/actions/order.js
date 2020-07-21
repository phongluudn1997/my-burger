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

export const initPurchase = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

const fetchOrdersSuccessfully = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESSFULLY,
    payload: {
      orders,
    },
  };
};

const fetchOrdersFailed = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
    payload: {
      error,
    },
  };
};

export const startFetchOrders = () => {
  return {
    type: actionTypes.START_FETCH_ORDERS,
  };
};

export const tryFetchOrders = () => {
  return (dispatch) => {
    dispatch(startFetchOrders());
    axios
      .get("/orders.json")
      .then((res) => {
        console.log(res);
        let orders = [];
        for (let key in res.data) {
          orders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccessfully(orders));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchOrdersFailed(err));
      });
  };
};
