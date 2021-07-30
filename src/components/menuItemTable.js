import * as React from "react";
import "./menuItem.css";

const MenuItemTable = ({ item }) => {
  return (
    <div className="menuItem">
      <tr>
        <th className="itemTitle">{item.title}</th>
        <td className="itemType">{item.type}</td>
        <td className="itemPrice">${item.price}</td>
      </tr>
      <tr>
        <td className="itemDesc">{item.description}</td>
      </tr>
      <tr>
        <td className="opt1">{item.opt1}</td>
      </tr>
      <tr>
        <td className="opt2">{item.opt2}</td>
      </tr>
    </div>
  );
};

export default MenuItemTable;
