import React from "react";
import "./Limited.css";
// import ImgLimited from "../../Assets/Images/limited.png";
import { Button } from "../../BaseComponents/Button/Button";



let ImgLimited =  "https://img.freepik.com/premium-photo/attractive-couple-black-stylish-elegant-young-man-woman-spotlight-beautiful-blo_125374-3603.jpg"
const Limited = () => {
  return (
    <div className="root-div-Limited">
      <div className="div-limited">
        <img src={ImgLimited} className="img-Limited" />
        <div className="info-div">
          <h3 className="text-limited">Limited offer</h3>
          <h1 className="text-limited">
            35% off only this fridy shoping cart original
            <br /> and get spicial gift
          </h1>
          <Button bgColor="#fff" border="white solid 1px " color="black" height={60} width={350} >Grab it new</Button>
        </div>
      </div>
    </div>
  );
};
export default Limited;
