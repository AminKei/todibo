import React from "react";
import "./FeaturedProducts.css";
import product from "../../Assets/Images/product.png";

let cartIcon =
  "https://www.mrstastekw.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty-cart.bfde06e6.gif&w=256&q=75";

let productimg =
  "https://images.boardriders.com/globalGrey/rvca-products/all/default/large/avjzt00735_rvca,w_vwt_frt1.jpg";

const FeaturedProducts = () => {
  return (
    <div className="root-div-Featured" id="Featured">
      <h1>Featured Products</h1>

      <div className="div-items">
        <div className="item-product" onClick={()=> document.location = "/productpage"}>
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <img src={cartIcon} width={58}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
