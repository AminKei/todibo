import React from "react";
import "./Limited.css";
import ImgLimited from "../../Assets/Images/limited.png";

const Limited = () => {
  return (
    <div className="root-div-Limited">
      <div className="div-limited">
        <img src={ImgLimited} className="img-Limited" />
        <div className="info-div">
          <h3 className="text-limited">Limited offer</h3>
          <h1 className="text-limited">35% off only this fridy shoping cart original<br/> and get spicial gift</h1>
          <button className="btn-limited">Grab it new</button>
        </div>
      </div>
    </div>
  );
};
export default Limited;
