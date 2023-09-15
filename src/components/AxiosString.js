import React, { useEffect, useState } from "react";
import axios from "axios";
const AxiosString = () => {

  const [Data, setData] = useState([]);
  const [Meta, setMata] = useState("Hello CEPT MYSURU");

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    setMata("Good Morning");
    });

  }, []);

 function buttonClick() {

    setMata("Hiii CEPT");
}

  return (

    <div className="tableForm">

      <div className="col-6">

        <h2>Name Table</h2>

        <table className="table">

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

            </tr>

          </thead>

          <tbody>

            {Data.reverse().map((get) => (

              <tr key={get.id}>

                <td>{get.id}</td>

                <td>{get.name}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

 

      <div className="col-6">

      
       <h2>Name: {Meta}</h2>
        
<button onClick={buttonClick}> Click Here</button>
      </div>

    </div>

  );

}

 

export default AxiosString;