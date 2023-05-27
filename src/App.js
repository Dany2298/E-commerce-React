import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Highlights from "./components/Highlights.jsx";
import "./index.css";
import Featured from "./components/Featured.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
