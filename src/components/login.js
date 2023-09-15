import React from "react";
import { Link } from "react-router-dom";

 function Login(){
   return(
     <div className="bg-slate-200">        
        <form>
            <div className="border-black">
                <label>Username : </label>
                <input className="ml-2 border-black border-1"type="text"/>
            </div>
            
            <div className="border-black">
              <label>Password : </label>
                <input className="ml-2 border-black border-1" type="password"/>  
            </div>
            <div>
                <button type="button" className="ml-2 rounded-full">Login</button>
            </div>
            <div>
            <button><Link to ="/forgotpassword">ForgotPassword</Link>
        
            </button> 
            </div>
        </form>
    </div>
   )
}
export default Login;