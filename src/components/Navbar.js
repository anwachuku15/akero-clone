import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <img
        src={require("../assets/img/green.png")}
        className="navbarLogo"
        alt=""
      />
    </div>
  );
};

export default Navbar;
