import * as React from "react";
import "./tracker.css";
import { initiative } from "../data/initiative.js";

const Tracker = () => {
  return (
    <main className="container">
      <div className="smallBox">
        <div className="debuff">{initiative[0].debuff}</div>
        <div className="buff">{initiative[0].buff}</div>
        <div className="name">{initiative[0].name}</div>
        <div className="reaction">{initiative[0].reaction}</div>
      </div>

      <div className="largeBox">
        <h1>Large box</h1>
        <div className="name">Name</div>
        <div className="pic">Picture</div>
        <div className="ac">AC</div>
        <div className="action">Action</div>
        <div className="buff">Buff</div>
        <div className="bonus">Bonus</div>
        <div className="debuff">Debuff</div>
        <div className="movement">Movement</div>
        <div className="reaction">Reaction</div>
        <div className="notes">Notes</div>
      </div>
    </main>
  );
};

export default Tracker;
