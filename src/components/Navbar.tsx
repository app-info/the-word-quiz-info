/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import "../styles/sass/components/navbar/navbar.css";

const logo = require("../assets/images/agioiPantes.png");

const Navbar: FC = () => {
  return (
    <div id="navbar">
      <a className="active" href="#home">
        <img src={logo} alt="logo" width={50} height={40} />
      </a>
      <a className="info-link" href="#privacy-policy">
        Privacy-policy
      </a>
    </div>
  );
};

export default Navbar;
