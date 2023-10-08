import React from "react";
import "./Currated.css";

import currtedImg from '../../Assets/Images/currtedImg.png';

const Currated = () => {
  return (
    <div className="root-div-Currated">
      <h1 className="text-root-currated">Currated Picks</h1>
      <div className="divs-Currated">
        <div className="item-pick">
          <img src={currtedImg} className="img-item" />
          <button className="btn-item">See More</button>
        </div>
        <div className="item-pick">
          <img src={currtedImg} className="img-item" />
          <button className="btn-item">See More</button>
        </div>
        <div className="item-pick">
          <img src={currtedImg} className="img-item" />
          <button className="btn-item">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Currated;
