import React from "react";
import "./Appbar.css";
import { Button } from "../../BaseComponents/Button/Button";
import { Popup } from "../../Components/Popup/Popup";
import { SearchBar } from "../../BaseComponents/SearchBar/SearchBar";
import BookData from "../../BaseComponents/SearchBar/Data.json";
import useProducts, { ProductList } from "../../Hooks/products/useProducts";
import { HamburgerLine } from "../../BaseComponents/HamburgerLine/HamburgerLine";
import { MenuItem } from "../../BaseComponents/MenuItem/MenuItem";
import { Link } from "react-router-dom";
let cartIcon =
  "https://icons.veryicon.com/png/o/miscellaneous/unicons/shopping-basket-16.png";

let homeicon =
  "https://icons.veryicon.com/png/o/miscellaneous/skent-icon/home-225.png";

let accounticon =
  "https://cdn.icon-icons.com/icons2/2406/PNG/512/user_account_icon_145918.png";

let Categoryicon =
  "https://cdn.iconscout.com/icon/free/png-256/category-2456577-2036097.png";

let searchIcon =
  "data:image/png;base64,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";

const AppBar = () => {
  const { data } = useProducts<ProductList>();

  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <HamburgerLine />
            <div className="logo">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "210px",
                }}
              >
                <Link to={"/"}>
                  <h1>Todibo</h1>
                </Link>
                <div>
                  <Popup
                    bgColor="#fff"
                    width={350}
                    height="540px"
                    padding="30px"
                    // justifyContent=""
                    display="grid"
                    radius="10px"
                    className="popup1"
                  >
                    <SearchBar data={data?.products ? data.products : []} />
                  </Popup>
                </div>
              </div>

              <div className="menu-items2">
                <li >
                  <Link to={"/AllProduct"}>Products</Link>
                </li>
                <li>
                  <a href="#Featured">Featured Products</a>
                </li>

                <li>
                  <a href="#Brands">Brands</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
              </div>
              <Button
                width={60}
                margin="0px -20px -6px 0px"
                bgColor="#fff"
                border="none"
              >
                <Popup
                  bgColor="#fff"
                  width={750}
                  height="70%"
                  padding="30px"
                  justifyContent="stretch"
                  display="grid"
                  radius="10px"
                  className="popup2"
                >
                  <SearchBar data={data?.products ? data.products : []} />
                </Popup>
              </Button>

              <div className="div-info">
                <button
                  className="button-cart"
                  onClick={() => (document.location = "/Cart")}
                >
                  <img src={cartIcon} className="icon-cart" />
                  <h2 className="number">{0}</h2>
                </button>
                <Button
                  bgColor="#252525"
                  border="white solid 1px "
                  color="white"
                  height={60}
                  width={160}
                  radius="10px"
                  className="button-account"
                  onClick={() => (document.location = "/Login")}
                >
                  Login | Sign Up
                </Button>
              </div>
            </div>
            <div className="logo">
              <div className="menu-items3">
                <li onClick={() => (document.location = "/AllProduct")}>
                  <img src={Categoryicon} width={32} />
                </li>
                <li onClick={() => (document.location = "/")}>
                  <img src={homeicon} width={30} />
                </li>
                <li
                  className="carticonandbadge"
                  onClick={() => (document.location = "/Cart")}
                >
                  <img width={34} src={cartIcon} />
                  <h1 className="number-cart2">0</h1>
                </li>
                <li>
                  <img
                    src={accounticon}
                    onClick={() => (document.location = "/Login")}
                    width={36}
                  />
                </li>
              </div>
            </div>

            <MenuItem />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default AppBar;
