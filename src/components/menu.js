import React from "react";
import MenuItem from "./menuItem";
import "./menu.css";

const Menu = ({menu, pageTitle}) => {
  return (
    <div id="frame">      
      <h1 className="menuHeading">{pageTitle}</h1>
      {menu.map((item) => {
          return <MenuItem key={item.title} item={item}></MenuItem>;
        })}
    </div>
  );
};
export default Menu;
