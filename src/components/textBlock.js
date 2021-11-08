import React from "react";
import "./textBlock.css";

const TextBlock = () => {
  return (
    <div className="textPage">
      <h1 className="title">About Us</h1>
      <p className="textBlock">
        Tish Faco Cantina brings the fresh tastes of the Californian/Mexican
        fusion that inspired it to the produce paradise of Bellingen. We take
        advantage of fresh, locally grown goods wherever possible, and the
        owners own verdant garden helps inspire seasonal specials in both food
        and drinks. Come on in to see our latest "especials" menu and see what
        amazing concoctions we are whipping up today!
        <br />
        <br />
        Everything at Tish Faco is gluten free, and we have many vegetarian and
        vegan options across our menu. Meat eaters need not despair as we serve
        fresh seafood and local meats made with equal love and flavour. We have
        tasty bites for a quick snack, through to filling meals for a full
        dinner experience on offer, made fresh and ready to order.
        <br />
        <br />
        Our bar is stocked with the finest in tequilas and gins, as well as
        everything else you would expect, and our margaritas menu grows each
        month.
        <br />
        <br />
        Our humble beginnings as a pop up food truck means we are ready and
        waiting for catering and events, email us at{" "}
        <em><b><a href="mailto:contact@tishfaco.com.au">
          contact@tishfaco.com.au
        </a></b></em>{" "}
        with your needs and we will get you sorted.
      </p>
      <table className="opening">
        <tr>
          <th>Opening</th>
          <th>Hours</th>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>3PM - 8.30PM</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>3PM - 8.30PM</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>3PM - 8.30PM</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>3PM - 8.30PM</td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>3PM - 8.30PM</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>Closed</td>
        </tr>
        
      </table>
    </div>
  );
};

export default TextBlock;
