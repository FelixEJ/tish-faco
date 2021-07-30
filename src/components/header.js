import React from "react";
import Logo from "../images/tishfaco.png";
import "./header.css";

const LogoHeader = () => {
  return (
    <div>
      <a href="/"><img src={Logo} alt="Tish Faco Cantina logo"/></a>
      <p id="address"><a href="https://goo.gl/maps/xwLV4mbH2pAE21c9A">111 Hyde St, Bellingen NSW 2454</a></p>
      <a id="phone" href="tel:+61256168426">(02) 56168426</a>
    </div>
  );
};

export default LogoHeader;
