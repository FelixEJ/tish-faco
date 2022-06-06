import React, { Component } from "react";
import MenuItem from "./menuItem";
import "./menu.css";
import { Link } from "react-scroll";

class FoodMenuCollapse extends Component {
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
          <h1 className="menuHeading" onClick={this.toggle}>
            <i>{pageTitle}</i>
          </h1>
          <h3
            id="darrow"
            style={{
              display: display ? "none" : "inline",
            }}
          >
            &darr;
          </h3>
        </Link>
        <div
          className="menuBody"
          id="menuBody"
          style={{
            display: display ? "block" : "none",
          }}
        >
          {menu.map((item, index) => {
            return <MenuItem key={index} item={item}></MenuItem>;
          })}          
        </div>
      </div>
    );
  }
}
export default FoodMenuCollapse;
