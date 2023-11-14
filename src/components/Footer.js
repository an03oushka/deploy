import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <FaInstagram />
      <FaTwitter />
      <FaFacebook />
      <FaLinkedin />
      <p> &copy; 2023 PennyPincherPal.com</p>
    </div>
  );
}

export default Footer;
