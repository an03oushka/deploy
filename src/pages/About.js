import React from "react";
import MultiplePizzas from "../assets/homepic.jpg";
import DollarGif from "../assets/dollar.gif"; // Import the GIF
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <div className="aboutTitle">
          <h2> ABOUT US</h2>
          <img
            src={DollarGif}
            alt=""
            className="cornerGif"
          />
        </div>
        <p>
        Welcome to PennyPincherPal - Your Trusted Partner in Financial Freedom!

At PennyPincherPal, we are dedicated to helping you take control of your financial life. We understand that managing your personal finances can sometimes feel overwhelming, which is why we're here to simplify the process and empower you to achieve your financial goals.

Our mission is to provide you with the tools and resources to make informed financial decisions, no matter where you are on your financial journey. Whether you're just starting to build your savings, paying off debt, or planning for retirement, we're here to support you every step of the way.

Why Choose Us?

Expertise: Our team of financial experts has a deep understanding of personal finance. We're constantly researching and developing tools to make your financial life easier.

Security: We take the security of your financial data seriously. Your privacy is our priority, and we use the latest encryption technologies to keep your information safe.
        </p>
      </div>
    </div>
  );
}

export default About;