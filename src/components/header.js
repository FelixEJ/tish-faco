import React from "react";
import Logo from "../images/tishfaco.png";
import "./header.css";

const LogoHeader = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={Logo} alt="Tish Faco Cantina logo" />
      </a>
      <p>Open Wed-Mon from 5pm</p>
      <p>Happy Hour 5-6 Thu & Mon</p>
      <p>
        <a id="phone" href="tel:+61256168426">
          To book please <u>Call us</u>
        </a>
      </p>
    </div>
  );
};

export default LogoHeader;
