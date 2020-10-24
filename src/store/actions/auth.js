import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (authData) => {
  const { idToken, localId } = authData;
  return {
    type: AUTH_SUCCESS,
    payload: {
      token: idToken,
      userId: localId,
    },
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: {
      error,
    },
  };
};

export const auth = (email, password, mode) => {
  return (dispatch) => {
    dispatch(authStart());
    let url;

    switch (mode) {
      case "SIGN_UP":
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy__dV5FSFaHswDaZYVToSIT-cz3nAdh8";
        break;
      case "SIGN_IN":
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBy__dV5FSFaHswDaZYVToSIT-cz3nAdh8";
        break;
      default:
        break;
    }

    axios
      .post(url, { email, password })
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
