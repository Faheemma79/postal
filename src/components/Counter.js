import React from "react";
import { useCounter } from "./ContextProvider";
function Counter(){
    const{count,increment,decrement} = useCounter();
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </div>
        
            );
}
export default Counter;