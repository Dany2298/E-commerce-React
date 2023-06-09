import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <a href="/books">
            <button className="btn">Explore books</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Explore;
