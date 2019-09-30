import React from "react";

class CartItem extends React.Component {
  handleOnClickUpdate = (id, operator, quantity) => {
    if (quantity === 1 && operator === "-") {
      this.props.actions.updateCart(id, operator);
      this.props.actions.removeBookCart(id);
    } else {
      this.props.actions.updateCart(id, operator);
    }
  };

  handleOnClickRemove = id => {
    this.props.actions.removeBookCart(id);
  };
  render() {
    const { title, price, quantity, image, id } = this.props.cart;
    return (
      <div>
        <ul>
          <li className="cart-items-container">
            <img style={{ width: "100px" }} src={image} alt="books" />
            <div>
              <p>{title}</p>
              <p>U$$: {price}</p>
              <p>Quantity: {quantity}</p>
            </div>
            <div className="button-container">
              <button
                onClick={() => this.handleOnClickUpdate(id, "+", quantity)}
              >
                +
              </button>
              <button onClick={() => this.handleOnClickRemove(id)}>
                remove
              </button>
              <button
                onClick={() => this.handleOnClickUpdate(id, "-", quantity)}
              >
                -
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartItem;
