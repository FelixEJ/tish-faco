import React, { Component } from "react";
import MenuItemTable from "./menuItemTable";
import "./menu.css";
import birdLeft from "../images/bird_icon_left.png";
import birdRight from "../images/bird_icon_right.png";

class MenuCollapseTable extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;
    const pageTitle = this.props.pageTitle;
    const menu = this.props.menu;

    return (
      <div id="frame">
        <table>
          <thead>
            <tr>
              <th>
                <img
                  id="left"
                  src={birdLeft}
                  alt="Colourful bird in mexican art style"
                ></img>
              </th>
              <th>
                <h1
                  className="menuHeading"
                  onClick={() => this.setState({ visible: !visible })}
                >
                  {pageTitle}
                </h1>
              </th>
              <th>
                <img
                  id="right"
                  src={birdRight}
                  alt="Colourful bird in mexican art style"
                ></img>
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              display: visible ? "block" : "none",
            }}
          >
            {menu.map((item) => {
              return <MenuItemTable key={item.title} item={item}></MenuItemTable>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default MenuCollapseTable;
