import React from "react";
import Logo from "../images/tishfaco.png";
import "./header.css";
import BasicModal from "./imageModal";

const LogoHeader = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={Logo} alt="Tish Faco Cantina logo" />
      </a>
      <p>Open Thur-Mon 3pm-8.30pm</p>
      <p>
        <a id="phone" href="tel:+61256168426">
          To book please <u>Call us</u>
        </a>
      </p>
      <p><BasicModal /></p>
    </div>
  );
};

export default LogoHeader;
