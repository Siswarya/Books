import Cart from "./Cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Cartactions from "./Cart.actions";

const mapStateToProps = state => {
  console.log(" cartcont", state);
  return { cart: state.cartReducer.books };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Cartactions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
