import React from "react";
import "./Cart.css";
import AppBar from "../../Components/Appbar/Appbar";
import { Footer } from "../../Components/Footer/Footer";

let ImageCart =
  "https://contents.mediadecathlon.com/p2436315/e957bd6a23553ffabaef22fd550e99c3/p2436315.jpg";

const Cart = () => {
  return (
    <>
      <AppBar />
      <div className="root-cart">
        <h2>Cart</h2>
        <div className="root-box">
          <div className="root-items">
            <div className="item-product2">
              <img src={ImageCart} className="img-product-cart" />
              <div
                className="info-data-cart"
              >
                <div className="data-top">
                  <h5>Cardigen</h5>
                  <input type="number" />
                  <h4>$ 120</h4>
                </div>
                <div className="data-bottom">
                  <p>Green xs</p>
                  <p>Remove</p>
                  <p>Caption</p>
                </div>
              </div>
            </div>
          </div>
          <div className="root-checkout">
            <div className="checkout">
              <table className="table-cart">
                <tr>
                  <td>Subtotal:</td>
                  <td>$3300.00</td>
                </tr>
                <tr>
                  <td>Discount:</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Delivery:</td>
                  <td>$12</td>
                </tr>
                <hr />
                <tr>
                  <td>Grand total:</td>
                  <td>$3312.00</td>
                </tr>
              </table>
              <button className="btn-cart">Checkout now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
