import Nav from "./components/Nav.jsx";
import "./index.css";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Books from "./components/pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./components/pages/BookInfo.jsx";
import Cart from "./components/pages/Cart.jsx";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
