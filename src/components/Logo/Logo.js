import React from "react";

import burgerLogo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = (props) => (
  <div className="Logo">
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default Logo;
