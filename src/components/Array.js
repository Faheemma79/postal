import React, { useState } from "react";
function Array() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length+1}`]);
  };

    
  
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      
      </ul>
    </div>
  );
}
export default Array;
