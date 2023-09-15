import React from "react";
export default function Child({count,decr,incr}){
    return(
        <div>
        <h2>Child component</h2>
        <p>Received count from parent: {count}</p>
        <button onClick={decr}>-</button>
        <button onClick={incr}>+</button>
        </div>
    );
}