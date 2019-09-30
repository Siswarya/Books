import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  render() {
    console.log("cartprops", this.props);
    const cartList = this.props.cart.map(cart => (
      <CartItem key={cart.id} cart={cart} actions={this.props.actions} />
    ));
    return (
      <div className="cart-container">
        <div>{this.props.cart.length > 0 ? cartList : "Cart is empty"}</div>
      </div>
    );
  }
}

export default Cart;
