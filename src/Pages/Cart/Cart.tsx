import React from "react";
import "./Cart.css";
import AppBar from "../../Components/Appbar/Appbar";
import { Footer } from "../../Components/Footer/Footer";
import { Button } from "../../Components/Button/Button";

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
              <div className="info-data-cart">
                <div className="data-top">
                  <h5>Cardigen</h5>
                  <div className="input-item-cart">
                    <Button bgColor="black" border="black solid 1px"> +</Button>
                    <input type="number" className="input-cart-number" placeholder="1" step="1" />
                    <Button bgColor="black" border="black solid 1px">-</Button>
                  </div>
                  <h4>$ 120</h4>
                </div>
                <div className="data-bottom">
                  <p>Green xs</p>
                  <p >Remove</p>
                  <p id="caption-cart-item">Caption</p>
                </div>
              </div>
            </div>
          </div>
          <div className="root-checkout">
            <div className="checkout">
              <div className="data-di-sta">
                <div className="data-static">
                  <td>Subtotal:</td>
                  <td>Discount:</td>
                  <td>Delivery:</td>

                  <td>Grand total:</td>
                </div>
                <div className="data-dainmic">
                  <td>$3300.00</td>
                  <td>$0</td>
                  <td>$12</td>
                  <td>$3312.00</td>
                </div>
              </div>
              <Button
                bgColor="#252525"
                border="white solid 1px "
                color="white"
                height={60}
                radius="10px"
                className="btn-cart"
              >
                Checkout now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
