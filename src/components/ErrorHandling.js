import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//https://randomfox.ca/floof/
//https://randomfox.ca/floof/aaaa


function ErrorHandling() {
    
const [UserDetails, setUserDetail]= useState ([]);
const[ errors, setError] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error('Response was not ok');
      }
    })
    .then((response) => {
      setUserDetail(response.data);
    })
  
    .catch((error) => {
      console.log(error);
          setError(error.message);
    });
}, []); 

if (!UserDetails) {
   return <div>Loading...</div>;
}     

if (errors) {
   return <div>Error: {errors}</div>;
}
  return (
    <div>
      <h2> Selected User Id: ({UserDetails.id} ) </h2> 
      <h2> Selected User Name:( {UserDetails.name} ) </h2>
      <h2> Selected User Email:({UserDetails.email} ) </h2>
    

    </div>
  );
}

export default ErrorHandling;

