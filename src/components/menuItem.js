import * as React from "react";
import "./menuItem.css";

const MenuItem = ({ item }) => {
  return (
    <div className="menuItem" id="menuItem">
      <h2 className="subTitle">{item.subTitle}</h2>
      <h3 className="itemTitle">{item.title}</h3>
      <h3 className="itemPrice">{item.price}</h3>
      <h4 className="itemType">{item.type}</h4>
      <p className="itemDesc">{item.description}</p>
      <h4 className="opt1">{item.opt1}</h4>
      <h4 className="opt2">{item.opt2}</h4>
    </div>
  );
};

export default MenuItem;
