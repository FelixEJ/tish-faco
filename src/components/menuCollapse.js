import React, { Component } from "react";
import MenuItem from "./menuItem";
import "./menu.css";
import birdLeft from "../images/bird_icon_left.png";
import birdRight from "../images/bird_icon_right.png";

class MenuCollapse extends Component {
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
        <img id="left" src={birdLeft} alt="Colourful bird in mexican art style"></img>
        <h1
          className="menuHeading"
          onClick={() => this.setState({ visible: !visible })}
        >
          {pageTitle}
        </h1>
        <img id="right" src={birdRight} alt="Colourful bird in mexican art style"></img>
        <div
          style={{
            display: visible ? "block" : "none",
          }}
        >
          {menu.map((item) => {
            return <MenuItem key={item.title} item={item}></MenuItem>;
          })}
        </div>
      </div>
    );
  }
}
export default MenuCollapse;
