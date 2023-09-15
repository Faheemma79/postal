import React from "react";
import "./Navbar.css";
//import Img from "../../src/assets/image1.jpg";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Centeredinput.css"
import "./Validation.css";

function Navbar({ onSearch }) {

  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };


  return (
    <div className="navbar">
      <nav>
        {/* <h1 style={{ fontSize: "40px" }}><center>Postal Digital Library</center></h1> */}
        {/* <center><img src={Img} alt="indiapost logo"></img></center> */}
        <div className="search-bar">
          <input
          className="Centeredinput"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <table>
        <td >
        <Link to="/">Quick Links</Link>
        </td>
          <td>
          <Link to ="/books">books</Link>
          </td>
          <td>
          <Link to="/Validation">login</Link>
          </td>
          <td>
          <Link to="/RegistForm">Registration</Link>
          </td>
          <td>
          <Link to="/Products">UserPage</Link>
          </td>
        </table>
      </nav>
    </div>
  );
}
export default Navbar;
