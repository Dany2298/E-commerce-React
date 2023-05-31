import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../UI/Rating";
import Price from "../UI/Price";

function BookInfo({ books }) {
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
                <img
                  src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the Coding Interview
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price salePrice={10} originalPrice={20} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
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
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
