import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import LogoHeader from "./header.js";

class NavBarBurger extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };
  }
  render() {
    const { visible } = this.state;

    return (
      <div>
        <div className="slideNav">
          <p
            id="slideNavButton"
            onClick={() => this.setState({ visible: !visible })}
          >
            ☰
          </p>
        </div>
        <div className="slideMenu">
          <ul
            style={{
              display: visible ? "block" : "none",
              textDecoration: "none",
            }}
            className="nav flex-column"
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutPage">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutPage">
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/aboutPage">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBarBurger;