import React, { Component } from "react";
import "./footer.css";
import facebook from "../images/fb_logo.png";
import insta from "../images/insta_logo.png";
import maps from "../images/maps_logo.png";
import trip from "../images/tripadvisor_logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <table>
          <tr>
            <th>
              <a
                href="https://www.facebook.com/tishfaco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook logo"></img>
              </a>
            </th>
            <th>
              <a
                href="https://www.instagram.com/tishfaco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="instagram logo"></img>
              </a>
            </th>
            <th>
              <a
                href="https://goo.gl/maps/xwLV4mbH2pAE21c9A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={maps} alt="google maps logo"></img>
              </a>
            </th>
            <th>
              <a
                href="https://www.tripadvisor.com.au/Restaurant_Review-g488319-d21402105-Reviews-Tish_Faco_Cantina-Bellingen_New_South_Wales.html?m=19905"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={trip} alt="tripadvisor logo"></img>
              </a>
            </th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Footer;
