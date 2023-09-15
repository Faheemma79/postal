import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Validation.css";
import Img from "../assets/envelope.png";
import ForgotPassword from './ForgotPassword';
import { Link } from "react-router-dom";

const Url = "http://restapi.adequateshop.com";

export default function Validation() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setemailValid]= useState(false);
  const [passwordValid, setpasswordValid]= useState(false);
  const [userDetails, setUserDetails] = useState(
    {
      email: '',
      password: ''
    }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserDetails({ ...userDetails, email: e.target.value });
    if (!userDetails.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
      setEmailError('Please enter a valid email address');
      
    } else {
      setEmailError('');
      setemailValid(true);
    
    }
   
  };

  const handlePasswordChange = (e) => {
    setUserDetails({ ...userDetails, password: e.target.value });
    if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
      setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
      
    } 
    else {
      setPasswordError('');
      setpasswordValid(true);
     
      // setpasswordValid(passwordError === '');
      
    }
    
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    setIsSubmitting(true);
    try{
    if (emailValid && passwordValid){ 
      axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
         toast.success(`Welcome ${userDetails.email}`);
        navigate("/dashboard")
      })
        
    }

  }
    catch(error){
      toast.error(error.message);
      }
    
    finally{
      setIsSubmitting(false);
    }
    // else{ alert("else");}
  };

  return (
    <div>
      <center>
        <div className="Formcontainer">
          
          <form className= "form-group" onSubmit={handleSubmit}>
            <div>
            
              <label>Email</label>
              <img src={Img} alt="envelope"/>
              <input className="Inputfield" type="text" value={userDetails.email} onChange={handleEmailChange} required />
              
               <div>
                <span className="error">{emailError}</span></div>
            </div>

            <br>
            </br>
            <div>
              <label>Password</label>
              <input className="Inputfield" type="password" value={userDetails.password} onChange={handlePasswordChange} required />
              <div> <span className="error">{passwordError}</span></div>
            </div>
            <br>
            </br>
            <div >
            <button className= "Submitbutton" type="submit" disabled={isSubmitting}><img src={Img} alt="envelope"/>{isSubmitting ? 'Logging in...' : 'Login'}</button>
            <button className= "Submitbutton"><Link to="/forgotpassword"><img src={Img} alt="envelope"/>Forgot Password?</Link></button>
            </div>
          </form>
        </div>
      </center>
    </div>
  );

}
