import React, { Component } from "react";
import MenuItem from "./menuItem";
import "./menu.css";
import birdLeft from "../images/bird_icon_left.png";
import birdRight from "../images/bird_icon_right.png";
import { Link } from "react-scroll";

class MenuCollapse extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      display: false,
    };
  }

  toggle = () => {
    this.setState((prevstate) => ({
      display: !prevstate.display,
    }));
  };

  render() {
    const { display } = this.state;
    const pageTitle = this.props.pageTitle;
    const menu = this.props.menu;

    return (
      <div id="frame">
        <div id={pageTitle}></div>
        <Link to={pageTitle} spy={true} smooth={true}>
          <img
            id="left"
            src={birdLeft}
            alt="Colourful bird in mexican art style"
          ></img>

          <h1
            className="menuHeading"
            onClick={this.toggle}
          >
            {pageTitle}
          </h1>
          <h3 id="darrow"
          style={{
            display: display ? "none" : "inline",
          }}>&darr;</h3>

          <img
            id="right"
            src={birdRight}
            alt="Colourful bird in mexican art style"
          ></img>
        </Link>
        <div
          className="menuBody"
          id="menuBody"
          style={{
            display: display ? "block" : "none",
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
