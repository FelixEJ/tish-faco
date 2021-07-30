import React, { Component } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {  
  render() {
    return (
      <div>
        <div className="barNav">
          <table >
            <thead className="navTable">
              <th className="nav-item">
                <NavLink exact={true} className="nav-link" to="/">
                  Menus
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/eventsPage">
                  Events
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/galleryPage">
                  Gallery
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/aboutPage">
                  About Us
                </NavLink>
              </th>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default NavBar;
