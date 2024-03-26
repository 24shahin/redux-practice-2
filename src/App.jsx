import React from "react";
import Plus from "./component/Plus";
import Result from "./component/Result";
import Minus from "./component/Minus";
import "./App.css";
import Multiple from "./component/Multiple";
import Divided from "./component/Divided";

function App() {
  return (
    <>
      <Plus />
      <Multiple />
      <Result />
      <Divided />
      <Minus />
    </>
  );
}

export default App;
