import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.div`
  width: 80%;

  margin-left: auto;
  margin-right: auto;
  display: block;

  background-color: none;
  margin: 1% 0% 1% 0%;
  column-count: 4;
  column-gap: 1%;
`;

const NavBar2 = () => {
  return (
    <NavBar>
      <table>
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
    </NavBar>
  );
};

export default NavBar2;
