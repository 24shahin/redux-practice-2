import React from "react";
import { useSelector } from "react-redux";

function Result() {
  let data = useSelector((state) => state.mycounter.value);
  return (
    <>
      <h2>{data}</h2>
    </>
  );
}

export default Result;
