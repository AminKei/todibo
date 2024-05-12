import React from "react";
import "./Brands.css";

const Brands = () => {
  return (
    <div className="root-brands" id="Brands">
      <div className="group-img-brands">
        {/* <marquee direction="left"> */}
        <h1>Brands</h1>
          <img src="/Assets/Images/brands.png" className="img-brands" />
          <img src="/Assets/Images/brands.png" className="img-brands" />
          <img src="/Assets/Images/brands.png" className="img-brands" />
          {/* <img src="/Assets/Images/brands.png" className="img-brands" /> */}
          {/* <img src="/Assets/Images/brands.png" className="img-brands" /> */}
        {/* </marquee> */}
      </div>
    </div>
  );
};
export default Brands;
