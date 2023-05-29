import React from "react";
import Landing from "../Landing";
import Highlight from "../UI/Highlight";
import Featured from "../Featured";
import Discounted from "../Discounted";
import Explore from "../Explore";

function Home() {
  return (
    <>
      <Landing />
      <Highlight />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
