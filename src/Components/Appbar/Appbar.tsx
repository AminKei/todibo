import React from "react";
import "./Appbar.css";
import { Input } from "../Input/Input";

let cartIcon =
  "https://icons.veryicon.com/png/o/miscellaneous/unicons/shopping-basket-16.png";

let homeicon = "https://lordicon.com/icons/system/outline/41-home.svg";

let accounticon = "https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png"


let Categoryicon = "https://cdn.iconscout.com/icon/free/png-256/category-2456577-2036097.png"


const AppBar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>Todibo</h1>

              <div className="menu-items2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Elements</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </div>
              <div className="div-info">
                <button className="button-cart">
                  <img src={cartIcon} className="icon-cart" />
                  <h2 className="number">2</h2>
                </button>
                <button className="button-account">Account</button>
              </div>
            </div>
            <div className="logo">
              <div className="menu-items3">
                <li>
                  <img src={Categoryicon} width={32} />
                </li>
                <li>
                  <img src={homeicon} width={36} />
                </li>
                <li style={{display:'flex' , alignItems:'center' , gap:"3px" }}>

                  <img width={34} src={cartIcon}  />
                  <h1 className="number-cart2">0</h1>
                </li>
                <li>
                  <img src={accounticon} width={36} />
                </li>
              </div>
            </div>

            <div className="menu-items">
              <li>
                <a href="#">Mens</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Acsecory</a>
              </li>
              <li>
                <a href="#">Shose</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default AppBar;
