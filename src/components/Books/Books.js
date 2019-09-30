import React from "react";
import BookItem from "./BookItem";
class Books extends React.Component {
  componentDidMount() {
    this.props.actions.getBooks();
  }
  render() {
    const { books, cart } = this.props;
    const bookList = books.map(book => (
      <BookItem
        actions={this.props.cartActions}
        cart={cart}
        book={book}
        key={book.id}
      />
    ));
    return (
      <div>
        <h1>Books</h1>
        <div>{bookList}</div>
      </div>
    );
  }
}

export default Books;
