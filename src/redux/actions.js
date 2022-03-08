import { auth } from "../utils/firebase";
import * as types from "./actionTypes";

export const addToBasket = (item) => ({
  type: types.ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = (id) => ({
  type: types.REMOVE_FROM_BASKET,
  payload: id,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (success) => ({
  type: types.LOGIN_SUCCESS,
  payload: success,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (auth) => ({
  type: types.REGISTER_SUCCESS,
  payload: auth,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const setBasketEmpty = () => ({
  type: types.SET_BASKET_EMPTY,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => {
        dispatch(logoutSuccess());
      })
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};
