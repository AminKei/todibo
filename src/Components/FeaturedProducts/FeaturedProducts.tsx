import React from "react";
import "./FeaturedProducts.css";
import product from "../../Assets/Images/product.png";

let cartIcon =
  "https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png";

let productimg =
  "https://images.boardriders.com/globalGrey/rvca-products/all/default/large/avjzt00735_rvca,w_vwt_frt1.jpg";

const FeaturedProducts = () => {
  return (
    <div className="root-div-Featured" id="Featured">
      <h1>Featured Products</h1>
      <div className="div-items">

        <div className="item-product">
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div
              className="cart-div"
              onClick={() => (document.location = "/ProductPage")}
            >
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="item-product">
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div
              className="cart-div"
              onClick={() => (document.location = "/ProductPage")}
            >
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="item-product">
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div
              className="cart-div"
              onClick={() => (document.location = "/ProductPage")}
            >
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="item-product">
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div
              className="cart-div"
              onClick={() => (document.location = "/ProductPage")}
            >
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="item-product">
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div
              className="cart-div"
              onClick={() => (document.location = "/ProductPage")}
            >
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="item-product">
          <div className="div-img-product">
            <img src={productimg} className="img-pro" />
          </div>
          <div className="divs-info">
            <div>
              <h4>Autumn</h4>
              <h2>$ 120</h2>
            </div>
            <div
              className="cart-div"
              onClick={() => (document.location = "/ProductPage")}
            >
              <img src={cartIcon} width={40} />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
