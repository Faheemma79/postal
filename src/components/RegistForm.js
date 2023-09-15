import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import "./Validation.css";

const Url = "http://restapi.adequateshop.com";

function RegistForm() {

  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setValid]= useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileno: '',
    password: '',
    confirmpassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add your registration logic here, e.g., send data to a server.
  //   console.log(formData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(`${formData.username}`);
        if(formData.mobileno  )
      
        if (formData.password === formData.confirmpassword) {
          // Here, you can handle the registration logic, e.g., send data to a server.
          axios.post(Url + `/api/authaccount/login`, formData).then((response) => {
            toast.success(`Welcome ${formData.email}`);
           navigate("/dashboard")
         })
           .catch((error) => {
           toast.error(error.message);
           })
          console.log('Registration data:', formData);
        } else {
          alert('Password and confirm password do not match.');
        }
  };
  const handleMobilenoChange = (e) => {
    setFormData({ ...formData, mobileno: e.target.value });
    
    if (!e.target.value.match(/^\d{10}$/)) {
      setMobileNumberError('Please enter a valid mobile number');
          
    } else {
        alert("else");
           setMobileNumberError('');
      setValid(mobileNumberError === '');
    }
   
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData,  email: e.target.value });
    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
      setEmailError('Please enter a valid email address');
      
    } else {
      setEmailError('');
      setValid(emailError === '');
    }
   
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
    if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
      setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
      
    } else {
      setPasswordError('');
      setValid(passwordError === '');
    }
    
  };

    return (
    <div>
      <h2>REGISTRATION DETAILS</h2>
      <form className="Formcontainer" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input className="Inputfield"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="Inputfield"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileno">Mobile No:</label>
          <input className="Inputfield"
            type="number"
            id="mobileno"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleMobilenoChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="Inputfield"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input className="Inputfield"
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
        </div>
          <button className= "Submitbutton" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistForm;
 