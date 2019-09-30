import * as constants from "./Books.constants";

const intialState = {
  books: []
};
const booksReducer = (state = intialState, action) => {
  switch (action.type) {
    case constants.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
