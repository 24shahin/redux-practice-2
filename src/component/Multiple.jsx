import React from "react";
import { useDispatch } from "react-redux";
import { multiple } from "../slices/count";

function Multiple() {
  let dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(multiple())}>Multiple</button>
    </>
  );
}

export default Multiple;
