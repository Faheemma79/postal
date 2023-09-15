import React from 'react';
import Img from "../../src/assets/header.PNG";

function Header() {
  return (
    <header>
      <h1><center><img src={Img} alt="header"></img></center></h1>
      {/* Add any header content or navigation links */}
    </header>
  );
}

export default Header;
