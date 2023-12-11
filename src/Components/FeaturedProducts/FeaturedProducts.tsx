import React, { useState } from "react";
import "./FeaturedProducts.css";
import product from "../../Assets/Images/product.png";
import Products from "../../Api/Products.json";

let cartIcon =
  "https://www.mrstastekw.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty-cart.bfde06e6.gif&w=256&q=75";

let productimg =
  "https://images.boardriders.com/globalGrey/rvca-products/all/default/large/avjzt00735_rvca,w_vwt_frt1.jpg";

const FeaturedProducts = () => {
  const [productList, setproductList] = useState(Products.data);

  return (
    <div className="root-div-Featured" id="Featured">
      <h1>Featured Products</h1>

      <div className="div-items">
        {productList.map((item, index) => {
          return (
            <div
              className="item-product"
              onClick={() => (document.location = `/ProductPage?id=${item.id}`)}
            >
              <div className="div-img-product">
                <img src={item.img} className="img-pro" />
              </div>
              <div className="divs-info">
                <div>
                  <h4>{item.name}</h4>
                  <h2>${item.price}</h2>
                </div>
                <img src={cartIcon} width={58} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
