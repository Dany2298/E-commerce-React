import Nav from "./components/Nav.jsx";

import "./index.css";

import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
