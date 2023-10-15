import React from "react";
import "./Brands.css";
import brands from "../../Assets/Images/brands.png";

const ImgLogos = [
  "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
  "https://cdn.inspireuplift.com/uploads/images/seller_products/1677747165_Untitled-4-01.png",
  "https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg",
];

const Brands = () => {
  return (
    <div className="root-brands">
      <div className="group-img-brands">
        <h1>Brands</h1>
        {/* {ImgLogos.map((item) => {
          return <img src={item}  width={100} style={{width:'200px'}} className="img-brands"/>;
        })} */}
        <img src={brands}  className="img-brands"/>
      </div>
    </div>
  );
};
export default Brands;
