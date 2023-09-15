import React, { useState } from "react";
import Child from "./Child";
export default function Shopping() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Child count={count} decr={decrement} incr={increment}/>
    </div>
  );
}
