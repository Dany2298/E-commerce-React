import React from "react";
import Book from "./UI/Book";
import { books } from "../data.js";

function Featured() {
  console.log(books); //logging the books datatset
  //filtering the books that only have a rating of 5 and then slicing the results to 4

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
