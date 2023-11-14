import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home1.jpg";
import "../styles/Home.css";
import FloatingImage from "../components/FloatingImage";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div className="headerContent">
          <h1> PennyPincherPal </h1>
          <p> Own Your Coins, Own Your Life</p>
          <Link to="/dashboard"> 
            <button> START NOW </button>
          </Link>
        </div>
      <FloatingImage />
      </div>
    </div>
  );
}

export default Home;
