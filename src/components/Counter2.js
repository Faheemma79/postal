import React from "react";
import { useCounter } from "./ContextProvider";
export default function Counter2(){
    const {count}= useCounter();
    return(
        <div>
             <h1>Number of Counts: {count}</h1>
        </div>
    )
}