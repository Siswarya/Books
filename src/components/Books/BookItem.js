import React from "react";

class BookItem extends React.Component {
  addToCart = book => {
    if (this.props.cart.length > 0) {
      const foundItem = this.props.cart.some(el => el.id === book.id);
      if (foundItem !== true) {
        this.props.actions.addBookCart(book);
      } else {
        this.props.actions.updateCart(book.id, "+");
      }
    } else {
      this.props.actions.addBookCart(book);
    }
  };
  render() {
    const { title, price, description, image } = this.props.book;
    return (
      <div className="card-image">
        <img src={image} alt="books" style={{ width: "100px" }} />
        <span className="card-title">{title}</span>
        <hr />
        <div className="card-content">
          <p>{description}</p>
          <h3>U$$ {price}</h3>
        </div>
        <button onClick={() => this.addToCart(this.props.book)}>Buy</button>
      </div>
    );
  }
}

export default BookItem;
