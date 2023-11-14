import React from "react";
import Events from "../components/Events";



const sectionStyle = {
    position: "fixed",
    right: 0,
    top: "60px", // Adjust this value to match the height of your navbar
    background: "linear-gradient(to bottom, #007BFF, #87CEEB, #00CED1)",
    height: "calc(100vh - 60px)", // Adjust the height to fill the remaining viewport height
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    padding: "1rem 0.5rem",
    gap: "2rem",
    margin: "0px",
};

const gridStyle = {
    zIndex: 2,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

const RightSidebar = () => {
    return (
        <section style={sectionStyle}>
            <div className="grid" style={gridStyle}>
                <Events /> {/* Centered vertically */}
            </div>
        </section>
    );
};

export default RightSidebar;
