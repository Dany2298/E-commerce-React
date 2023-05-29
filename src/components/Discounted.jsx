import React from "react";
import { books } from "../data.js";
import Book from "./UI/Book";

function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books //getting the books
              .filter((book) => book.salePrice > 0) //filtering the books if it has a sale price that is greater than 0
              .slice(0, 8) //slicing the books to only show first 8 books
              .map(
                (
                  book //mapping each book using the book component
                ) => (
                  <Book book={book} key={book.id} />
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
