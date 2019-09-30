import * as constants from "./Cart.constants";

const intialState = {
  books: []
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case constants.ADD_BOOK_CART: {
      console.log("ggggggg", state.books, action.payload);
      const books = [...state.books, { ...action.payload, quantity: 1 }];
      return {
        books
      };
    }
    case constants.UPDATE_CART: {
      console.log("asasf", state);
      const cart = state.books.map(book =>
        book.id === action.payload.id
          ? (book = {
              ...book,
              quantity:
                action.payload.operator === "+"
                  ? book.quantity + 1
                  : book.quantity - 1
            })
          : book
      );
      return {
        ...state,
        books: cart
      };
    }

    case constants.REMOVE_BOOK_CART: {
      const cart = [...state.books.filter(c => c.id !== action.payload)];
      return {
        ...state,
        books: cart
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
