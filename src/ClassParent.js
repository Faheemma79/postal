import React from "react";
import child1 from "./Child1";
class classParent extends React.Component{
    render(){
        const greeting='Hello world';
        return(
            <div>
                <child1 props={greeting}/>

            </div>


        )
    }
}