
import React, { useState } from "react";
function ListGroup() {
  let items = ["Tomato", "Potato", "Cabbage", "Bottleguard"];
  const message = items.length === 0 && <p>No item found</p>;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1)};
    return (
      <div>
        <h1>List</h1>
        <ul>
          {items.map((items) => (
            <li key={items}>{items}</li>
          ))}
          <p>Count : {count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </ul>
      </div>
    );
  };

export default ListGroup;
