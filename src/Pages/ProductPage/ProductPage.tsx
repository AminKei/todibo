import React from "react";
import "./ProductPage.css";
import AppBar from "../../Components/Appbar/Appbar";
import Datalist from "../../Components/Datalist/Datalist";
import TheDatalist from "../../Components/TheDatalist/TheDatalist";
import RatingReviews from "../../Components/RatingReviews/RatingReviews";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Limited from "../../Components/Limited/Limited";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { Footer } from "../../Components/Footer/Footer";

let productImg =
  "https://images.boardriders.com/globalGrey/rvca-products/all/default/large/avjzt00735_rvca,w_vwt_frt1.jpg";

const ProductPage = () => {
  return (
    <>
      <AppBar />
      <div className="root-div-propage">
        <div className="div-product">
          <div className="div-img1">
            <img src={productImg} className="img-product" />
          </div>
          <div className="div-infoproduct">
            <p className="p-pro-link">Home / Products / Dorse </p>
            <h2 className="h2-pro-name">
              Jenny’s Closets - The winter
              <br /> top for female, green
            </h2>
            <h1>$49</h1>
            <hr/>
            <p>Save 50% right now</p>
            <p>Features:</p>
            <ul className="option-product">
              <li>Made with full cotton</li>
              <li>Slim fit for any body</li>
              <li>Quality control by JC</li>
            </ul>
            <p>Colors:</p>
            <div className="div-colors">
              <div className="item-color1"></div>
              <div className="item-color2"></div>
              <div className="item-color3"></div>
            </div>
            <button className="btn-propage">Add To Cart</button>
          </div>
        </div>
      </div>
      <Datalist/>
      <TheDatalist/>
      <RatingReviews/>
      <FeaturedProducts/>
      <Limited/>
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default ProductPage;
