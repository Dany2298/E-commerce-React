import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Highlights from "./components/Highlights.jsx";
import "./index.css";
import Featured from "./components/Featured.jsx";
import Discounted from "./components/Discounted.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
