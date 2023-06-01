import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../UI/Rating";
import Price from "../UI/Price";
import Book from "../UI/Book";

function BookInfo({ books }) {
  const { id } = useParams();

  const book = books.find((book) => +book.id === +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                </div>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, labore officiis. Corrupti quisquam consequuntur
                  fugiat culpa enim beatae molestiae, nulla soluta corporis
                  ipsam eveniet alias mollitia distinctio, tempore, repudiandae
                  incidunt!
                </p>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, labore officiis. Corrupti quisquam consequuntur
                  fugiat culpa enim beatae molestiae, nulla soluta corporis
                  ipsam eveniet alias mollitia distinctio, tempore, repudiandae
                  incidunt!
                </p>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
