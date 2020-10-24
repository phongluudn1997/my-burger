import {
  AUTH_FAIL,
  AUTH_LOG_OUT,
  AUTH_START,
  AUTH_SUCCESS,
} from "../actions/actionTypes";

const intialState = {
  loading: false,
  token: null,
  userId: null,
  error: null,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userId: action.payload.userId,
        token: action.payload.token,
      };
    case AUTH_FAIL:
      return {
        ...intialState,
        loading: false,
        error: action.payload.error,
      };
    case AUTH_LOG_OUT:
      return { ...intialState };

    default:
      return state;
  }
};

export default authReducer;
