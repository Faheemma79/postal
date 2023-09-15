
import React from 'react';
import Childcomponent from './ChildProps';
import Child2 from './Child2';
function ParentProps(){
    const message="Hi CTP";
    const greeting="Good afternoon";

    return(
        <div>
            <Childcomponent props={message}/>
            <Child2 greet={greeting}/>
             
        </div>

    )
      
}
export default ParentProps;