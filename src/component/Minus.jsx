import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../slices/count";

function Minus() {
  let dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </>
  );
}

export default Minus;
