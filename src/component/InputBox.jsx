import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, divided, decrement, multiple } from "../slices/count";

function InputBox() {
  const handlechange = (e) => {
    Setinput(e.target.value);
  };
  const [input, Setinput] = useState(0);

  let dispatch = useDispatch();
  return (
    <>
      <input type="text" className="inputbox" onChange={handlechange} />
      <button onClick={() => dispatch(increment(+input))}>Plus</button>
      <button onClick={() => dispatch(divided(+input))}>Divided</button>
      <button onClick={() => dispatch(decrement(+input))}>Minus</button>
      <button onClick={() => dispatch(multiple(+input))}>Multiple</button>
    </>
  );
}

export default InputBox;
