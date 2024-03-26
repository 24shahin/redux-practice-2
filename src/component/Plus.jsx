import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../slices/count";
function Plus() {
  let dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Plus</button>
    </>
  );
}

export default Plus;
