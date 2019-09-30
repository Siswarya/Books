import * as constants from "./Cart.constants";

export const addBookCart = book => dispatch => {
  dispatch({ type: constants.ADD_BOOK_CART, payload: book });
};

export const updateCart = (id, operator) => dispatch =>
  dispatch({ type: constants.UPDATE_CART, payload: { id, operator } });

export const removeBookCart = id => dispatch =>
  dispatch({ type: constants.REMOVE_BOOK_CART, payload: id });
