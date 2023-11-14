import React, { useState } from "react";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <h1 className="websiteName">PennyPincherPal</h1> {/* Add website name */}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <button className="toggleButton" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
