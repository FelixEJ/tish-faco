import React, { Component } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {  
  render() {
    return (
      <div>
        <div className="barNav" id="barNav">
          <table >
            <thead className="navTable">
              <th className="nav-item">
                <NavLink exact={true} className="nav-link" to="/">
                  MENU
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/eventsPage">
                  EVENTS
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/galleryPage">
                  GALLERY
                </NavLink>
              </th>
              <th className="nav-item">
                <NavLink className="nav-link" to="/aboutPage">
                  ABOUT US
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
