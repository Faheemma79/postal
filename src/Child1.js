
import React from "react";
class child1 extends React.Component{
render(){
    const {props}=this.props;
    return(
        <div>
            <h1>{props}</h1>
        </div>
    )

}
}
export default child1;