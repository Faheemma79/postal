import React, {useState} from 'react';
function Number(){
    const[count,setCount] = useState(0);
    
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }

    return(
        <div>
            <h1>Counter</h1>
            <p>Count : {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Number;