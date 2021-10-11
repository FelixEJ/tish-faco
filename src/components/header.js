import React from "react";
import Logo from "../images/tishfaco.png";
import "./header.css";

const LogoHeader = () => {
  return (
    <div className="header">
      <a href="/"><img src={Logo} alt="Tish Faco Cantina logo"/></a>
    </div>
  );
};

export default LogoHeader;
