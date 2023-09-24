import React from "react";
import "./Appbar.css";
import { Input } from "../Input/Input";



let IconCart  = "https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
let IconAccount  = "https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png"
const AppBar = () => {
  return (
    <div className="appbar">
      <h1 className="Name">Todibo</h1>
      <nav className="appbar-child1">
          <a href="#">All Products</a>
          <a href="#">MostWanted</a>
          <a href="#">NewAvrrial</a>
          <a href="#">brand</a>
      </nav>
      <div className="appbar-child2">
        <Input heigth={30} width={250} placeholder="Search" children />
        <img src={IconCart} width={23} height={23}/>
        <img src={IconAccount} width={30} height={28}/>
      </div>
    </div>
  );
};
export default AppBar;
