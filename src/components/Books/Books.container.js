import Books from "./Books";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Booksactions from "./Books.actions";
import * as Cartsactions from "../Cart/Cart.actions";
const mapStateToProps = state => {
  console.log(" bookcont", state);
  return {
    books: state.bookReducer.books,
    cart: state.cartReducer.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Booksactions, dispatch),
    cartActions: bindActionCreators(Cartsactions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
