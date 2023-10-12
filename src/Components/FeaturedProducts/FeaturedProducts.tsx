import React from "react";
import "./FeaturedProducts.css";
import product from "../../Assets/Images/product.png";

let cartIcon =
  "https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png";
const FeaturedProducts = () => {
  return (
    <div className="root-div-Featured">
      <h1>Featured Products</h1>
      <div className="div-items">
        <div className="item-product">
          <div className="div-img-product">
            <img src={product} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div className="cart-div" onClick={()=> document.location = '/ProductPage'}>
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        <div className="item-product">
          <div className="div-img-product">
            <img src={product} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div className="cart-div">
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        <div className="item-product">
          <div className="div-img-product">
            <img src={product} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div className="cart-div">
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        <div className="item-product">
          <div className="div-img-product">
            <img src={product} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div className="cart-div">
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        <div className="item-product">
          <div className="div-img-product">
            <img src={product} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div className="cart-div">
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
