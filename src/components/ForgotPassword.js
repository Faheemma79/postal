
import React from "react";

 function ForgotPassword(){
   return(
    <div className="bg-slate-200">
        
        <form className="Formcontainer">
            <div className="border-black ml-2">
                <label>New Password : </label>
                <input className="Inputfield" type="password"/>
            </div>
            
            <div className="border-black">
              <label>Confirm Password : </label>
                <input className="Inputfield" type="password"/>  
            </div>
            <div>
                <button className= "Submitbutton" type="button">Submit</button>
            </div>
        </form>
    </div>
   )
}
export default ForgotPassword;