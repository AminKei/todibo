import React from "react";
import "./Brands.css";
import brands from "../../Assets/Images/brands.png";



const Brands = () => {
  return (
    <div className="root-brands">
      <div>
        <h1>Brands</h1>
        <img src={brands} className="img-brands"/>
      </div>
    </div>
  );
};
export default Brands;