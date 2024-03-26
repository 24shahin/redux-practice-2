import React from "react";
import { useDispatch } from "react-redux";
import { divided } from "../slices/count";
function Divided() {
  let dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(divided())}>Divided</button>
    </>
  );
}

export default Divided;
