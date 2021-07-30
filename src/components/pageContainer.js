import * as React from "react";
import "./pageContainer.css";

const pageContainer = () => {
  return (
    <div className={frame}>
      <h1 className={menuHeading}>{pageTitle}</h1>
      {menu.map((item) => {
          return <MenuItem item={item}></MenuItem>;
        })}
    </div>
  );
};
export default pageContainer;